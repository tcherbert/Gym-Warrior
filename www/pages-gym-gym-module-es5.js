(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-gym-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym/gym.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/feed\">Feed</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n                <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n              </ion-button>\n            </ion-item>\n       \n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n  \n    \n  <div class=\"profileImage\">\n    <ion-card-header>\n        <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n        <ion-card-subtitle id=\"nameStatus\">1234 Street, City 555-555-5555</ion-card-subtitle>\n    </ion-card-header>\n  </div>\n  \n<main>\n  \n    \n    <div>\n        <ion-button class=\"nav\" color=\"lightred\">Message</ion-button>\n        <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n        <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n    </div>\n    <div>\n        <ion-card class=\"profileImage2\">\n            <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"profileImage2\">\n             <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n           Personal training special! Now through March 1 all of our personal training sessions are 50% off!\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"profileImage2\">\n             <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n           It's a great day for a great day!\n        </ion-card-content>\n        </ion-card>  \n    </div>\n</main>\n  <ion-button (click)=\"getLocation()\" class=\"geolocationButton\">\n    Get Location  \n  </ion-button>\n  <p>Latitude: {{lat}}</p>\n  <p>Longitude: {{long}}</p>\n</ion-content>\n\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gym_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym.page */ "./src/app/pages/gym/gym.page.ts");




var routes = [
    {
        path: '',
        component: _gym_page__WEBPACK_IMPORTED_MODULE_3__["GymPage"]
    }
];
var GymPageRoutingModule = /** @class */ (function () {
    function GymPageRoutingModule() {
    }
    GymPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GymPageRoutingModule);
    return GymPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gym_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym-routing.module */ "./src/app/pages/gym/gym-routing.module.ts");
/* harmony import */ var _gym_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym.page */ "./src/app/pages/gym/gym.page.ts");







var GymPageModule = /** @class */ (function () {
    function GymPageModule() {
    }
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
    return GymPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gym/gym.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/gym/gym.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW0vZ3ltLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFRTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDTjs7QURFQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG4gIC5wcm9maWxlSW1hZ2UyIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNTUlO1xuXG4gIH1cbiAgLm5hdntcbiAgICB3aWR0aDogMzIlO1xuICB9XG5cbiAgLm5hdk1lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIFxuICAgIGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxuIHB7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gfVxuICIsIi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4ubmF2IHtcbiAgd2lkdGg6IDMyJTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geofence/ngx */ "./node_modules/@ionic-native/geofence/ngx/index.js");






var GymPage = /** @class */ (function () {
    function GymPage(auth, productService, geolocation, geofence) {
        this.auth = auth;
        this.productService = productService;
        this.geolocation = geolocation;
        this.geofence = geofence;
    }
    GymPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (location) {
            _this.lat = location.coords.latitude;
            _this.long = location.coords.longitude;
            console.log('Latitude: ' + location.coords.latitude);
            console.log('Longitude: ' + location.coords.longitude);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    GymPage.prototype.addGeofence = function () {
        var fence = {
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
        this.geofence.addOrUpdate(fence).then(function () { return console.log("Geofence added"); }, function (err) { return console.log('Geofence failed to add'); });
    };
    GymPage.prototype.ngOnInit = function () {
        this.products = this.productService.getSellerProducts();
    };
    GymPage.prototype.delete = function (id) {
        this.productService.deleteProduct(id);
    };
    GymPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    GymPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
        { type: _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__["Geofence"] }
    ]; };
    GymPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./gym.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html"),
            styles: [__webpack_require__(/*! ./gym.page.scss */ "./src/app/pages/gym/gym.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _ionic_native_geofence_ngx__WEBPACK_IMPORTED_MODULE_5__["Geofence"]])
    ], GymPage);
    return GymPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gym-gym-module-es5.js.map