import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostCrudService } from './../../services/firestore-api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './gymlistings.page.html',
  styleUrls: ['./gymlistings.page.scss'],
})
export class GymListingsPage implements OnInit {

  gyms = {};
  name: string;
  address: string;
  id: number;
  city: string;
  friendsData = {};
  myGyms = [];

  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage,

  ) {}
  ngOnInit() {
    this.getGyms();
  }

  signOut() {
    this.auth.signOut();
  }

  async getGyms() {
    const id = this.afAuth.auth.currentUser.uid;
    this.postCrudService.readGyms().subscribe(data => {
      this.gyms = data.map(e => {
        return {
          address: e.payload.doc.data()["address"],
          city: e.payload.doc.data()["city"],
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          state: e.payload.doc.data()["state"]
        };
      });

      const gymsLength = Object.keys(this.gyms).length;
      let counter = 0;
      for (let i = 0; i < gymsLength; i++) {
        this.myGyms[counter] = this.gyms[i];
        this.myGyms[counter]['index'] = counter;
        counter++;
      }
      this.findGymImages();
    });
  }

  findGymImages() {
    // Known friends
    const friendsDataLength = Object.keys(this.myGyms).length;
    for (let i = 0; i < friendsDataLength; i++) {
      this.myGyms[i]['image'] = this.getProfileImage(this.myGyms[i].id, i, 'myGyms');
    }
  }


  async getProfileImage(id, index, resultArray){
    const ref = this.storage.ref(id + '/image/profileImage');
    const profileImage = ref.getDownloadURL();
    profileImage.subscribe(result => {
      if ( resultArray === 'myGyms') {
        if(typeof result === 'string'){
          this.myGyms[index]['image'] = result;
          this.myGyms[index]['imageFlag'] = true;
        } else {
          this.myGyms[index]['imageFlag'] = false;
        }
      }
    });
  }



}
