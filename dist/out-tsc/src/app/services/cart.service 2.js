import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let CartService = class CartService {
    constructor() {
        this.cart = [];
        this.cartItems = new BehaviorSubject([]);
        this.cartItemCount = new BehaviorSubject(0);
    }
    getCart() {
        return this.cartItems.asObservable();
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    addProduct(product) {
        let added = false;
        // for (let p of this.cart) {
        //   if (p.id === product.id) {
        //     p.amount += 1;
        //     added = true;
        //     break;
        //   }
        // }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItems.next(this.cart);
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        // for (let [index, p] of this.cart.entries()) {
        //   if (p.id === product.id) {
        //     p.amount -= 1;
        //     if (p.amount == 0) {
        //       this.cart.splice(index, 1);
        //     }
        //   }
        // }
        this.cartItems.next(this.cart);
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        // for (let [index, p] of this.cart.entries()) {
        //   if (p.id === product.id) {
        //     this.cartItemCount.next(this.cartItemCount.value - p.amount);
        //     this.cart.splice(index, 1);
        //   }
        // }
        this.cartItems.next(this.cart);
    }
    getItemCount(id) {
        // for (let [index, p] of this.cart.entries()) {
        //   if (p.id === id) {
        //     return p.amount;
        //   }
        // }
        return 0;
    }
    checkout() {
    }
};
CartService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map