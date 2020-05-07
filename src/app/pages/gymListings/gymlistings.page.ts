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
  usersData = {};

  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: AngularFireStorage,

  ){}
 
ngOnInit(){
  this.getGyms();
}

signOut() {
  this.auth.signOut();
}

async getGyms() {
  const id = this.afAuth.auth.currentUser.uid;
  // this.friends = this.postCrudService.readFriendsIds(id);
  
  this.postCrudService.readGyms().subscribe(data => {
    this.gyms = data.map(e => {

      return {
        address: e.payload.doc.data()["address"],
        city: e.payload.doc.data()["city"],
        id: e.payload.doc.id,
        name: e.payload.doc.data()["name"],
        state: e.payload.doc.data()["state"]
        
      
      };
      
    })
    
    
    
  })
}  
findUsersImages() {
  // Known friends
  const friendsDataLength = Object.keys(this.friendsData).length;
  for (let i = 0; i < friendsDataLength; i++) {
    this.friendsData[i].image = this.getProfileImage(this.friendsData[i].id, i, 'friendsData');
    console.log(this.friendsData[i].image);
  }
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


    }
