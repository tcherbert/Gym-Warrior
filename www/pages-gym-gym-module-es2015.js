(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-gym-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym/gym.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"signOut()\">\n        <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Buy products</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"openCart()\">\n    <div class=\"cart-length\">{{ cartItemCount | async }}</div>\n    <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n    <ion-list>\n        <ion-item *ngFor=\"let p of products | async\" [routerLink]=\"[p.id]\">\n          <ion-thumbnail slot=\"start\">\n            <img [src]=\"p.img\">\n          </ion-thumbnail>\n          <ion-label>\n            {{ p.name }}\n            <p>{{ p.price | currency:'USD' }}</p>\n          </ion-label>\n        \n        </ion-item>\n      </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/gym/gym-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/gym/gym-routing.module.ts ***!
  \*************************************************/
/*! exports provided: GymPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymPageRoutingModule", function() { return GymPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gym_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym.page */ "./src/app/pages/gym/gym.page.ts");




const routes = [
    {
        path: '',
        component: _gym_page__WEBPACK_IMPORTED_MODULE_3__["GymPage"]
    }
];
let GymPageRoutingModule = class GymPageRoutingModule {
};
GymPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GymPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gym/gym.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/gym/gym.module.ts ***!
  \*****************************************/
/*! exports provided: GymPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymPageModule", function() { return GymPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gym_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym-routing.module */ "./src/app/pages/gym/gym-routing.module.ts");
/* harmony import */ var _gym_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym.page */ "./src/app/pages/gym/gym.page.ts");







let GymPageModule = class GymPageModule {
};
GymPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gym_routing_module__WEBPACK_IMPORTED_MODULE_5__["GymPageRoutingModule"]
        ],
        declarations: [_gym_page__WEBPACK_IMPORTED_MODULE_6__["GymPage"]]
    })
], GymPageModule);



/***/ }),

/***/ "./src/app/pages/gym/gym.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/gym/gym.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 19px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW0vZ3ltLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2d5bS9neW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuIFxuLmNhcnQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbn1cbiBcbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/gym/gym.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/gym/gym.page.ts ***!
  \***************************************/
/*! exports provided: GymPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymPage", function() { return GymPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GymPage = class GymPage {
    constructor() { }
};
GymPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./gym.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html"),
        styles: [__webpack_require__(/*! ./gym.page.scss */ "./src/app/pages/gym/gym.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GymPage);



/***/ })

}]);
//# sourceMappingURL=pages-gym-gym-module-es2015.js.map