import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Geofence} from '@ionic-native/geofence/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  products: Observable<any>;
  lat;
  long;
  image = null;
  public profileImage;
  public name: string;
  public dataReady: boolean;
  public imageReady: boolean;
  // public imageID: string;


  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,
              private camera: Camera,
              private actionSheetController: ActionSheetController,
              private webview: WebView,
              private productService: ProductService, 
              private geolocation: Geolocation, 
              private geofence: Geofence
  ) { 
    const id = this.afAuth.auth.currentUser.uid;
    this.dataReady = false;
    this.imageReady = false;
    
  }

  ngOnInit() {
    this.products = this.productService.getSellerProducts();
    const id = this.afAuth.auth.currentUser.uid
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((location) => {
      this.lat= location.coords.latitude;
      this.long = location.coords.longitude;
      console.log('Latitude: ' + location.coords.latitude);
      console.log('Longitude: ' + location.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
   
  }
  addGeofence(){
    let fence = {
      id: 'testID',
      latitude: 46.411662,
      longitude: -117.026571,
      radius: 100,
      transitionType: 3,
      notification: {
        id: 1,
        title: 'You crossed a fence',
        text: 'You just arrived at LCSC',
        openAppOnClick : true
      }
    }
    this.geofence.addOrUpdate(fence).then(
      () => console.log("Geofence added"),
      (err) => console.log('Geofence failed to add')

    );
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
      this.uploadImage(this.profileImage, 'profileImage');
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

  async getProfileImage(id){
    const ref = this.storage.ref(id + '/image/profileImage');
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      this.profileImage = result;
      this.imageReady = true;
    });
  }

   


  delete(id) {
    this.productService.deleteProduct(id);
  }

  signOut() {
    this.auth.signOut();
  }

}