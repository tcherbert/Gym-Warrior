import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';


@Component({
  selector: 'app-buyer-list',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
// export class ProfilePage  {
  

//   constructor() { }
// }



export class ProfilePage implements OnInit {
  products: Observable<any>;

  constructor(private auth: AuthService, private productService: ProductService ) {
    

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