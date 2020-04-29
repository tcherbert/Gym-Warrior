(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-details-buyer-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list-details/buyer-list-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/buyer-list-details/buyer-list-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/buyer/list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ product?.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngIf=\"product\">\n    <img [src]=\"product.img\">\n    <ion-card-header>\n      <ion-card-title>{{ product.name }}</ion-card-title>\n      <ion-card-subtitle>{{ product.price | currency:'USD' }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          <ion-button fill=\"clear\" (click)=\"removeFromCart()\" [disabled]=\"amount == 0\">\n            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-center\">\n          {{ amount }}\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-center\">\n            <ion-button fill=\"clear\" (click)=\"addToCart()\">\n                <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <div [innerHtml]=\"product.desc\"></div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/buyer-list-details/buyer-list-details-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BuyerListDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageRoutingModule", function() { return BuyerListDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer-list-details.page */ "./src/app/pages/buyer-list-details/buyer-list-details.page.ts");




var routes = [
    {
        path: '',
        component: _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListDetailsPage"]
    }
];
var BuyerListDetailsPageRoutingModule = /** @class */ (function () {
    function BuyerListDetailsPageRoutingModule() {
    }
    BuyerListDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuyerListDetailsPageRoutingModule);
    return BuyerListDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/buyer-list-details/buyer-list-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: BuyerListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPageModule", function() { return BuyerListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyer-list-details-routing.module */ "./src/app/pages/buyer-list-details/buyer-list-details-routing.module.ts");
/* harmony import */ var _buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyer-list-details.page */ "./src/app/pages/buyer-list-details/buyer-list-details.page.ts");







var BuyerListDetailsPageModule = /** @class */ (function () {
    function BuyerListDetailsPageModule() {
    }
    BuyerListDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _buyer_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuyerListDetailsPageRoutingModule"]
            ],
            declarations: [_buyer_list_details_page__WEBPACK_IMPORTED_MODULE_6__["BuyerListDetailsPage"]]
        })
    ], BuyerListDetailsPageModule);
    return BuyerListDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buyer-list-details/buyer-list-details.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2J1eWVyLWxpc3QtZGV0YWlscy9idXllci1saXN0LWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/buyer-list-details/buyer-list-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/buyer-list-details/buyer-list-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: BuyerListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerListDetailsPage", function() { return BuyerListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");





var BuyerListDetailsPage = /** @class */ (function () {
    function BuyerListDetailsPage(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.id = null;
        this.product = null;
        this.amount = 0;
    }
    BuyerListDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.productService.getOneProduct(this.id).subscribe(function (res) {
            console.log('my product: ', res);
            _this.product = res;
            _this.product.id = _this.id;
            _this.amount = _this.cartService.getItemCount(_this.id);
        });
        this.cartService.getCart().subscribe(function (cart) {
            _this.amount = _this.cartService.getItemCount(_this.id);
        });
    };
    BuyerListDetailsPage.prototype.addToCart = function () {
        this.cartService.addProduct(this.product);
    };
    BuyerListDetailsPage.prototype.removeFromCart = function () {
        this.cartService.decreaseProduct(this.product);
    };
    BuyerListDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
    ]; };
    BuyerListDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list-details',
            template: __webpack_require__(/*! raw-loader!./buyer-list-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list-details/buyer-list-details.page.html"),
            styles: [__webpack_require__(/*! ./buyer-list-details.page.scss */ "./src/app/pages/buyer-list-details/buyer-list-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], BuyerListDetailsPage);
    return BuyerListDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buyer-list-details-buyer-list-details-module-es5.js.map