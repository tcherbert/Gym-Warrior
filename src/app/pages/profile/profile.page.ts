import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {



  // This works to pull all users data in conjunction with the code below the next 2 lines... 
  // But is vastly overkill. Keeping it for possible future reference.
  // userCollection: AngularFirestoreCollection<User>;
  // userData: Observable<User[]>;
  // this.userCollection = this.db.collection('users');
  // this.userData = this.userCollection.valueChanges(); 



  public fname: string;
  public lname: string;
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
    this.dataReady = false;
    this.imageReady = false;

  }




  ngOnInit() {
    this.getUserData();
  }

  signOut() {
    this.auth.signOut();
  }

  async getUserData(){
    const id = this.afAuth.auth.currentUser.uid;
    const userData = await this.db.collection('users')
      .doc(id)
      .ref
      .get().then(function(doc) {
          if (doc.exists) {
              // console.log("Document data:", doc.data());
              const userData = doc.data();
              // this.fname = doc.data().fname;
              // this.lname = doc.data().lname;
              // this.updateData = true;
              return userData;

              console.log('userData: ', userData);
          } else {
              console.log('No such document!');
          }
      });

    this.fname = userData.fname;
    this.lname = userData.lname;
    this.dataReady = true;
  }

  async selectSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          console.log("Hello from Load from Library");
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

  captureImage(sourceType: number){
    console.log("Hello from CaptureImage");

    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      console.log('Path Before: ', imagePath);
      // this.image = this.webview.convertFileSrc(imagePath);
      // this.image = this.sanitizer.bypassSecurityTrustUrl(this.image);
      // console.log('path: ', this.image);

      this.profileImage = this.webview.convertFileSrc(imagePath);
      this.imageReady = true;
      // this.profileImage = this.sanitizer.bypassSecurityTrustUrl(this.profileImage);

      console.log('profileImage: ', this.profileImage);
    });
  }

  getBackground() {
    return this.sanitizer.bypassSecurityTrustUrl(this.profileImage);
  }


} // end ProfilePage Class
