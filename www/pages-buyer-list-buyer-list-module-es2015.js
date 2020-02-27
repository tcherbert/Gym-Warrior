(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-buyer-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list/buyer-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/buyer-list/buyer-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Buy products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"openCart()\">\n    <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n    <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n    <ion-list>\n        <ion-item *ngFor=\"let p of products | async\" [routerLink]=\"[p.id]\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"p.img\">\n          </ion-thumbnail>\n          <ion-label>\n            {{ p.name }}\n            <p>{{ p.price | currency:'USD' }}</p>\n          </ion-label>\n        \n        </ion-item>\n      </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/buyer-list/buyer-list-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/buyer-list/buyer-list-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: BuyerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListPageRoutingModule", function() { return BuyerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer-list.page */ "./src/app/pages/buyer-list/buyer-list.page.ts");




const routes = [
    {
        path: '',
        component: _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListPage"]
    }
];
let BuyerListPageRoutingModule = class BuyerListPageRoutingModule {
};
BuyerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuyerListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/buyer-list/buyer-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/buyer-list/buyer-list.module.ts ***!
  \*******************************************************/
/*! exports provided: BuyerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListPageModule", function() { return BuyerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buyer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyer-list-routing.module */ "./src/app/pages/buyer-list/buyer-list-routing.module.ts");
/* harmony import */ var _buyer_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyer-list.page */ "./src/app/pages/buyer-list/buyer-list.page.ts");







let BuyerListPageModule = class BuyerListPageModule {
};
BuyerListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buyer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyerListPageRoutingModule"]
        ],
        declarations: [_buyer_list_page__WEBPACK_IMPORTED_MODULE_6__["BuyerListPage"]]
    })
], BuyerListPageModule);



/***/ }),

/***/ "./src/app/pages/buyer-list/buyer-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/buyer-list/buyer-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 19px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0Rlc2t0b3AvYWNhZGVteS1maXJlLW1hcmtldHBsYWNlLWNvdXJzZS9zcmMvYXBwL3BhZ2VzL2J1eWVyLWxpc3QvYnV5ZXItbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2J1eWVyLWxpc3QvYnV5ZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1eWVyLWxpc3QvYnV5ZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG4gXG4uY2FydC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuIFxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xufSIsImlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cblxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuLmNhcnQtbGVuZ3RoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDI1cHg7XG4gIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/buyer-list/buyer-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/buyer-list/buyer-list.page.ts ***!
  \*****************************************************/
/*! exports provided: BuyerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListPage", function() { return BuyerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/pages/cart-modal/cart-modal.page.ts");







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
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"],
                cssClass: 'cart-modal'
            });
            modal.present();
        });
    }
};
BuyerListPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
BuyerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./buyer-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list/buyer-list.page.html"),
        styles: [__webpack_require__(/*! ./buyer-list.page.scss */ "./src/app/pages/buyer-list/buyer-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], BuyerListPage);



/***/ })

}]);
//# sourceMappingURL=pages-buyer-list-buyer-list-module-es2015.js.map