import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
let CartModalPage = class CartModalPage {
    constructor(cartService, modalCtrl) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cart = [];
    }
    ngOnInit() {
        this.cartService.getCart().subscribe(res => {
            this.cart = res;
        });
    }
    decreaseCartItem(product) {
        this.cartService.decreaseProduct(product);
    }
    increaseCartItem(product) {
        this.cartService.addProduct(product);
    }
    removeCartItem(product) {
        this.cartService.removeProduct(product);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
    }
    close() {
        this.modalCtrl.dismiss();
    }
};
CartModalPage = tslib_1.__decorate([
    Component({
        selector: 'app-cart-modal',
        templateUrl: './cart-modal.page.html',
        styleUrls: ['./cart-modal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [CartService, ModalController])
], CartModalPage);
export { CartModalPage };
//# sourceMappingURL=cart-modal.page.js.map