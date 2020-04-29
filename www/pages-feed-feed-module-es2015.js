(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n            </ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              Logout <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n       \n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n\n<main>\n    <div>\n      <ion-button class=\"nav\" href=\"user/profile\" color=\"lightred\">profile</ion-button>\n      <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n      <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n      <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n    </div>\n    \n    <div class=\"profileImage\" *ngIf=\"togglePostFlag\">\n      <div *ngIf=\"imageReady\">\n        <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n          <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n        </div>\n      </div>\n    </div>\n\n    <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n        Post\n      </ion-button>\n    </form>\n\n    <div>\n      <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n        <header class=\"post-header\">\n          <div class=\"inner-bg\" *ngIf=post.Image [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n          <div class=\"text-bg\" *ngIf=post.Image>\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n          </div>\n        </header>\n        <div *ngIf=!post.Image class=\"no-image-text\">\n          <p class=\"time\">{{post.TimeCreated}}</p>\n          <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n        </div>\n        <p class=\"post-text\">{{post.Data.txt}}</p>\n        <!-- Leaving this here as may use in the future for use to store likes etc.. -->\n        <!-- <p>{{post.User_ID}}</p> -->\n        <footer>\n          <div class=\"like\">\n            <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n          </div>\n          <div class=\"comment\">\n            <ion-img src=\"../../assets/comment.png\"></ion-img>\n          </div>\n        </footer>\n      </ion-card> \n      \n      <ion-card class=\"profileImage2\">\n          <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n          </ion-card-content>\n        </ion-card>\n    </div>\n</main>\n</ion-content>\n\n</ion-app>"

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

module.exports = ".profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.profileImage > div {\n  height: 400px;\n}\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n.nav {\n  width: 24%;\n}\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\np {\n  color: white;\n  text-align: center;\n}\n.hide {\n  display: none;\n}\nion-textarea {\n  background: #fff;\n  padding: 10px;\n}\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post {\n  padding: 0px 20px 10px 20px;\n}\n.post .no-image-text {\n  margin-top: 15px;\n}\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n.post .text-bg {\n  margin-left: -20px;\n  background: rgba(0, 0, 0, 0.81);\n  padding: 10px;\n  padding-left: 20px;\n  display: inline-block;\n}\n.post p.time {\n  font-size: 10px;\n}\n.post p.name {\n  font-size: 16px;\n}\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n}\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n}\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n}\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0hGO0FETUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSE47QURNQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hIO0FET0M7RUFDRSxhQUFBO0FDSkg7QURPQztFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQ0pIO0FETUE7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRFNBO0VBQ0UsMkJBQUE7QUNORjtBRFNFO0VBQ0UsZ0JBQUE7QUNQSjtBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JKO0FEV0U7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNUSjtBRFlFO0VBQ0UsZUFBQTtBQ1ZKO0FEYUU7RUFDRSxlQUFBO0FDWEo7QURhRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDWEo7QURjRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0FDWko7QURjSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ1pOO0FEZ0JFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2RKO0FEZ0JJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDZE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmPmRpdiB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxuICBcbiAgLmltYWdlQmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgfVxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xuICB9XG5cbiAgLnByb2ZpbGVJbWFnZTIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA1NSU7XG5cbiAgfVxuICAubmF2e1xuICAgIHdpZHRoOiAyNCU7XG4gIH1cblxuICAubmF2TWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgXG4gICAgaW9uLWxpc3Qge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG4gcHtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiB9XG4gXG5cbiAuaGlkZSB7XG4gICBkaXNwbGF5OiBub25lO1xuIH1cblxuIGlvbi10ZXh0YXJlYSB7XG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgcGFkZGluZzogMTBweDtcbiB9XG4ucG9zdC1iZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4gXG5cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG5cblxuICAubm8taW1hZ2UtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLnRleHQtYmcge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuODEpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIHAudGltZSB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuXG4gIH1cbiAgcC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgcC5wb3N0LXRleHQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG5cbiAgLmxpa2Uge1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcbiAgICB9XG4gIH1cblxuICAuY29tbWVudCB7XG4gICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xuICAgIH1cbiAgfSAgXG5cbn0iLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSA+IGRpdiB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ucHJvZmlsZUltYWdlIC5pbWFnZUJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAwcHg7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMjQlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5uYXZNZW51IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wb3N0LWJnIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5wb3N0IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xufVxuLnBvc3QgLm5vLWltYWdlLXRleHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBvc3QgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucG9zdCAudGV4dC1iZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgxKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucG9zdCBwLnRpbWUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucG9zdCBwLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucG9zdCBwLnBvc3QtdGV4dCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnBvc3QgLmxpa2Uge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnBvc3QgLmxpa2UuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xufVxuLnBvc3QgLmNvbW1lbnQge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5wb3N0IC5jb21tZW50LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbn0iXX0= */"

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
        this.friends = [];
        this.postData = {};
        this.posts = {};
        this.myPosts = [];
        this.months = [];
        this.minutes = [];
        this.togglePostFlag = false;
    }
    signOut() {
        this.auth.signOut();
    }
    ngOnInit() {
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
        const id = this.afAuth.auth.currentUser.uid;
        this.getUserData(id);
        this.getFriends();
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
            // console.log(this.imageID);
            this.uploadImage(this.profileImage, this.imageID);
        });
    }
    uploadImage(imageURI, imageName) {
        return new Promise((resolve, reject) => {
            const id = this.afAuth.auth.currentUser.uid;
            let storageRef = this.storage.ref(id);
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
            const dateTime = new Date().toISOString();
            console.log("dateTime");
            console.log(dateTime);
            const id = this.afAuth.auth.currentUser.uid;
            let record = {};
            record['user_id'] = id;
            this.postData['fname'] = this.fname;
            this.postData['lname'] = this.lname;
            record['timeCreated'] = dateTime;
            record['data'] = this.postData;
            if (this.imageID !== undefined) {
                record['image'] = this.imageID;
            }
            this.postCrudService.createPost(record).then(resp => {
                // console.log(resp);
            })
                .catch(error => {
                // console.log(error);
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
                // console.log('counter', counter);
                // console.log(result);
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
    getUserData(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userData = yield this.db.collection('users')
                .doc(id)
                .ref
                .get().then(doc => {
                if (doc.exists) {
                    const userData = doc.data();
                    return userData;
                }
                else {
                    // console.log('No such document!');
                }
            });
            this.fname = userData.fname;
            this.lname = userData.lname;
            // this.dataReady = true;
        });
    }
    getFriends() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            yield this.postCrudService.readFriendsIds(id).subscribe(data => {
                this.friends = data.payload.data()['Friends'];
                this.getPosts();
            });
        });
    }
    getPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            // this.friends = this.postCrudService.readFriendsIds(id);
            // This gets all posts...
            this.postCrudService.readPosts().subscribe(data => {
                this.posts = data.map(e => {
                    console.log(e.payload.doc.data()['timeCreated']);
                    const timeCreated = new Date(e.payload.doc.data()['timeCreated']);
                    let hours = timeCreated.getHours();
                    let minutes = timeCreated.getMinutes();
                    if (hours > 12) {
                        hours = hours - 12;
                    }
                    if (minutes < 10) {
                        minutes = this.minutes[minutes - 1];
                    }
                    const timeFormated = this.months[timeCreated.getMonth() - 1] + ' '
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
                const postsLength = Object.keys(this.posts).length;
                let counter = 0;
                console.log('this.friends');
                console.log(this.friends);
                for (let i = 0; i < postsLength; i++) {
                    // If only this users posts
                    console.log(this.posts[i].User_ID);
                    console.log(this.friends.includes(this.posts[i].User_ID));
                    if (this.posts[i].User_ID === id || this.friends.includes(this.posts[i].User_ID)) {
                        this.myPosts[counter] = this.posts[i];
                        this.getUserData(this.posts[i].User_ID);
                        // If this.posts[i].Image is set.
                        if (this.posts[i].Image !== undefined) {
                            this.getPostImage(id, this.posts[i].Image, counter);
                        }
                        counter++;
                    }
                }
                console.log(this.posts);
            });
        });
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
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map