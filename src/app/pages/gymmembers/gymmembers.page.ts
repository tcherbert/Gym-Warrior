import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostCrudService } from './../../services/firestore-api.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './gymmembers.page.html',
  styleUrls: ['./gymmembers.page.scss'],
})
export class GymMembersPage implements OnInit {
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
  gymID: string;
  adminFlag: boolean;


  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth

  ) {
    this.findFriends = false;
    this.friendsReady = false;
    this.toggleFindFriendsFlag = false;
    this.adminFlag = false;
  }

  ngOnInit() {
    this.gymID = this.route.snapshot.params.id;
    this.getGymMembers();
  }

  findFriendsToggle() {
    if (this.findFriends === false) {
      this.findFriends = true;
      this.toggleFindFriendsFlag = true;
    } else {
      this.findFriends = false;
      this.toggleFindFriendsFlag = false;
    }
  }

  signOut() {
    this.auth.signOut();  }

  async getGymMembers() {
    const id = this.gymID;
    await this.postCrudService.readGymMembersIds(id).subscribe(data => {
      this.friendsIds = data.payload.data()['Members'];
      this.getUserData();
    });
  }


  async getUserData() {
    this.friendsData = [];
    this.friendsCounter = 0;
    let friendsIdsLength;
    if (!this.isEmpty(this.friendsIds)) {
      friendsIdsLength = Object.keys(this.friendsIds).length;
    } else {
      friendsIdsLength = 0;
    }

    for (let i = 0; i < friendsIdsLength; i++) {
      const id = this.friendsIds[i];

      const friendData = await this.db.collection('users')
        .doc(id)
        .ref
        .get().then( doc => { 
            if (doc.exists) {
                const userData = doc.data();
                this.friendsData[this.friendsCounter] = userData;
                this.friendsData[this.friendsCounter]['id'] = id;
                this.friendsCounter++;
                if (friendsIdsLength === this.friendsCounter) {
                  this.friendsReady = true;

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
      let findFriendsIdsLength;
      if(!this.isEmpty(this.friendsIds)){
        findFriendsIdsLength = Object.keys(this.friendsIds).length;
      } else {
        findFriendsIdsLength = 0;
      }

      const id = this.gymID;
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
    const id = this.gymID;
    this.postCrudService.removeGymMember(id, friendId);
      // console.log(resp);
    for (let i = 0; i < this.friendsData.length; i++) {
      if (this.friendsData[i].id === friendId) {
        this.friendsData.splice(i, 1);
      }
    }
  }

  addFriend(friendId) {
    const id = this.gymID;
    this.postCrudService.updateFriend(id, friendId);
  }


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

  async getGymData() {
    const id = this.afAuth.auth.currentUser.uid;
    const userData = await this.db.collection('gyms')
      .doc(this.gymID)
      .ref
      .get().then( doc => {
        if (doc.exists) {
          // this.gymData = doc.data().name;
          // this.gymAdminID = doc.id;
          if (doc.data().admins.includes(id)) {
            this.adminFlag = true;
          } else {
            // this.gymMemberFlag = true;
          }
        } else {
            // this.gymFlag = false;
            // this.noGymFlag = true;
        }
      });
  }

}