(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gymListings-gymlistings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gymListings/gymlistings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gymListings/gymlistings.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-app>\n  <ion-content overflow-scroll=\"true\">\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n      <ion-content>\n        <ion-list>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/profile\">Profile</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    \n    <div id=\"main\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <a href=\"user/feed\">\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </a>\n        </ion-toolbar>\n      </ion-header>\n    </div>   \n\n    <main>\n      <section>\n        <h1>Gyms</h1>\n          <ion-list *ngFor=\"let gym of myGyms\">\n            <ion-card class=\"gym\">\n              <ion-card-header>\n                <div *ngIf=\"gym.imageFlag\">\n                  <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+gym.image+')'}\"></div>\n                </div>\n              </ion-card-header>\n              <ion-card-title>{{ gym.name }}</ion-card-title>\n              <ion-card-subtitle>{{ gym.city }}, {{ gym.state }}</ion-card-subtitle>\n              <ion-card-subtitle>{{ gym.address }}</ion-card-subtitle>\n              <ion-button href=\"/user/gym/{{ gym.id }}\">View Gym</ion-button>\n            </ion-card>\n          </ion-list> \n      </section>\n    </main>\n  </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/gymListings/gymlistings-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/gymListings/gymlistings-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: GymListingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymListingsPageRoutingModule", function() { return GymListingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gymlistings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gymlistings.page */ "./src/app/pages/gymListings/gymlistings.page.ts");




var routes = [
    {
        path: '',
        component: _gymlistings_page__WEBPACK_IMPORTED_MODULE_3__["GymListingsPage"]
    }
];
var GymListingsPageRoutingModule = /** @class */ (function () {
    function GymListingsPageRoutingModule() {
    }
    GymListingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GymListingsPageRoutingModule);
    return GymListingsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/gymListings/gymlistings.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/gymListings/gymlistings.module.ts ***!
  \*********************************************************/
/*! exports provided: GymListingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymListingsPageModule", function() { return GymListingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gymlistings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gymlistings-routing.module */ "./src/app/pages/gymListings/gymlistings-routing.module.ts");
/* harmony import */ var _gymlistings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gymlistings.page */ "./src/app/pages/gymListings/gymlistings.page.ts");







var GymListingsPageModule = /** @class */ (function () {
    function GymListingsPageModule() {
    }
    GymListingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _gymlistings_routing_module__WEBPACK_IMPORTED_MODULE_5__["GymListingsPageRoutingModule"]
            ],
            declarations: [_gymlistings_page__WEBPACK_IMPORTED_MODULE_6__["GymListingsPage"]]
        })
    ], GymListingsPageModule);
    return GymListingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gymListings/gymlistings.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/gymListings/gymlistings.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\np {\n  color: white;\n  text-align: center;\n}\n\nh1 {\n  color: white;\n  text-align: center;\n}\n\n.gym {\n  padding: 0px 20px 10px 20px;\n  position: relative;\n}\n\n.gym ion-card-header {\n  margin: 0px;\n  padding: 0px;\n  margin-top: 20px;\n}\n\n.gym ion-card-content {\n  color: #fff;\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n\n.gym ion-card-subtitle {\n  color: #fff;\n  font-size: 100%;\n  margin: 0px;\n  padding: 0px;\n  font-size: 10px;\n  margin-right: 200px;\n  width: 100%;\n}\n\n.gym ion-card-title {\n  color: white;\n  font-size: 16px;\n  margin-right: 200px;\n  width: 100%;\n}\n\n.gym .imageBg {\n  height: 75px;\n  width: 75px;\n  background-size: cover;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  background-position: 50% 50%;\n}\n\n.gym ion-button {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW1MaXN0aW5ncy9neW1saXN0aW5ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2d5bUxpc3RpbmdzL2d5bWxpc3RpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREVFO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsVUFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNDSjs7QURDSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0NOOztBREVDO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDQ0g7O0FER0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURRQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUNMRjs7QURPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURPRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURPRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDTEo7O0FET0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3ltTGlzdGluZ3MvZ3ltbGlzdGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuICAucHJvZmlsZUltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDU1JTtcblxuICB9XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDMyJTtcbiAgfVxuXG4gIC5uYXZNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiBwIHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG5cblxuaDF7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cblxuXG5cblxuLmd5bSB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDEwcHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgfVxuICBpb24tY2FyZC1zdWJ0aXRsZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIGlvbi1jYXJkLXRpdGxle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIH1cblxuICBpb24tYnV0dG9uICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxuXG59IiwiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMzIlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5uYXZNZW51IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3ltIHtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZ3ltIGlvbi1jYXJkLWhlYWRlciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZ3ltIGlvbi1jYXJkLWNvbnRlbnQge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uZ3ltIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5neW0gaW9uLWNhcmQtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZ3ltIC5pbWFnZUJnIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogNzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG4uZ3ltIGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/gymListings/gymlistings.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/gymListings/gymlistings.page.ts ***!
  \*******************************************************/
/*! exports provided: GymListingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymListingsPage", function() { return GymListingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");






var GymListingsPage = /** @class */ (function () {
    function GymListingsPage(auth, postCrudService, afAuth, storage) {
        this.auth = auth;
        this.postCrudService = postCrudService;
        this.afAuth = afAuth;
        this.storage = storage;
        this.gyms = {};
        this.friendsData = {};
        this.myGyms = [];
    }
    GymListingsPage.prototype.ngOnInit = function () {
        this.getGyms();
    };
    GymListingsPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    GymListingsPage.prototype.getGyms = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = this.afAuth.auth.currentUser.uid;
                this.postCrudService.readGyms().subscribe(function (data) {
                    _this.gyms = data.map(function (e) {
                        return {
                            address: e.payload.doc.data()["address"],
                            city: e.payload.doc.data()["city"],
                            id: e.payload.doc.id,
                            name: e.payload.doc.data()["name"],
                            state: e.payload.doc.data()["state"]
                        };
                    });
                    var gymsLength = Object.keys(_this.gyms).length;
                    var counter = 0;
                    for (var i = 0; i < gymsLength; i++) {
                        _this.myGyms[counter] = _this.gyms[i];
                        _this.myGyms[counter]['index'] = counter;
                        counter++;
                    }
                    _this.findGymImages();
                });
                return [2 /*return*/];
            });
        });
    };
    GymListingsPage.prototype.findGymImages = function () {
        // Known friends
        var friendsDataLength = Object.keys(this.myGyms).length;
        for (var i = 0; i < friendsDataLength; i++) {
            this.myGyms[i]['image'] = this.getProfileImage(this.myGyms[i].id, i, 'myGyms');
        }
    };
    GymListingsPage.prototype.getProfileImage = function (id, index, resultArray) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, profileImage;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ref = this.storage.ref(id + '/image/profileImage');
                profileImage = ref.getDownloadURL();
                profileImage.subscribe(function (result) {
                    if (resultArray === 'myGyms') {
                        if (typeof result === 'string') {
                            _this.myGyms[index]['image'] = result;
                            _this.myGyms[index]['imageFlag'] = true;
                        }
                        else {
                            _this.myGyms[index]['imageFlag'] = false;
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    GymListingsPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
    ]; };
    GymListingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./gymlistings.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gymListings/gymlistings.page.html"),
            styles: [__webpack_require__(/*! ./gymlistings.page.scss */ "./src/app/pages/gymListings/gymlistings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_3__["PostCrudService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], GymListingsPage);
    return GymListingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gymListings-gymlistings-module-es5.js.map