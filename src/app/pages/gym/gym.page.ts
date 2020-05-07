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
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})



export class GymPage implements OnInit {

  public address: string;
  public city: string;
  public state: string;
  public name: string;
  public phone: string;
  public dataReady: boolean;
  image = null;
  public imageReady: boolean;
  public profileImage;
  public detailsFlag: boolean;
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
  public gymMembers = [];
  public notMember: boolean;
  gyms = {};


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
    this.dataReady = false;
    this.imageReady = false;
    this.detailsFlag = false;
    this.notMember = false;
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
    this.gymID = this.route.snapshot.params.id; // '9WkemgxIr047EjC8y7C5';
    this.getGymData(this.gymID);
    this.getProfileImage(this.gymID);
    this.getPosts();
    this.getGymMembers();
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
    this.state = gymData.state;
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
    const id = this.gymID; // '9WkemgxIr047EjC8y7C5';

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
      const id = this.gymID;
      let storageRef: AngularFireStorageReference = this.storage.ref(id);
      let imageRef = storageRef.child('image').child(imageName);
      this.encodeImageUri(imageURI, function(image64){
        imageRef.putString(image64, 'data_url')
        .then(snapshot => {
          resolve(snapshot.downloadURL);
          this.profileImage = snapshot.downloadURL;
        }, err => {
          reject(err);
        });
      });
    });
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

  async getPosts() {
    this.postCrudService.readGymPosts().subscribe(data => {
      this.posts = data.map(e => {
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
        return {
          isEdit: false,
          id: e.payload.doc.id,
          gym_id: e.payload.doc.data()['gym_id'],
          TimeCreated: timeFormated,
          Data: e.payload.doc.data()["data"],
          Image: e.payload.doc.data()["image"],
          Likes: e.payload.doc.data()["Likes"],
          Comments: e.payload.doc.data()["Comments"]
        };
      });

      const postsLength = Object.keys(this.posts).length;
      let counter = 0;

      for (let i = 0; i < postsLength; i++) {
        let likeFlag = 0;

        if (this.posts[i].gym_id === this.gymID) { 
          if (this.posts[i].Likes) {
            for (let n = 0; n < this.posts[i].Likes.length; n++) {
              if (this.posts[i].Likes[n] === this.gymID) {
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

          this.getUserData(this.posts[i].id);

          // If this.posts[i].Image is set.
          if (this.posts[i].Image !== undefined) {
            this.getGymPostImage(this.posts[i].User_ID, this.posts[i].Image, counter);
          }
          counter++;
        }
      }
    });
  }

  async getUserData(id) {
    const userData = await this.db.collection('users')
      .doc(id)
      .ref
      .get().then( doc => { 
          if (doc.exists) {
              const userData = doc.data();
              return userData;
          } else {
              console.log('No such document!');
          }
      });
  }

  async getGymPostImage(id, imageID, counter){
    const ref = this.storage.ref(id + '/image/' + imageID);
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
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
    const id = this.gymID;
    this.postCrudService.addGymLike(postID, id).then(resp => {
      // console.log(resp);
    }).catch(error => {
        // console.log(error);
      });
  }
  removeLike(postID) {
    const id = this.gymID;
    this.postCrudService.removeGymLike(postID, id).then(resp => {
      // console.log(resp);
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
    const id = this.gymID;
    let record = {};
    record['user_id'] = id;
    record['name'] = this.name;
    record['timeCreated'] = timeFormated;
    record['data'] = this.commentData;

    this.commentData = {};

    if(this.imageID !== undefined){
      record['image'] = this.imageID;
    }

    this.postCrudService.addGymComment(this.myPosts[index].id, record).then(resp => {
      // console.log(resp);
    })
      .catch(error => {
        // console.log(error);
      });
  }

  togglePost() {
    if (this.togglePostFlag === false) {
      this.togglePostFlag = true;
    } else {
      this.togglePostFlag = false;
    }
  }

  async createPost() {
    const dateTime = new Date().toISOString();
    const id = this.gymID;
    let record = {};
    record['gym_id'] = id;
    this.postData['name'] = this.name;
    record['timeCreated'] = dateTime;
    record['data'] = this.postData;
    this.postData = {};

    if(this.imageID !== undefined){
      record['image'] = this.imageID;
    }

    this.postCrudService.createGymPost(record).then(resp => {
      // console.log(resp);
    })
      .catch(error => {
        // console.log(error);
      });
  }


  async getGymMembers() {
    const id = this.gymID;
    const userID = this.afAuth.auth.currentUser.uid;
    await this.postCrudService.readGymMembersIds(id).subscribe(data => {
      this.gymMembers = data.payload.data()['Members'];
      // this.getUserData();
      let foundFlag = 0;
      const membersLength = Object.keys(this.gymMembers).length;
      for (let i = 0; i < membersLength; i++) {
        console.log(this.gymMembers[i]);
        if (this.gymMembers[i] === userID) {
          foundFlag = 1;
        }
      }
      if (!foundFlag) {
        this.notMember = true;
      }
    });
  }

  becomeMember() {
    let callFlag = 0;
    const userID = this.afAuth.auth.currentUser.uid;
    // Check if member of another gym.. and remove it if they are...
    this.postCrudService.readGymMembers().subscribe(data => {
      // Simple hack to stop running in infinite loop
      if (callFlag > 0) {
        return;
      }
      callFlag++;

      this.gyms = data.map(e => {
        return {
          id: e.payload.doc.id,
          Members: e.payload.doc.data()["Members"],
        };
      });
      const gymsLength = Object.keys(this.gyms).length;
      for (let i = 0; i < gymsLength; i++) {
        if (this.gyms[i].Members.includes(userID)) {
          this.removeThisMember(this.gyms[i].id, userID);
        }
      }
      this.postCrudService.addGymMember(this.gymID, userID);
      this.notMember = false;
    });
  }

  removeMember() {
    const id = this.gymID;
    const userID = this.afAuth.auth.currentUser.uid;
    this.postCrudService.removeGymMember(id, userID);
    this.notMember = true;
  }
  removeThisMember(gymID, memberID) {
    this.postCrudService.removeGymMember(gymID, memberID);
  }
} // end ProfilePage Class
