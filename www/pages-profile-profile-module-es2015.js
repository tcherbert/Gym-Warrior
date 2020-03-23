(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"dataReady\">\n    <ion-content overflow-scroll=\"true\">\n  <!--Navigation Bar-->\n  <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n    <ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile Page</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gym Page</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups Page</ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n              \n  <div id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n      </ion-toolbar>\n    </ion-header>\n  </div> \n  \n  <div class=\"profileImage\">\n    <div *ngIf=\"imageReady\">\n      <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n      <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n        \n        <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n      </div>\n  </div>\n    <ion-button (click)=\"selectSource()\"><ion-icon name=\"md-create\"></ion-icon></ion-button>  \n    <ion-card-header>\n        <ion-card-title> {{ fname }} {{ lname }}</ion-card-title>\n        <ion-card-subtitle> Out of Shape -- Beginner </ion-card-subtitle>\n    </ion-card-header>\n  </div>\n  <div class=\"navbar\">\n    <ion-button class=\"nav\" color=\"lightred\">About</ion-button>\n    <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n    <ion-button class=\"nav\" color=\"lightred\">Friends</ion-button>\n    <ion-button class=\"nav\" color=\"darkred\">Schedule</ion-button>\n  </div>\n  \n  \n  <main class=\"mainContent\">\n    <div>\n      <ion-card class=\"profileImage2\">\n        <ion-card-header>\n          <ion-card-subtitle id=\"nameStatus\">Smart Fitness</ion-card-subtitle>\n          <ion-card-title id=\"nameStatus\">Tim Herbert</ion-card-title>\n        </ion-card-header>\n        <ion-card-content id=\"nameStatus\">\n            Exercise is a celebration of what your body can do, not a punishment for what you ate.\n        </ion-card-content>\n      </ion-card>\n  \n      <ion-card class=\"profileImage3\">\n        <ion-card-header>\n          <ion-card-subtitle id=\"namestatus\">Smart Fitness</ion-card-subtitle>\n          <ion-card-title id=\"nameStatus\">Tim Herbert</ion-card-title>\n        </ion-card-header>\n\n      <ion-card-content id=\"nameStatus\">\n        <ion-icon name=\"location-outline\"></ion-icon> Smart Fitness 9 am Yoga\n      </ion-card-content>\n      </ion-card>\n    </div>\n  </main>\n      \n  <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n    <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n  </ion-button>\n  </ion-content>\n</ion-app>\n\n"

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

module.exports = ".menu-content {\n  --background-color: #f00;\n}\n\n.profileImage {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  position: relative;\n}\n\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\n.nav {\n  width: 24%;\n}\n\n@media only screen and (max-width: 400px) {\n  .nav {\n    width: 23.7%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtBQ0FGOztBREdFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNETjs7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRE47O0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE9BO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSkY7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7RUFDRSxVQUFBO0FDTkY7O0FEUUE7RUFDRTtJQUNFLFlBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMDA7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIFxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wcm9maWxlUGhvdG8yLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG5cbi5wcm9maWxlSW1hZ2UzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ncm91cHByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgXG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLm5hdntcbiAgd2lkdGg6IDI0JTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAubmF2e1xuICAgIHdpZHRoOiAyMy43JTtcbiAgfVxufVxuIiwiLm1lbnUtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSAuaW1hZ2VCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcHJvZmlsZVBob3RvMi5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMjQlO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5uYXYge1xuICAgIHdpZHRoOiAyMy43JTtcbiAgfVxufSJdfQ== */"

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");










let ProfilePage = class ProfilePage {
    constructor(auth, db, afAuth, storage, camera, sanitizer, actionSheetController, webview) {
        this.auth = auth;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.actionSheetController = actionSheetController;
        this.webview = webview;
        this.image = null;
        this.dataReady = false;
        this.imageReady = false;
    }
    ngOnInit() {
        this.getUserData();
    }
    signOut() {
        this.auth.signOut();
    }
    getUserData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            const userData = yield this.db.collection('users')
                .doc(id)
                .ref
                .get().then(function (doc) {
                if (doc.exists) {
                    // console.log("Document data:", doc.data());
                    const userData = doc.data();
                    // this.fname = doc.data().fname;
                    // this.lname = doc.data().lname;
                    // this.updateData = true;
                    return userData;
                    console.log('userData: ', userData);
                }
                else {
                    console.log('No such document!');
                }
            });
            this.fname = userData.fname;
            this.lname = userData.lname;
            this.dataReady = true;
        });
    }
    selectSource() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image Source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            console.log("Hello from Load from Library");
                            this.captureImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.captureImage(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            actionSheet.present();
        });
    }
    captureImage(sourceType) {
        console.log("Hello from CaptureImage");
        const options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            console.log('Path Before: ', imagePath);
            // this.image = this.webview.convertFileSrc(imagePath);
            // this.image = this.sanitizer.bypassSecurityTrustUrl(this.image);
            // console.log('path: ', this.image);
            this.profileImage = this.webview.convertFileSrc(imagePath);
            this.imageReady = true;
            // this.profileImage = this.sanitizer.bypassSecurityTrustUrl(this.profileImage);
            console.log('profileImage: ', this.profileImage);
        });
    }
    getBackground() {
        return this.sanitizer.bypassSecurityTrustUrl(this.profileImage);
    }
}; // end ProfilePage Class
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
        styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map