(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n            </ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              Logout <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n       \n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n\n<main>\n    <div>\n      <ion-button class=\"nav\" href=\"user/profile\" color=\"lightred\">profile</ion-button>\n      <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n      <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n      <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n    </div>\n    \n    <div class=\"profileImage\" *ngIf=\"togglePostFlag\">\n      <div *ngIf=\"imageReady\">\n        <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n          <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n        </div>\n      </div>\n    </div>\n\n    <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n        Post\n      </ion-button>\n    </form>\n\n    <div>\n      <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n        <header class=\"post-header\" *ngIf=post.Image>\n          <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n          <div class=\"text-bg\" >\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n          </div>\n        </header>\n        <div *ngIf=!post.Image class=\"no-image-text\">\n          <p class=\"time\">{{post.TimeCreated}}</p>\n          <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n        </div>\n        <p class=\"post-text\">{{post.Data.txt}}</p>\n        <!-- Leaving this here as may use in the future for use to store likes etc.. -->\n        <!-- <p>{{post.User_ID}}</p> -->\n        <footer>\n          <div class=\"like\">\n            <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n          </div>\n          <div class=\"comment\">\n            <ion-img src=\"../../assets/comment.png\"></ion-img>\n          </div>\n        </footer>\n      </ion-card> \n      \n      <ion-card class=\"profileImage2\">\n          <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n          </ion-card-content>\n        </ion-card>\n    </div>\n</main>\n</ion-content>\n\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");




var routes = [
    {
        path: '',
        component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }
];
var FeedPageRoutingModule = /** @class */ (function () {
    function FeedPageRoutingModule() {
    }
    FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FeedPageRoutingModule);
    return FeedPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed-routing.module */ "./src/app/pages/feed/feed-routing.module.ts");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");







var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
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
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.profileImage > div {\n  height: 400px;\n}\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n.nav {\n  width: 24%;\n}\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\np {\n  color: white;\n  text-align: center;\n}\n.hide {\n  display: none;\n}\nion-textarea {\n  background: #fff;\n  padding: 10px;\n  color: #000 !important;\n}\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post {\n  padding: 0px 20px 10px 20px;\n}\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.post .no-image-text {\n  margin-top: 15px;\n}\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n.post p.time {\n  font-size: 10px;\n}\n.post p.name {\n  font-size: 16px;\n}\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n}\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n}\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n}\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0hGO0FETUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSE47QURNQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hIO0FET0M7RUFDRSxhQUFBO0FDSkg7QURPQztFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSkg7QURNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0hGO0FEU0E7RUFDRSwyQkFBQTtBQ05GO0FEUUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTko7QURRSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0FDUE47QURTSTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDUE47QURhRTtFQUNFLGdCQUFBO0FDWEo7QURjRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNaSjtBRGlCRTtFQUNFLGVBQUE7QUNmSjtBRGtCRTtFQUNFLGVBQUE7QUNoQko7QURrQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRHFCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FDbkJKO0FEcUJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDbkJOO0FEdUJFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ3JCSjtBRHVCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY+ZGl2IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIFxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuICAucHJvZmlsZUltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDU1JTtcblxuICB9XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDI0JTtcbiAgfVxuXG4gIC5uYXZNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiBwe1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcblxuIC5oaWRlIHtcbiAgIGRpc3BsYXk6IG5vbmU7XG4gfVxuXG4gaW9uLXRleHRhcmVhIHtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiB9XG4ucG9zdC1iZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4gXG5cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG5cbiAgLnBvc3QtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBcbiAgICAuaW5uZXItYmcge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIFxuICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgLnRleHQtYmcge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYxKTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcblxuICAgIH1cbiAgfVxuICBcblxuICAubm8taW1hZ2UtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgXG5cbiAgcC50aW1lIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgfVxuICBwLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBwLnBvc3QtdGV4dCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cblxuICBcbiAgLy9JY29uc1xuICAubGlrZSB7XG4gICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xuICAgIH1cbiAgfVxuXG4gIC5jb21tZW50IHtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XG4gICAgfVxuICB9ICBcblxufSIsIi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucHJvZmlsZUltYWdlID4gZGl2IHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5wcm9maWxlSW1hZ2UgLmltYWdlQmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDBweDtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAyNCU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3QtYmcge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciAuaW5uZXItYmcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAwO1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIC50ZXh0LWJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4ucG9zdCAubm8taW1hZ2UtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucG9zdCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5wb3N0IHAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wb3N0IHAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wb3N0IHAucG9zdC10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ucG9zdCAubGlrZSB7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucG9zdCAubGlrZS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ucG9zdCAuY29tbWVudCB7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnBvc3QgLmNvbW1lbnQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_firestore_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");












var FeedPage = /** @class */ (function () {
    function FeedPage(auth, productService, actionSheetController, camera, db, afAuth, storage, webview, sanitizer, postCrudService) {
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
        this.friends = [];
        this.postData = {};
        this.posts = {};
        this.myPosts = [];
        this.months = [];
        this.minutes = [];
        this.togglePostFlag = false;
    }
    FeedPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    FeedPage.prototype.ngOnInit = function () {
        this.months = [
            'Jan', 'Feb', 'Mar',
            'Apr', 'May', 'Jun', 'Jul',
            'Aug', 'Sept', 'Oct',
            'Nov', 'Dec'
        ];
        this.minutes = [
            '01', '02', '03',
            '04', '05', '06',
            '07', '08', '09'
        ];
        var id = this.afAuth.auth.currentUser.uid;
        this.getUserData(id);
        this.getFriends();
    };
    FeedPage.prototype.togglePost = function () {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    };
    // Image Handlers
    FeedPage.prototype.selectSource = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Image Source',
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.captureImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.captureImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.captureImage = function (sourceType) {
        var _this = this;
        var storageRef = null;
        var id = this.afAuth.auth.currentUser.uid;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            storageRef = _this.storage.ref(id);
            // Convert url to safe url and set the state of new profileImage
            _this.profileImage = _this.webview.convertFileSrc(imagePath);
            _this.imageReady = true;
            // Upload image
            _this.imageID = _this.makeid(60);
            // console.log(this.imageID);
            _this.uploadImage(_this.profileImage, _this.imageID);
        });
    };
    FeedPage.prototype.uploadImage = function (imageURI, imageName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = _this.afAuth.auth.currentUser.uid;
            var storageRef = _this.storage.ref(id);
            var imageRef = storageRef.child('image').child(imageName);
            _this.encodeImageUri(imageURI, function (image64) {
                var _this = this;
                imageRef.putString(image64, 'data_url')
                    .then(function (snapshot) {
                    resolve(snapshot.downloadURL);
                    _this.profileImage = snapshot.downloadURL;
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    FeedPage.prototype.encodeImageUri = function (imageUri, callback) {
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
    };
    FeedPage.prototype.removeImage = function () {
        this.profileImage = '';
        this.imageReady = false;
    };
    FeedPage.prototype.createPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dateTime, id, record;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                dateTime = new Date().toISOString();
                console.log("dateTime");
                console.log(dateTime);
                id = this.afAuth.auth.currentUser.uid;
                record = {};
                record['user_id'] = id;
                this.postData['fname'] = this.fname;
                this.postData['lname'] = this.lname;
                record['timeCreated'] = dateTime;
                record['data'] = this.postData;
                if (this.imageID !== undefined) {
                    record['image'] = this.imageID;
                }
                this.postCrudService.createPost(record).then(function (resp) {
                    // console.log(resp);
                })
                    .catch(function (error) {
                    // console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    FeedPage.prototype.getPostImage = function (id, imageID, counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, profileImage;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ref = this.storage.ref(id + '/image/' + imageID);
                profileImage = ref.getDownloadURL();
                profileImage.subscribe(function (result) {
                    // this.profileImage = result;
                    // this.imageReady = true;
                    // console.log('counter', counter);
                    // console.log(result);
                    _this.myPosts[counter].Image = result;
                    return result;
                });
                return [2 /*return*/];
            });
        });
    };
    FeedPage.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    FeedPage.prototype.getUserData = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('users')
                            .doc(id)
                            .ref
                            .get().then(function (doc) {
                            if (doc.exists) {
                                var userData_1 = doc.data();
                                return userData_1;
                            }
                            else {
                                // console.log('No such document!');
                            }
                        })];
                    case 1:
                        userData = _a.sent();
                        this.fname = userData.fname;
                        this.lname = userData.lname;
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.getFriends = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.afAuth.auth.currentUser.uid;
                        return [4 /*yield*/, this.postCrudService.readFriendsIds(id).subscribe(function (data) {
                                _this.friends = data.payload.data()['Friends'];
                                _this.getPosts();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = this.afAuth.auth.currentUser.uid;
                // this.friends = this.postCrudService.readFriendsIds(id);
                // This gets all posts...
                this.postCrudService.readPosts().subscribe(function (data) {
                    _this.posts = data.map(function (e) {
                        console.log(e.payload.doc.data()['timeCreated']);
                        var timeCreated = new Date(e.payload.doc.data()['timeCreated']);
                        var hours = timeCreated.getHours();
                        var minutes = timeCreated.getMinutes();
                        if (hours > 12) {
                            hours = hours - 12;
                        }
                        if (minutes < 10) {
                            minutes = _this.minutes[minutes - 1];
                        }
                        var timeFormated = _this.months[timeCreated.getMonth() - 1] + ' '
                            + timeCreated.getDate() + ' at ' + hours + ':' + minutes;
                        // timeCreated.
                        // console.log(timeCreated);
                        return {
                            id: e.payload.doc.id,
                            isEdit: false,
                            Data: e.payload.doc.data()["data"],
                            Image: e.payload.doc.data()["image"],
                            User_ID: e.payload.doc.data()["user_id"],
                            TimeCreated: timeFormated
                        };
                    });
                    // Overly convoluted hack as I couldn't figure out how to query properly.
                    // This will need to be fixed eventually.
                    var postsLength = Object.keys(_this.posts).length;
                    var counter = 0;
                    console.log('this.friends');
                    console.log(_this.friends);
                    for (var i = 0; i < postsLength; i++) {
                        // If only this users posts
                        console.log(_this.posts[i].User_ID);
                        console.log(_this.friends.includes(_this.posts[i].User_ID));
                        if (_this.posts[i].User_ID === id || _this.friends.includes(_this.posts[i].User_ID)) {
                            _this.myPosts[counter] = _this.posts[i];
                            _this.getUserData(_this.posts[i].User_ID);
                            // If this.posts[i].Image is set.
                            if (_this.posts[i].Image !== undefined) {
                                _this.getPostImage(id, _this.posts[i].Image, counter);
                            }
                            counter++;
                        }
                    }
                    console.log(_this.posts);
                });
                return [2 /*return*/];
            });
        });
    };
    FeedPage.ctorParameters = function () { return [
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
    ]; };
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
    return FeedPage;
}());

// Old getPosts leaving for Danielle and the gym feed.
// async getPosts() {
//   const id = this.afAuth.auth.currentUser.uid;
//   // this.friends = this.postCrudService.readFriendsIds(id);
//   // This gets all posts...
//   this.postCrudService.readPosts().subscribe(data => {
//     this.posts = data.map(e => {
//       console.log(e.payload.doc.data()['timeCreated']);
//       const timeCreated = new Date(e.payload.doc.data()['timeCreated']);
//       let hours = timeCreated.getHours();
//       let minutes = timeCreated.getMinutes();
//       if (hours > 12) {
//         hours = hours - 12;
//       }
//       if (minutes < 10) {
//         minutes = this.minutes[minutes - 1];
//       }
//       const timeFormated = this.months[timeCreated.getMonth() - 1] + ' '
//                             + timeCreated.getDate() + ' - ' + hours + ':' + minutes;
//       // timeCreated.
//       // console.log(timeCreated);
//       return {
//         id: e.payload.doc.id,
//         isEdit: false,
//         Data: e.payload.doc.data()["data"],
//         Image: e.payload.doc.data()["image"],
//         User_ID: e.payload.doc.data()["user_id"],
//         TimeCreated: timeFormated
//       };
//     })
//     // Overly convoluted hack as I couldn't figure out how to query properly.
//     // This will need to be fixed eventually.
//     const postsLength = Object.keys(this.posts).length;
//     let counter = 0;
//     for (let i = 0; i < postsLength; i++) {
//       // If only this users posts
//       if (this.posts[i].User_ID === id) {
//         this.myPosts[counter] = this.posts[i];
//         this.getUserData(this.posts[i].User_ID);
//         // If this.posts[i].Image is set.
//         if (this.posts[i].Image !== undefined) {
//           this.getPostImage(id, this.posts[i].Image, counter);
//         }
//         counter++;
//       }
//     }
//     console.log(this.posts);
//   });
// }
// }


/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map