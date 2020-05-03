import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym-admin.page.html',
  styleUrls: ['./gym-admin.page.scss'],
})



export class GymAdminPage implements OnInit {

  // public fname: string;
  // public lname: string;
  public address: string;
  public city: string;
  public name: string;
  public phone: string;
  public dataReady: boolean;
  image = null;
  public imageReady: boolean;
  public profileImage;



  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,
              private camera: Camera,
              private sanitizer: DomSanitizer,
              private actionSheetController: ActionSheetController,
              private webview: WebView,
  ) {
    const id = '9WkemgxIr047EjC8y7C5';
    this.dataReady = false;
    this.imageReady = false;
  }


  ngOnInit() {
    const id = '9WkemgxIr047EjC8y7C5';
    this.getGymData(id);
    this.getProfileImage(id);
  }

  signOut() {
    this.auth.signOut();
  }

  async getGymData(id) {
    const gymData = await this.db.collection('gyms')
      .doc(id)
      .ref
      .get().then( doc => { // function(doc) {
          if (doc.exists) {
              const gymData = doc.data();
              return gymData;
          } else {
              console.log('No such document!');
          }
      });

    // this.fname = userData.fname;
    // this.lname = userData.lname;
    this.name = gymData.name;
    this.address = gymData.address;
    this.city = gymData.city;
    this.phone = gymData.phone;
    this.dataReady = true;
  }

  async selectSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.captureImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    actionSheet.present();
  }

  captureImage(sourceType: number) {
    let storageRef: AngularFireStorageReference = null;
    const id = '9WkemgxIr047EjC8y7C5';


    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };


    this.camera.getPicture(options).then(imagePath => {
      storageRef = this.storage.ref(id);
      // Convert url to safe url and set the state of new profileImage
      this.profileImage = this.webview.convertFileSrc(imagePath);
      this.imageReady = true;
      // Upload image
      this.uploadImage(this.profileImage, 'profileImage');
    });
  }

  uploadImage(imageURI, imageName){
    return new Promise<any>((resolve, reject) => {
      const id = '9WkemgxIr047EjC8y7C5';
      let storageRef: AngularFireStorageReference = this.storage.ref(id);
      let imageRef = storageRef.child('image').child(imageName);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL);
          this.profileImage = snapshot.downloadURL;
        }, err => {
          reject(err);
        })
      })
    })
  }

  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext('2d');
    var img = new Image();
    img.crossOrigin = 'anonymous';  // This enables CORS
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL('image/jpeg');
      callback(dataURL);
    };
    img.src = imageUri;
  }


  async getProfileImage(id){
    const ref = this.storage.ref(id + '/image/profileImage');
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      this.profileImage = result;
      this.imageReady = true;
    });
  }

  async createPost() {
    const id = '9WkemgxIr047EjC8y7C5';
  }

} // end ProfilePage Class
