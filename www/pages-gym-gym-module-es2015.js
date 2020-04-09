(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-gym-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym/gym.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-app>\r\n    <ion-content overflow-scroll=\"true\">\r\n\r\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\r\n        <ion-content>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile Page</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gym Page</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups Page</ion-button>\r\n            </ion-item>\r\n       \r\n          </ion-list>\r\n        </ion-content>\r\n      </ion-menu>\r\n      \r\n      <div id=\"main\">\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n      </div>   \r\n  \r\n    \r\n  <div class=\"profileImage\">\r\n    <ion-card-header>\r\n        <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n        <ion-card-subtitle id=\"nameStatus\">1234 Street, City 555-555-5555</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </div>\r\n  \r\n<main>\r\n  \r\n    \r\n    <div>\r\n        <ion-button class=\"nav\" color=\"lightred\">Message</ion-button>\r\n        <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\r\n        <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\r\n    </div>\r\n    <div>\r\n        <ion-card class=\"profileImage2\">\r\n            <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n            We just released a new class schedule! Check it out!\r\n        </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"profileImage2\">\r\n             <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n           Personal training special! Now through March 1 all of our personal training sessions are 50% off!\r\n        </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"profileImage2\">\r\n             <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n           It's a great day for a great day!\r\n        </ion-card-content>\r\n        </ion-card>  \r\n    </div>\r\n</main>\r\n\r\n<ion-button (click)=\"signOut()\" class=\"signOutButton\">\r\n    <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n  </ion-button>\r\n  \r\n  <ion-button (click)=\"getLocation()\" class=\"geolocationButton\">\r\n    Get Location  \r\n  </ion-button>\r\n  <p>Latitude: {{lat}}</p>\r\n  <p>Longitude: {{long}}</p>\r\n\r\n  <ion-button (click)=\"addGeofence()\">\r\n    Add Geofence\r\n  </ion-button>\r\n  <p>{{success}}</p>\r\n  <p>{{fail}}</p>\r\n</ion-content>\r\n\r\n</ion-app>"

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

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3ltL0M6XFxVc2Vyc1xcdGNhcnZcXERvY3VtZW50c1xcR2l0aHViXFxHeW0tV2Fycmlvci9zcmNcXGFwcFxccGFnZXNcXGd5bVxcZ3ltLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFRTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURFQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogNTUlO1xyXG59XHJcblxyXG4jbmFtZVN0YXR1cyB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5wcm9maWxlSW1hZ2UyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcblxyXG4gIH1cclxuICAubmF2e1xyXG4gICAgd2lkdGg6IDMyJTtcclxuICB9XHJcblxyXG4gIC5uYXZNZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiBwe1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuICIsIi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4ubmF2IHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geofence/ngx */ "./node_modules/@ionic-native/geofence/ngx/index.js");






let GymPage = class GymPage {
    constructor(auth, productService, geolocation, geofence) {
        this.auth = auth;
        this.productService = productService;
        this.geolocation = geolocation;
        this.geofence = geofence;
        geofence.initialize().then(
        // resolved promise does not return a value
        () => console.log('Geofence Plugin Ready'), (err) => console.log(err));
    }
    getLocation() {
        this.geolocation.getCurrentPosition().then((location) => {
            this.lat = location.coords.latitude;
            this.long = location.coords.longitude;
            console.log('Latitude: ' + location.coords.latitude);
            console.log('Longitude: ' + location.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addGeofence() {
        let fence = {
            id: 'testID',
            latitude: 46.411662,
            longitude: -117.026571,
            radius: 100,
            transitionType: 3,
            notification: {
                id: 1,
                title: 'You crossed a fence',
                text: 'You just arrived at LCSC',
                openAppOnClick: true
            }
        };
        this.geofence.addOrUpdate(fence).then(() => this.success = "success", (err) => this.fail = err);
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
GymPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__["Geofence"] }
];
GymPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./gym.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html"),
        styles: [__webpack_require__(/*! ./gym.page.scss */ "./src/app/pages/gym/gym.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__["Geofence"]])
], GymPage);



/***/ })

}]);
//# sourceMappingURL=pages-gym-gym-module-es2015.js.map