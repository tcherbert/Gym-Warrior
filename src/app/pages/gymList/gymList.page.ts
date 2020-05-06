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
  templateUrl: './gymList.page.html',
  styleUrls: ['./gymList.page.scss'],
})
export class GymListPage implements OnInit {

  gyms = {};
  name: string;
  address: string;
  id: number;
  city: string;


  constructor(
    private auth: AuthService,
    private postCrudService: PostCrudService,
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: AngularFireStorage,

  ){}
 
ngOnInit(){

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
        name: e.payload.doc.data()["name"]
       
      
      };
    })
    
  })
}  
    }