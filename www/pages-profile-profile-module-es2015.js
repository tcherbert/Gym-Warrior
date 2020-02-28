(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-menu side=\"end\" content-id=\"main-content\">\n    <ion-content>\n      <ion-list>\n            <ion-button class=\"navButton\" fill=\"clear\"  href=\"buyer/profile\">Profile Page</ion-button>\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"buyer/gym\">Gym Page</ion-button>\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/groups\">Groups Page</ion-button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <div id=\"main-content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-img class=\"logo\" src=\"http://isoptera.lcsc.edu/~tcherbert/cs480/gwlogo.png\"></ion-img>\n      </ion-toolbar>\n    </ion-header>\n    \n    <!-- Main Content Area. Insert content in here-->\n      <header>\n       <img class=\"responsive\" src=\"../../../assets/profilePhoto.jpeg\">\n      </header>\n      <main>\n      <ion-button color=\"lightred\">About</ion-button>\n      <ion-button color=\"darkred\">Photos</ion-button>\n      <ion-button color=\"lightred\">Friends</ion-button>\n      <ion-button color=\"darkred\">Schedule</ion-button>\n     \n  </main>\n    \n  </div>\n  <ion-button (click)=\"signOut()\">\n    <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n  </ion-button>\n   \n</ion-app>\n\n"

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 19px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\nimg {\n  width: 100%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FER0E7RUFFRSxXQUFBO0VBQ0EsV0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWItYnV0dG9uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogNzBweDtcbn1cbiBcbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4gXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59XG5cblxuaW1ne1xuICAgIFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MCU7XG59XG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG59XG5cbi5jYXJ0LWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jYXJ0LWxlbmd0aCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOXB4O1xuICBsZWZ0OiAyNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAyNXB4O1xuICB6LWluZGV4OiAxMDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




let ProfilePage = 
// export class ProfilePage  {
//   constructor() { }
// }
class ProfilePage {
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
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
    })
    // export class ProfilePage  {
    //   constructor() { }
    // }
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map