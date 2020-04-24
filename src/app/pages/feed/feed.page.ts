import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';

import { PostCrudService } from './../../services/firestore-api.service';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  loginForm: FormGroup;
  togglePostFlag: boolean;
  newPostImage: string;
  newPostText: string;

  public fname: string;
  public lname: string;
  postData = { };
  posts = {};
  public myPosts = [];
  public profileImage;
  public imageReady: boolean;
  public imageID: string;

  constructor(
              private auth: AuthService,
              private productService: ProductService,
              private actionSheetController: ActionSheetController,
              private camera: Camera,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,
              private webview: WebView,
              private sanitizer: DomSanitizer,
              private postCrudService: PostCrudService
  ) {
    this.togglePostFlag = false;
  }


  signOut() {
    this.auth.signOut();
  }
  
  ngOnInit() {
    const id = this.afAuth.auth.currentUser.uid;
    this.getUserData(id);

    // This gets all posts...
    this.postCrudService.readPosts().subscribe(data => {

      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Data: e.payload.doc.data()['data'],
          Image: e.payload.doc.data()['image'],
          User_ID: e.payload.doc.data()['user_id'],
        };
      })

      // Overly convoluted hack as I couldn't figure out how to query properly.
      // This will need to be fixed eventually.
      const postsLength = Object.keys(this.posts).length;
      const id = this.afAuth.auth.currentUser.uid;
      let counter = 0;

      for (let i = 0; i < postsLength; i++) {
        // If only this users posts
        if (this.posts[i].User_ID === id) {
          this.myPosts[counter] = this.posts[i];
          this.getUserData(this.posts[i].User_ID);

          // If this.posts[i].Image is set.
          if (this.posts[i].Image !== undefined) {
            this.getPostImage(id, this.posts[i].Image, counter);
          }
          counter++;
        }
      }
      //console.log(this.myPosts);
    });
  }


  togglePost() {
    if (this.togglePostFlag === false) {
      this.togglePostFlag = true;
    } else {
      this.togglePostFlag = false;
    }
  }


  // Image Handlers
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
    const id = this.afAuth.auth.currentUser.uid;


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
      this.imageID = this.makeid(60);
      // console.log(this.imageID);
      this.uploadImage(this.profileImage, this.imageID);
    });
  }

  uploadImage(imageURI, imageName){
    return new Promise<any>((resolve, reject) => {
      const id = this.afAuth.auth.currentUser.uid;
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

  removeImage() {
    this.profileImage = '';
    this.imageReady = false;
  }

  async createPost() {
    const id = this.afAuth.auth.currentUser.uid;
    let record = {};
    record['user_id'] = id;
    this.postData['fname'] = this.fname;
    this.postData['lname'] = this.lname;
    record['data'] = this.postData;

    if(this.imageID !== undefined){
      record['image'] = this.imageID;
    }

    this.postCrudService.createPost(record).then(resp => {
      // console.log(resp);
    })
      .catch(error => {
        // console.log(error);
      });
  }


  async getPostImage(id, imageID, counter){
    const ref = this.storage.ref(id + '/image/' + imageID);
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      // this.profileImage = result;
      // this.imageReady = true;
      // console.log('counter', counter);
      // console.log(result);
      this.myPosts[counter].Image = result;
      return result;
    });
  }

  makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  async getUserData(id) {
    const userData = await this.db.collection('users')
      .doc(id)
      .ref
      .get().then( doc => { // function(doc) {
          if (doc.exists) {
              const userData = doc.data();
              return userData;
          } else {
              // console.log('No such document!');
          }
      });


    this.fname = userData.fname;
    this.lname = userData.lname;
    // this.dataReady = true;
  }

}
