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

  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
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
      // console.log(this.friendsIds);
      this.getUserData();
    });
  }

  async getUserData() {
    const friendsIdsLength = Object.keys(this.friendsIds).length;
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
                this.friendsCounter++;

                if(friendsIdsLength === this.friendsCounter){
                  this.friendsReady = true;
                  // console.log('final friends log');
                  // console.log(this.friendsData);
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
        return {
          id: e.payload.doc.id,
          isEdit: false,
          fname: e.payload.doc.data()['fname'],
          lname: e.payload.doc.data()['lname'],
        };
      });

      // Filter out yourself and any other active friends.
      const findUsersDataLength = Object.keys(this.findUsersData).length;
      const findFriendsIdsLength = Object.keys(this.friendsIds).length;
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
    });
  }

  setFilteredItems() {
    console.log(this.searchTerm);
    let search = this.filterItems(this.searchTerm);
    console.log(search);
  }


  filterItems(searchTerm) {
    console.log(searchTerm);
    return this.usersData.filter(user => {
      console.log(user.fname.toLowerCase());
      // return user.fname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}