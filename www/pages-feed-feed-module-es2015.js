(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile Page</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gym Page</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups Page</ion-button>\n            </ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              Logout <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n       \n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n\n<main>\n    <div>\n      <ion-button class=\"nav\" href=\"user/profile\" color=\"lightred\">profile</ion-button>\n      <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n      <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n      <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n    </div>\n    \n    <div class=\"profileImage\">\n      <div *ngIf=\"imageReady\">\n        <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n          <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n        </div>\n      </div>\n    </div>\n\n    <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n      <ion-button expand=\"block\" type=\"submit\"\n      class=\"ion-margin-vertical\">\n        Post\n      </ion-button>\n    </form>\n\n    <div>\n      <ion-card  *ngFor =\"let post of myPosts\">\n        <div>\n          <div class=\"post-bg\" *ngIf=post.Image [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n          <p>{{post.User_ID}}</p>\n          <p>{{post.Data.txt}}</p>\n        </div>\n      </ion-card> \n      \n      <ion-card class=\"profileImage2\">\n          <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n          </ion-card-content>\n        </ion-card>\n    </div>\n</main>\n</ion-content>\n\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/feed/feed-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feed/feed-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function() { return FeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");




const routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "./src/app/pages/feed/feed-routing.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");







let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]
        ],
        declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })
], FeedPageModule);



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.profileImage > div {\n  height: 400px;\n}\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n.nav {\n  width: 24%;\n}\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\np {\n  color: white;\n  text-align: center;\n}\n.hide {\n  display: none;\n}\nion-textarea {\n  background: #fff;\n  padding: 10px;\n}\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0hGO0FETUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSE47QURNQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hIO0FET0M7RUFDRSxhQUFBO0FDSkg7QURPQztFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0pIO0FETUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY+ZGl2IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIFxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuICAucHJvZmlsZUltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDU1JTtcblxuICB9XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDI0JTtcbiAgfVxuXG4gIC5uYXZNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiBwe1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcblxuIC5oaWRlIHtcbiAgIGRpc3BsYXk6IG5vbmU7XG4gfVxuXG4gaW9uLXRleHRhcmVhIHtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICBwYWRkaW5nOiAxMHB4O1xuIH1cbi5wb3N0LWJnIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbiAiLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSA+IGRpdiB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ucHJvZmlsZUltYWdlIC5pbWFnZUJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAwcHg7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMjQlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5uYXZNZW51IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wb3N0LWJnIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");











// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

let FeedPage = class FeedPage {
    constructor(auth, productService, actionSheetController, camera, db, afAuth, storage, webview, sanitizer, postCrudService) {
        this.auth = auth;
        this.productService = productService;
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.webview = webview;
        this.sanitizer = sanitizer;
        this.postCrudService = postCrudService;
        this.postData = {};
        this.posts = {};
        this.myPosts = [];
        this.togglePostFlag = false;
    }
    ngOnInit() {
        this.postCrudService.readPosts().subscribe(data => {
            this.posts = data.map(e => {
                return {
                    id: e.payload.doc.id,
                    isEdit: false,
                    Data: e.payload.doc.data()['data'],
                    Image: e.payload.doc.data()['image'],
                    User_ID: e.payload.doc.data()['user_id'],
                };
            });
            // Overly convoluted hack as I couldn't figure out how to query properly.
            // This will need to be fixed eventually.
            const postsLength = Object.keys(this.posts).length;
            const id = this.afAuth.auth.currentUser.uid;
            let counter = 0;
            for (let i = 0; i < postsLength; i++) {
                if (this.posts[i].User_ID === id) {
                    this.myPosts[counter] = this.posts[i];
                    // If this.posts[i].Image is set.
                    if (this.posts[i].Image !== undefined) {
                        this.getPostImage(id, this.posts[i].Image, counter);
                        // console.log('this.myPosts[counter].Image');
                        // console.log(this.myPosts[counter].Image);
                    }
                    counter++;
                }
            }
            console.log(this.myPosts);
        });
    }
    togglePost() {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    }
    // Image Handlers
    selectSource() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image Source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
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
        let storageRef = null;
        const id = this.afAuth.auth.currentUser.uid;
        const options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            storageRef = this.storage.ref(id);
            // Convert url to safe url and set the state of new profileImage
            this.profileImage = this.webview.convertFileSrc(imagePath);
            this.imageReady = true;
            // Upload image
            this.imageID = this.makeid(60);
            console.log(this.imageID);
            this.uploadImage(this.profileImage, this.imageID);
        });
    }
    uploadImage(imageURI, imageName) {
        return new Promise((resolve, reject) => {
            const id = this.afAuth.auth.currentUser.uid;
            let storageRef = this.storage.ref(id);
            console.log('storageRef');
            console.log(storageRef);
            let imageRef = storageRef.child('image').child(imageName);
            this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                    resolve(snapshot.downloadURL);
                    this.profileImage = snapshot.downloadURL;
                }, err => {
                    reject(err);
                });
            });
        });
    }
    encodeImageUri(imageUri, callback) {
        var c = document.createElement('canvas');
        var ctx = c.getContext('2d');
        var img = new Image();
        img.crossOrigin = 'anonymous'; // This enables CORS
        img.onload = function () {
            var aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            var dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    }
    removeImage() {
        this.profileImage = '';
        this.imageReady = false;
    }
    createPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            let record = {};
            record['user_id'] = id;
            record['data'] = this.postData;
            record['image'] = this.imageID;
            this.postCrudService.createPost(record).then(resp => {
                console.log(resp);
            })
                .catch(error => {
                console.log(error);
            });
        });
    }
    getPostImage(id, imageID, counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ref = this.storage.ref(id + '/image/' + imageID);
            const profileImage = ref.getDownloadURL();
            profileImage.subscribe(result => {
                // this.profileImage = result;
                // this.imageReady = true;
                console.log('counter', counter);
                console.log(result);
                this.myPosts[counter].Image = result;
                return result;
            });
        });
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
FeedPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"] },
    { type: _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_11__["PostCrudService"] }
];
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html"),
        styles: [__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"],
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"],
        _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_11__["PostCrudService"]])
], FeedPage);



/***/ }),

/***/ "./src/app/services/firestore-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/firestore-api.service.ts ***!
  \***************************************************/
/*! exports provided: PostCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCrudService", function() { return PostCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");



let PostCrudService = class PostCrudService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    createPost(record) {
        return this.firestore.collection('posts').add(record);
        // return this.firestore.collection('posts').add(record);
    }
    readPosts() {
        return this.firestore.collection('posts').snapshotChanges();
    }
    updatePost(recordID, record) {
        this.firestore.doc('posts/' + recordID).update(record);
    }
    deletePost(record_id) {
        this.firestore.doc('posts/' + record_id).delete();
    }
};
PostCrudService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
PostCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], PostCrudService);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map