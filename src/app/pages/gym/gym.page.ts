import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage implements OnInit {
  products: Observable<any>;
  lat;
  long;

  constructor(private auth: AuthService, private productService: ProductService, private geolocation: Geolocation) { 
    this.geolocation.getCurrentPosition().then((location) => {
      this.lat= location.coords.latitude;
      this.long = location.coords.longitude;
      console.log('Latitude: ' + location.coords.latitude);
      console.log('Longitude: ' + location.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
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