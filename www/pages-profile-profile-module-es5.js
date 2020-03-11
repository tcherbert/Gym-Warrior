(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n        <!--Navigation Bar-->\n         <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n                <ion-content>\n                  <ion-list>\n                    <ion-item>\n                      <ion-button class=\"navButton\" fill=\"clear\" href=\"/buyer/home\">Home Page</ion-button>\n                    </ion-item>\n                    <ion-item>\n                      <ion-button class=\"navButton\" fill=\"clear\"  href=\"/buyer/profile\">Profile Page</ion-button>\n                    </ion-item>\n                    <ion-item>\n                      <ion-button class=\"navButton\" fill=\"clear\" href=\"/buyer/gym\">Gym Page</ion-button>\n                    </ion-item>\n                    <ion-item>\n                      <ion-button class=\"navButton\" fill=\"clear\" href=\"/buyer/groups\">Groups Page</ion-button>\n                    </ion-item>\n               \n                  </ion-list>\n                </ion-content>\n              </ion-menu>\n              \n              <div id=\"main\">\n                <ion-header>\n                  <ion-toolbar>\n                    <ion-buttons slot=\"end\">\n                      <ion-menu-button></ion-menu-button>\n                    </ion-buttons>\n                    <ion-img class=\"logo\" src=\"http://isoptera.lcsc.edu/~tcherbert/cs480/gwlogo.png\"></ion-img>\n                  </ion-toolbar>\n                </ion-header>\n              </div> \n\n    <div class=\"profileImage \">\n        <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n            <ion-card-subtitle id=\"nameStatus\">Tim Herbert</ion-card-subtitle>\n        </ion-card-header>\n      </div>\n      <div class=\"navbar\">\n          <ion-button class=\"nav\" color=\"lightred\">About</ion-button>\n          <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n          <ion-button class=\"nav\" color=\"lightred\">Friends</ion-button>\n          <ion-button class=\"nav\" color=\"darkred\">Schedule</ion-button>\n      </div>\n          <main class =\"mainContent\">\n        <div>\n            <ion-card class=\"profileImage2\">\n                <ion-card-header>\n                    <ion-card-subtitle id=\"nameStatus\">Smart Fitness</ion-card-subtitle>\n                    <ion-card-title id=\"nameStatus\">Tim Herbert</ion-card-title>\n                 </ion-card-header>\n                  <ion-card-content id=\"nameStatus\">\n                      Exercise is a celebration of what your body can do, not a punishment for what you ate.\n                  </ion-card-content>\n            </ion-card>\n      \n            <ion-card class=\"profileImage3\">\n                 <ion-card-header>\n                   <ion-card-subtitle id=\"namestatus\">Smart Fitness</ion-card-subtitle>\n                    <ion-card-title id=\"nameStatus\">Tim Herbert</ion-card-title>\n                 </ion-card-header>\n      \n             <ion-card-content id=\"nameStatus\">\n                <ion-icon name=\"location-outline\"></ion-icon> Smart Fitness 9 am Yoga\n            </ion-card-content>\n            </ion-card>\n             \n        </div>\n      </main>\n          <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n            \n   \n</ion-app>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
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
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 24%;\n}\n\n@media only screen and (max-width: 400px) {\n  .nav {\n    width: 23.7%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLFlBQUE7RUNFRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wcm9maWxlUGhvdG8yLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG5cbi5wcm9maWxlSW1hZ2UzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ncm91cHByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuLm5hdntcbiAgd2lkdGg6IDI0JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAubmF2e1xuICAgIHdpZHRoOiAyMy43JTtcbiAgfVxufVxuIiwiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Byb2ZpbGVQaG90bzIuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMjQlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXYge1xuICAgIHdpZHRoOiAyMy43JTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




var ProfilePage = /** @class */ (function () {
    function ProfilePage(auth, productService) {
        this.auth = auth;
        this.productService = productService;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.products = this.productService.getSellerProducts();
    };
    ProfilePage.prototype.delete = function (id) {
        this.productService.deleteProduct(id);
    };
    ProfilePage.prototype.signOut = function () {
        this.auth.signOut();
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
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
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map