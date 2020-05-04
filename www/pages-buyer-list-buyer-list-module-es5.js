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

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 19px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9idXllci1saXN0L2J1eWVyLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9idXllci1saXN0L2J1eWVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9idXllci1saXN0L2J1eWVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuIFxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbiBcbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */"

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