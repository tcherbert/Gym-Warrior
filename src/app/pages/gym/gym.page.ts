import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './gym.page.html',
  styleUrls: ['./gym.page.scss'],
})
export class GymPage  {
  

  constructor() { }
}
