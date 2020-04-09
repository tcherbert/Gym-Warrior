(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-seller-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list/seller-list.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seller-list/seller-list.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"signOut()\">\r\n          <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>Sell products</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let p of products | async\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"p.img\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        {{ p.name }}\r\n        <p>{{ p.price | currency:'USD' }}</p>\r\n      </ion-label>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"delete(p.id)\">\r\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button routerLink=\"new\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seller_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-list.page */ "./src/app/pages/seller-list/seller-list.page.ts");




var routes = [
    {
        path: '',
        component: _seller_list_page__WEBPACK_IMPORTED_MODULE_3__["SellerListPage"]
    }
];
var SellerListPageRoutingModule = /** @class */ (function () {
    function SellerListPageRoutingModule() {
    }
    SellerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SellerListPageRoutingModule);
    return SellerListPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seller_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-list-routing.module */ "./src/app/pages/seller-list/seller-list-routing.module.ts");
/* harmony import */ var _seller_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-list.page */ "./src/app/pages/seller-list/seller-list.page.ts");







var SellerListPageModule = /** @class */ (function () {
    function SellerListPageModule() {
    }
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
    return SellerListPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




var SellerListPage = /** @class */ (function () {
    function SellerListPage(auth, productService) {
        this.auth = auth;
        this.productService = productService;
    }
    SellerListPage.prototype.ngOnInit = function () {
        this.products = this.productService.getSellerProducts();
    };
    SellerListPage.prototype.delete = function (id) {
        this.productService.deleteProduct(id);
    };
    SellerListPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    SellerListPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    SellerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-seller-list',
            template: __webpack_require__(/*! raw-loader!./seller-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list/seller-list.page.html"),
            styles: [__webpack_require__(/*! ./seller-list.page.scss */ "./src/app/pages/seller-list/seller-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], SellerListPage);
    return SellerListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-seller-list-seller-list-module-es5.js.map