import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
let BuyerListPage = class BuyerListPage {
    constructor(auth, productService, cartService, modalCtrl) {
        this.auth = auth;
        this.productService = productService;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    ngOnInit() {
        this.products = this.productService.getAllProducts();
    }
    signOut() {
        this.auth.signOut();
    }
    openCart() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: CartModalPage,
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    }
};
BuyerListPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list',
        templateUrl: './buyer-list.page.html',
        styleUrls: ['./buyer-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, ProductService,
        CartService, ModalController])
], BuyerListPage);
export { BuyerListPage };
//# sourceMappingURL=buyer-list.page.js.map