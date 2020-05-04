import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { PostCrudService } from 'src/app/services/firestore-api.service';


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


  public gymID: string;
  posts = {};
  public myPosts = [];

  togglePostFlag: boolean;
  newPostImage: string;
  newPostText: string;
  friends = [];
  postData = {};
  commentData = {};
  public imageID: string;
  public months = [];
  public minutes = [];
  createCommentFlag: boolean;
  createCommentIndex: number;


  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,
              private camera: Camera,
              private sanitizer: DomSanitizer,
              private actionSheetController: ActionSheetController,
              private webview: WebView,
              private router: Router,
              private route: ActivatedRoute,
              private dataService: DataService,
              private postCrudService: PostCrudService
  ) {
    const id = '9WkemgxIr047EjC8y7C5';
    this.dataReady = false;
    this.imageReady = false;
    this.months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sept', 'Oct',
      'Nov', 'Dec'
    ];
    this.minutes = [
      '01', '02', '03',
      '04', '05', '06',
      '07', '08', '09'
    ];
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id; // '9WkemgxIr047EjC8y7C5';
    this.getGymData(id);
    this.getProfileImage(id);
    this.getPosts();
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





  async getPosts() {
    const id = this.afAuth.auth.currentUser.uid;
    // this.friends = this.postCrudService.readFriendsIds(id);
    // This gets all posts...
    this.postCrudService.readPosts().subscribe(data => {
      this.posts = data.map(e => {
        // console.log(e.payload.doc.data()['timeCreated']);
        const timeCreated = new Date(e.payload.doc.data()['timeCreated']);
        let hours = timeCreated.getHours();
        let minutes = timeCreated.getMinutes();
        if (hours > 12) {
          hours = hours - 12;
        }
        if (minutes < 10) {
          minutes = this.minutes[minutes - 1];
        }
        const timeFormated = this.months[timeCreated.getMonth() - 1] + ' '
                              + timeCreated.getDate() + ' at ' + hours + ':' + minutes;
        // timeCreated.
        // console.log(timeCreated);
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Data: e.payload.doc.data()["data"],
          Image: e.payload.doc.data()["image"],
          User_ID: e.payload.doc.data()["user_id"],
          TimeCreated: timeFormated,
          Likes: e.payload.doc.data()["Likes"],
          Comments: e.payload.doc.data()["Comments"]
        };
      })

      // Overly convoluted hack as I couldn't figure out how to query properly.
      // This will need to be fixed eventually.
      const postsLength = Object.keys(this.posts).length;
      let counter = 0;
      // console.log('this.friends');
      // console.log(this.friends);
      for (let i = 0; i < postsLength; i++) {
        let likeFlag = 0;
        // If only this users posts
        // console.log(this.posts[i].User_ID);
        // console.log(this.friends.includes(this.posts[i].User_ID));

        if (this.posts[i].User_ID === id) { // || this.friends.includes(this.posts[i].User_ID)

          if (this.posts[i].Likes) {
            for (let n = 0; n < this.posts[i].Likes.length; n++) {
              if (this.posts[i].Likes[n] === id) {
                likeFlag = 1;
              }
            }
          }

          this.myPosts[counter] = this.posts[i];
          this.myPosts[counter]['commentFlag'] = false;
          this.myPosts[counter]['commentsFlag'] = false;
          if (likeFlag) {
            this.myPosts[counter]['likeFlag'] = true;
          } else {
            this.myPosts[counter]['likeFlag'] = false;
          }
          this.myPosts[counter]['index'] = counter;

          if (this.posts[i].Likes) {
            if (this.posts[i].Likes.length > 0) {
              this.myPosts[counter]['likeCount'] = this.posts[i].Likes.length;
              this.myPosts[counter]['likesFlag'] = true;
            }
          }
          if (this.posts[i].Comments) {
            if (this.posts[i].Comments.length > 0) {
              this.myPosts[counter]['commentCount'] = this.posts[i].Comments.length;
              this.myPosts[counter]['commentsFlag'] = true;
            }
          }

          if (this.createCommentFlag) {
            this.myPosts[this.createCommentIndex].commentFlag = true;
          }

          this.getUserData(this.posts[i].User_ID);

          // If this.posts[i].Image is set.
          if (this.posts[i].Image !== undefined) {
            this.getPostImage(this.posts[i].User_ID, this.posts[i].Image, counter);
          }
          counter++;
        }
      }
      // console.log(this.posts);
    });
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
              console.log('No such document!');
          }
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

  commentCtrl(index) {
    if (this.myPosts[index].commentFlag === false) {
      this.myPosts[index].commentFlag = true;
    } else {
      this.myPosts[index].commentFlag = false;
    }
  }
  likeCtrl(index) {
    const id = this.afAuth.auth.currentUser.uid;
    if (this.myPosts[index].likeFlag === false) {
      this.myPosts[index].likeFlag = true;
      // Add user id to like array
      this.addLike(this.myPosts[index].id);
    } else {
      this.myPosts[index].likeFlag = false;
      // remove user id from like array
      this.removeLike(this.myPosts[index].id);
    }
  }

  addLike(postID) {
    const id = this.afAuth.auth.currentUser.uid;
    this.postCrudService.addLike(postID, id).then(resp => {
      console.log(resp);
    }).catch(error => {
        // console.log(error);
      });
  }
  removeLike(postID) {
    const id = this.afAuth.auth.currentUser.uid;
    this.postCrudService.removeLike(postID, id).then(resp => {
      console.log(resp);
    }).catch(error => {
        // console.log(error);
      });
  }

  createComment(index) {
    console.log('createComment()');
    this.createCommentFlag = true;
    this.createCommentIndex = index;
    // console.log('createComment', this.myPosts[index].id);
    const dateTime = new Date();

    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    if (hours > 12) {
      hours = hours - 12;
    }
    if (minutes < 10) {
      minutes = this.minutes[minutes - 1];
    }
    const timeFormated = this.months[dateTime.getMonth() - 1] + ' '
                              + dateTime.getDate() + ' at ' + hours + ':' + minutes;

    const id = this.afAuth.auth.currentUser.uid;
    let record = {};
    record['user_id'] = id;
    // record['fname'] = this.fname;
    // record['lname'] = this.lname;
    record['timeCreated'] = timeFormated;
    record['data'] = this.commentData;
    this.commentData = {};

    if(this.imageID !== undefined){
      record['image'] = this.imageID;
    }

    this.postCrudService.addComment(this.myPosts[index].id, record).then(resp => {
      // console.log(resp);
    })
      .catch(error => {
        // console.log(error);
      });
  }

} // end ProfilePage Class
