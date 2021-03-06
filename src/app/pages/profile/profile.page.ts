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
import { firestore } from 'firebase/app';
import { PostCrudService } from 'src/app/services/firestore-api.service';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {

  public fname: string;
  public lname: string;
  public dataReady: boolean;
  image = null;
  public imageReady: boolean;
  public profileImage;
  public gymID: string;
  public gymFlag: boolean;
  public gymData: string;
  public gymAdminID: string;
  public gymAdminFlag: boolean;
  public gymMemberFlag: boolean;
  public noGymFlag: boolean;

  togglePostFlag: boolean;
  newPostImage: string;
  newPostText: string;
  friends = [];
  postData = {};
  commentData = {};
  posts = {};
  public myPosts = [];
  public imageID: string;
  public months = [];
  public minutes = [];
  createCommentFlag: boolean;
  createCommentIndex: number;
  public postImage;
  public postImageReady;

  constructor(private auth: AuthService,
              private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private storage: AngularFireStorage,
              private camera: Camera,
              private sanitizer: DomSanitizer,
              private actionSheetController: ActionSheetController,
              private webview: WebView,
              private postCrudService: PostCrudService
  ) {
    const id = this.afAuth.auth.currentUser.uid;
    this.dataReady = false;
    this.imageReady = false;
    this.gymAdminFlag = false;
    this.gymMemberFlag = false;
    this.noGymFlag = false;
    this.postImageReady = false;
  }


  ngOnInit() {
    const id = this.afAuth.auth.currentUser.uid;
    this.getCurrentUserData(id);
    this.getProfileImage(id);
    this.getGymMembers();

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

    this.getFriends();
  }

  signOut() {
    this.auth.signOut();
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

  async getCurrentUserData(id) {
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

  async getGymMembers() {
    const id = this.afAuth.auth.currentUser.uid;
    this.gymFlag = false;
    await this.db.collection('gymMembers').ref.get()
      .then(querySnapshot => {
          querySnapshot.docs.forEach(doc => {
            if (doc.data().Members.includes(id)) {
              this.gymFlag = true;
              this.gymID = doc.data().gymID;
            }
        });
          if (this.gymFlag) {
            this.getGymData();
          } else {
            this.noGymFlag = true;
          }
    });
  }

  async getGymData() {
    const id = this.afAuth.auth.currentUser.uid;
    const userData = await this.db.collection('gyms')
      .doc(this.gymID)
      .ref
      .get().then( doc => {
        if (doc.exists) {
          this.gymData = doc.data().name;
          this.gymAdminID = doc.id;
          if (doc.data().admins.includes(id)) {
            this.gymAdminFlag = true;
          } else {
            this.gymMemberFlag = true;
          }
        } else {
            this.gymFlag = false;
            this.noGymFlag = true;
        }
      });
  }


  // Post Functions
  togglePost() {
    if (this.togglePostFlag === false) {
      this.togglePostFlag = true;
    } else {
      this.togglePostFlag = false;
    }
  }

  // Image Handlers
  async selectPostSource() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.capturePostImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.capturePostImage(this.camera.PictureSourceType.CAMERA);
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

  capturePostImage(sourceType: number) {
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
      this.postImage = this.webview.convertFileSrc(imagePath);
      console.log('capturePostImage');
      console.log(this.postImage);
      this.postImageReady = true;
      // Upload image
      this.imageID = this.makeid(60);
      // console.log(this.imageID);
      this.uploadPostImage(this.postImage, this.imageID);
    });
  }

  uploadPostImage(imageURI, imageName){
    return new Promise<any>((resolve, reject) => {
      const id = this.afAuth.auth.currentUser.uid;
      let storageRef: AngularFireStorageReference = this.storage.ref(id);
      let imageRef = storageRef.child('image').child(imageName);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL);
          this.postImage = snapshot.downloadURL;
          console.log('uploadPostImage');
          console.log(this.postImage);
        }, err => {
          reject(err);
        })
      })
    })
  }
  async getFriends() {
    const id = this.afAuth.auth.currentUser.uid;
    await this.postCrudService.readFriendsIds(id).subscribe(data => {
      this.friends = data.payload.data()['Friends'];
      this.getPosts();
    });
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

        if (this.posts[i].User_ID === id || this.friends.includes(this.posts[i].User_ID)) {

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
    });
  }

  async getPostImage(id, imageID, counter){
    const ref = this.storage.ref(id + '/image/' + imageID);
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      // this.profileImage = result;
      // this.imageReady = true;
      // this.postImage = result;
      // this.postImageReady = true;
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
    this.createCommentFlag = true;
    this.createCommentIndex = index;
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
    record['fname'] = this.fname;
    record['lname'] = this.lname;
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
  makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async createPost() {
    const dateTime = new Date().toISOString();
    // console.log("dateTime");
    // console.log(dateTime);
    const id = this.afAuth.auth.currentUser.uid;
    let record = {};
    record['user_id'] = id;
    this.postData['fname'] = this.fname;
    this.postData['lname'] = this.lname;
    record['timeCreated'] = dateTime;
    record['data'] = this.postData;
    this.postData = {};

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


} // end ProfilePage Class
