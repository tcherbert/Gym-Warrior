import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
let BuyerListDetailsPage = class BuyerListDetailsPage {
    constructor(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.id = null;
        this.product = null;
        this.amount = 0;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.productService.getOneProduct(this.id).subscribe(res => {
            console.log('my product: ', res);
            this.product = res;
            this.product.id = this.id;
            this.amount = this.cartService.getItemCount(this.id);
        });
        this.cartService.getCart().subscribe(cart => {
            this.amount = this.cartService.getItemCount(this.id);
        });
    }
    addToCart() {
        this.cartService.addProduct(this.product);
    }
    removeFromCart() {
        this.cartService.decreaseProduct(this.product);
    }
};
BuyerListDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list-details',
        templateUrl: './buyer-list-details.page.html',
        styleUrls: ['./buyer-list-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute, ProductService, CartService])
], BuyerListDetailsPage);
export { BuyerListDetailsPage };
//# sourceMappingURL=buyer-list-details.page.js.map