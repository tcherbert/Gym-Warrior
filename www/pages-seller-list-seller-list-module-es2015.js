(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-seller-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list/seller-list.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seller-list/seller-list.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-button (click)=\"signOut()\">\n          <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <ion-title>Sell products</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let p of products | async\">\n      <ion-thumbnail slot=\"start\">\n        <img [src]=\"p.img\">\n      </ion-thumbnail>\n      <ion-label>\n        {{ p.name }}\n        <p>{{ p.price | currency:'USD' }}</p>\n      </ion-label>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete(p.id)\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button routerLink=\"new\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/seller-list/seller-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/seller-list/seller-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SellerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListPageRoutingModule", function() { return SellerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seller_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-list.page */ "./src/app/pages/seller-list/seller-list.page.ts");




const routes = [
    {
        path: '',
        component: _seller_list_page__WEBPACK_IMPORTED_MODULE_3__["SellerListPage"]
    }
];
let SellerListPageRoutingModule = class SellerListPageRoutingModule {
};
SellerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/seller-list/seller-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/seller-list/seller-list.module.ts ***!
  \*********************************************************/
/*! exports provided: SellerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListPageModule", function() { return SellerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seller_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-list-routing.module */ "./src/app/pages/seller-list/seller-list-routing.module.ts");
/* harmony import */ var _seller_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-list.page */ "./src/app/pages/seller-list/seller-list.page.ts");







let SellerListPageModule = class SellerListPageModule {
};
SellerListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerListPageRoutingModule"]
        ],
        declarations: [_seller_list_page__WEBPACK_IMPORTED_MODULE_6__["SellerListPage"]]
    })
], SellerListPageModule);



/***/ }),

/***/ "./src/app/pages/seller-list/seller-list.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/seller-list/seller-list.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGxlci1saXN0L3NlbGxlci1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/seller-list/seller-list.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/seller-list/seller-list.page.ts ***!
  \*******************************************************/
/*! exports provided: SellerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListPage", function() { return SellerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




let SellerListPage = class SellerListPage {
    constructor(auth, productService) {
        this.auth = auth;
        this.productService = productService;
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
};
SellerListPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
SellerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-seller-list',
        template: __webpack_require__(/*! raw-loader!./seller-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list/seller-list.page.html"),
        styles: [__webpack_require__(/*! ./seller-list.page.scss */ "./src/app/pages/seller-list/seller-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], SellerListPage);



/***/ })

}]);
//# sourceMappingURL=pages-seller-list-seller-list-module-es2015.js.map