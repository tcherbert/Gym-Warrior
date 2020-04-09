import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Geofence} from '@ionic-native/geofence/ngx';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  products: Observable<any>;
  lat;
  long;
  success;
  fail;

  constructor(private auth: AuthService, private productService: ProductService, private geolocation: Geolocation, private geofence: Geofence) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log('Geofence Plugin Ready'),
      (err) => console.log(err)
    ) 
    
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((location) => {
      this.lat= location.coords.latitude;
      this.long = location.coords.longitude;
      console.log('Latitude: ' + location.coords.latitude);
      console.log('Longitude: ' + location.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
   
  }
  addGeofence(){
    let fence = {
      id: 'testID',
      latitude: 46.411662,
      longitude: -117.026571,
      radius: 100,
      transitionType: 3,
      notification: {
        id: 1,
        title: 'You crossed a fence',
        text: 'You just arrived at LCSC',
        openAppOnClick : true
      }
    }
    this.geofence.addOrUpdate(fence).then(
      () => this.success="success",
      (err) => this.fail = err

    );
  }

   
  ngOnInit() {
    this.products = this.productService.getSellerProducts();
  }

  delete(id) {
    this.productService.deleteProduct(id);
  }

  signOut() {
    this.auth.signOut();
  }

}