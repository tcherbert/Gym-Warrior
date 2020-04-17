(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-buyer-list-buyer-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list/buyer-list.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/buyer-list/buyer-list.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"signOut()\">\r\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Buy products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"openCart()\">\r\n    <div class=\"cart-length\">{{ cartItemCount | async }}</div>\r\n    <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let p of products | async\" [routerLink]=\"[p.id]\">\r\n          <ion-thumbnail slot=\"start\">\r\n            <img [src]=\"p.img\">\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            {{ p.name }}\r\n            <p>{{ p.price | currency:'USD' }}</p>\r\n          </ion-label>\r\n        \r\n        </ion-item>\r\n      </ion-list>\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buyer-list.page */ "./src/app/pages/buyer-list/buyer-list.page.ts");




var routes = [
    {
        path: '',
        component: _buyer_list_page__WEBPACK_IMPORTED_MODULE_3__["BuyerListPage"]
    }
];
var BuyerListPageRoutingModule = /** @class */ (function () {
    function BuyerListPageRoutingModule() {
    }
    BuyerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuyerListPageRoutingModule);
    return BuyerListPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buyer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyer-list-routing.module */ "./src/app/pages/buyer-list/buyer-list-routing.module.ts");
/* harmony import */ var _buyer_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buyer-list.page */ "./src/app/pages/buyer-list/buyer-list.page.ts");







var BuyerListPageModule = /** @class */ (function () {
    function BuyerListPageModule() {
    }
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
    return BuyerListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/buyer-list/buyer-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/buyer-list/buyer-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 19px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnV5ZXItbGlzdC9DOlxcVXNlcnNcXHRjYXJ2XFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltLVdhcnJpb3Ivc3JjXFxhcHBcXHBhZ2VzXFxidXllci1saXN0XFxidXllci1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYnV5ZXItbGlzdC9idXllci1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYnV5ZXItbGlzdC9idXllci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuIFxyXG4uY2FydC1sZW5ndGgge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTlweDtcclxuICBsZWZ0OiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgbWluLXdpZHRoOiAyNXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG59IiwiaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uY2FydC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ "./src/app/pages/cart-modal/cart-modal.page.ts");







var BuyerListPage = /** @class */ (function () {
    function BuyerListPage(auth, productService, cartService, modalCtrl) {
        this.auth = auth;
        this.productService = productService;
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.cartItemCount = this.cartService.getCartItemCount();
    }
    BuyerListPage.prototype.ngOnInit = function () {
        this.products = this.productService.getAllProducts();
    };
    BuyerListPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    BuyerListPage.prototype.openCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_6__["CartModalPage"],
                            cssClass: 'cart-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuyerListPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
    ]; };
    BuyerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./buyer-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/buyer-list/buyer-list.page.html"),
            styles: [__webpack_require__(/*! ./buyer-list.page.scss */ "./src/app/pages/buyer-list/buyer-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], BuyerListPage);
    return BuyerListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-buyer-list-buyer-list-module-es5.js.map