import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { PostCrudService } from './../../services/firestore-api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {
  findFriends: boolean;
  friendsIds = {};
  friendsData = [];
  friendsReady: boolean;
  friendsCounter = 0;

  findUsersData = { };
  toggleFindFriendsFlag: boolean;

  usersData = [];
  searchTerm = {};

  public filteredFriends: any;

  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
  ) {
    this.findFriends = false;
    this.friendsReady = false;
    this.toggleFindFriendsFlag = false;
  }

  ngOnInit() {
    this.getFriends();
    // this.findUsers();
  }

  findFriendsToggle() {
    if (this.findFriends === false) {
      this.findFriends = true;
      this.toggleFindFriendsFlag = true;
    } else {
      this.findFriends = false;
      this.toggleFindFriendsFlag = false;
    }
    // console.log('findFriendsToggle...');
    // console.log(this.findUsersData);
  }

  signOut() {
    this.auth.signOut();
  }



  async getFriends() {
    const id = this.afAuth.auth.currentUser.uid;
    await this.postCrudService.readFriendsIds(id).subscribe(data => {
      this.friendsIds = data.payload.data()['Friends'];
      // User_ID: e.payload.doc.data()['user_id'],
      console.log('this.friendsIds');
      console.log(this.friendsIds);
      this.getUserData();
    });
  }

  async getUserData() {
    // this.friendsData = [];
    let friendsIdsLength;
    if(!this.isEmpty(this.friendsIds)){
      friendsIdsLength = Object.keys(this.friendsIds).length;
    } else {
      friendsIdsLength = 0;
    }
    console.log('friendsIdsLength', friendsIdsLength);

    for (let i = 0; i < friendsIdsLength; i++) {
      const id = this.friendsIds[i];
      console.log(id);

      const friendData = await this.db.collection('users')
        .doc(id)
        .ref
        .get().then( doc => { 
            if (doc.exists) {
                const userData = doc.data();
                // return userData;
                this.friendsData[this.friendsCounter] = userData;
                this.friendsData[this.friendsCounter]['id'] = id;
                this.friendsCounter++;

                if(friendsIdsLength === this.friendsCounter){
                  this.friendsReady = true;
                  console.log('final friends log');
                  console.log(this.friendsData);
                }
            } else {
                console.log('No such document!');
            }
        });
    }
    this.findUsers();
  }



  async findUsers() {
    this.postCrudService.readUsers().subscribe(data => {
      this.findUsersData = data.map(e => {
        console.log('postCrudService readUsers() fired...');
        return {
          id: e.payload.doc.id,
          isEdit: false,
          fname: e.payload.doc.data()['fname'],
          lname: e.payload.doc.data()['lname'],
        };
      });
      console.log('this.findUsersData');
      console.log(this.findUsersData);

      // Filter out yourself and any other active friends.
      const findUsersDataLength = Object.keys(this.findUsersData).length;
      let findFriendsIdsLength;
      if(!this.isEmpty(this.friendsIds)){
        findFriendsIdsLength = Object.keys(this.friendsIds).length;
      } else {
        findFriendsIdsLength = 0;
      }
      const id = this.afAuth.auth.currentUser.uid;
      let counter = 0;
      let foundFlag;
      for (let i = 0; i < findUsersDataLength; i++) {
        foundFlag = 0;
        for (let n = 0; n < findFriendsIdsLength; n ++) {
          if (this.findUsersData[i].id === this.friendsIds[n] || this.findUsersData[i].id === id) {
            foundFlag = 1;
          }
        }
        if (!foundFlag) {
          this.usersData[counter] = this.findUsersData[i];
          counter++;
        }
      }
      this.findUsersImages();
    });
    // Find all users images.
  }

  findUsersImages() {
    // Known friends
    const friendsDataLength = Object.keys(this.friendsData).length;
    for (let i = 0; i < friendsDataLength; i++) {
      this.friendsData[i].image = this.getProfileImage(this.friendsData[i].id, i, 'friendsData');
    }

    // For the find function
    const usersDataLength = Object.keys(this.usersData).length;
    for (let i = 0; i < usersDataLength; i++) {
      console.log(this.usersData[i]);
      this.usersData[i]['image'] = this.getProfileImage(this.usersData[i].id, i, 'usersData');
    }
  }

  setFilteredItems() {
    this.filteredFriends = this.filterItems(this.searchTerm);
  }


  filterItems(searchTerm) {
    // If search is empty make sure it empties the list.
    if ( searchTerm.txt === '' ) {
      return [];
    }
    // Filter fname
    const filterFname = this.usersData.filter(user => {
      return user.fname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
    });
    // Filter lname
    const filterLname = this.usersData.filter(user => {
      return user.lname.toLowerCase().indexOf(searchTerm.txt.toLowerCase()) > -1;
    });

    // Merge the 2 filter objects.
    return this.arrayUnique(filterFname.concat(filterLname)); // [...filterFname, ...filterLname];
  }

  async getProfileImage(id, index, resultArray){
    const ref = this.storage.ref(id + '/image/profileImage');
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      if ( resultArray === 'usersData') {
        this.usersData[index]['image'] = result;
      } else {
        this.friendsData[index]['image'] = result;
      }
    });
  }


  removeFriend(friendId){
    console.log('removeFriend');
    const id = this.afAuth.auth.currentUser.uid;
    this.postCrudService.removeFriend(id, friendId).then(resp => {
      // console.log(resp);
      for(let i = 0; i < this.friendsData.length; i++){
        if(this.friendsData[i].id === friendId){
          this.friendsData.splice(i, 1);
        }
      }
      console.log('friendsData after remove');
      console.log(this.friendsData);
    }).catch(error => {
        // console.log(error);
      });
  }

  addFriend(friendId) {
    const id = this.afAuth.auth.currentUser.uid;
    this.postCrudService.updateFriend(id, friendId).then(resp => {
      // console.log(resp);
    }).catch(error => {
        // console.log(error);
      });
  }


/*
  async createPost() {
    const id = this.afAuth.auth.currentUser.uid;
    let record = {};
    record['user_id'] = id;
    this.postData['fname'] = this.fname;
    this.postData['lname'] = this.lname;
    record['data'] = this.postData;
    if (this.imageID !== undefined) {
      record['image'] = this.imageID;
    }

    this.postCrudService.createPost(record).then(resp => {
      // console.log(resp);
    })
      .catch(error => {
        // console.log(error);
      });
  }
*/




  // Utility function to add 2 arrays uniquely
  arrayUnique(array) {
    const a = array.concat();
    for ( let i = 0; i < a.length; ++i ) {
        for ( let j = i + 1; j < a.length; ++j ) {
            if (a[i] === a[j]) {
              a.splice(j--, 1);
            }
        }
    }

    return a;
  }

  isEmpty(obj) {
    for ( const key in obj) {
        if (obj.hasOwnProperty(key)) {
          return false;
        }
    }
    return true;
  }
}