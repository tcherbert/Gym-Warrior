(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-app>\n    <ion-content overflow-scroll=\"true\">\n\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n        <ion-content>\n          <ion-list>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n            </ion-item>\n            <ion-item>\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n            </ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              Logout <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n       \n          </ion-list>\n        </ion-content>\n      </ion-menu>\n      \n      <div id=\"main\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-menu-button></ion-menu-button>\n            </ion-buttons>\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </ion-toolbar>\n        </ion-header>\n      </div>   \n\n<main>\n    <div>\n      <ion-button class=\"nav\" href=\"user/profile\" color=\"lightred\">profile</ion-button>\n      <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n      <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n      <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n    </div>\n    \n    <div class=\"profileImage\" *ngIf=\"togglePostFlag\">\n      <div *ngIf=\"imageReady\">\n        <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n          <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n        </div>\n      </div>\n    </div>\n\n    <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n        Post\n      </ion-button>\n    </form>\n\n    <div>\n      <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n        <header class=\"post-header\" *ngIf=post.Image>\n          <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n          <div class=\"text-bg\" >\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n          </div>\n        </header>\n        <div *ngIf=!post.Image class=\"no-image-text\">\n          <p class=\"time\">{{post.TimeCreated}}</p>\n          <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n        </div>\n        <p class=\"post-text\">{{post.Data.txt}}</p>\n        <!-- Leaving this here as may use in the future for use to store likes etc.. -->\n        <!-- <p>{{post.User_ID}}</p> -->\n        <footer>\n          <div class=\"like\" (click)=\"likeCtrl(post.index)\" [ngClass]=\"{'active': post.likeFlag}\">\n            <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n            <span *ngIf=post.likesFlag class=\"like-count\">{{post.likeCount}}</span>\n          </div>\n          <div class=\"comment\" (click)=\"commentCtrl(post.index)\"  [ngClass]=\"{'has-comments': post.commentsFlag, 'active': post.commentFlag}\">\n            <ion-img src=\"../../assets/comment.png\"></ion-img>\n            <span *ngIf=post.commentsFlag class=\"comment-count\">{{post.commentCount}}</span>\n          </div>\n\n          <div class=\"comment-section\" *ngIf=post.commentFlag>\n            <ion-card *ngFor =\"let comment of post.Comments\">\n              <div class=\"no-image-text\">\n                <p class=\"time\">{{comment.timeCreated}}</p>\n                <p class=\"name\">{{comment.fname}} {{comment.lname}}</p>\n              </div>\n              <p class=\"post-text\">{{comment.data.txt}}</p>\n            </ion-card>\n            <form (ngSubmit)=\"createComment(post.index)\">\n              <ion-textarea placeholder=\"Write a comment...\" [(ngModel)]=\"commentData.txt\" name=\"txt\"></ion-textarea>\n              <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n                Comment\n              </ion-button>\n            </form>\n          </div>\n        </footer>\n      </ion-card> \n      \n      <!-- <ion-card class=\"profileImage2\">\n          <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n          </ion-card-content>\n        </ion-card> -->\n    </div>\n</main>\n</ion-content>\n\n</ion-app>"

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

module.exports = ".profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.profileImage > div {\n  height: 400px;\n}\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n.nav {\n  width: 24%;\n}\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\np {\n  color: white;\n  text-align: center;\n}\n.hide {\n  display: none;\n}\nion-textarea {\n  background: #fff;\n  padding: 10px;\n  color: #000 !important;\n}\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.post {\n  padding: 0px 20px 10px 20px;\n}\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.post .no-image-text {\n  margin-top: 15px;\n}\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n.post p.time {\n  font-size: 10px;\n}\n.post p.name {\n  font-size: 16px;\n}\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: relative;\n}\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n.post .like .like-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n  position: relative;\n}\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n.post .comment.has-comments {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n.post .comment .comment-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n.post .comment-section ion-card {\n  padding: 5px 20px;\n}\n.post .comment-section ion-textarea {\n  padding: 5px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDQUo7QURFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQU47QURJRTtFQUNFLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDRko7QURNQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0hGO0FETUU7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDSEo7QURNRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNISjtBREtJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDSE47QURNQztFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hIO0FET0M7RUFDRSxhQUFBO0FDSkg7QURPQztFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDSkg7QURNQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0hGO0FEU0E7RUFDRSwyQkFBQTtBQ05GO0FEUUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTko7QURRSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0FDUE47QURTSTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDUE47QURhRTtFQUNFLGdCQUFBO0FDWEo7QURjRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNaSjtBRGlCRTtFQUNFLGVBQUE7QUNmSjtBRGtCRTtFQUNFLGVBQUE7QUNoQko7QURrQkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ2hCSjtBRHFCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNuQko7QURxQkk7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUNuQk47QURxQkk7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNuQk47QUR1QkU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQko7QUR1Qkk7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUNyQk47QUR1Qkk7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUNyQk47QUR1Qkk7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNyQk47QUQwQkk7RUFDRSxpQkFBQTtBQ3hCTjtBRDBCSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ3hCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY+ZGl2IHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG4gIFxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICB9XG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuICAucHJvZmlsZUltYWdlMiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDU1JTtcblxuICB9XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDI0JTtcbiAgfVxuXG4gIC5uYXZNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBcbiAgICBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiBwe1xuICAgY29sb3I6IHdoaXRlO1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbiBcblxuIC5oaWRlIHtcbiAgIGRpc3BsYXk6IG5vbmU7XG4gfVxuXG4gaW9uLXRleHRhcmVhIHtcbiAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiB9XG4ucG9zdC1iZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4gXG5cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG5cbiAgLnBvc3QtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICBcbiAgICAuaW5uZXItYmcge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIFxuICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgLnRleHQtYmcge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYxKTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcblxuICAgIH1cbiAgfVxuICBcblxuICAubm8taW1hZ2UtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgXG5cbiAgcC50aW1lIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgfVxuICBwLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBwLnBvc3QtdGV4dCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cblxuICBcbiAgLy9JY29uc1xuICAubGlrZSB7XG4gICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgLmxpa2UtY291bnQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDgsMzIsMzksIDAuOTkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIC5jb21tZW50IHtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICAmLmhhcy1jb21tZW50cyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XG4gICAgfVxuICAgIC5jb21tZW50LWNvdW50IHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjA4LDMyLDM5LCAwLjk5KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDVweDtcbiAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH0gIFxuXG4gIC5jb21tZW50LXNlY3Rpb24ge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWEge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbn0iLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSA+IGRpdiB7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ucHJvZmlsZUltYWdlIC5pbWFnZUJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMHB4O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGVJbWFnZSBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAwcHg7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXYge1xuICB3aWR0aDogMjQlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cbi5uYXZNZW51IGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LWJnIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5wb3N0IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIgLmlubmVyLWJnIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciAudGV4dC1iZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuLnBvc3QgLm5vLWltYWdlLXRleHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBvc3QgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ucG9zdCBwLnRpbWUge1xuICBmb250LXNpemU6IDEwcHg7XG59XG4ucG9zdCBwLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucG9zdCBwLnBvc3QtdGV4dCB7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnBvc3QgLmxpa2Uge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucG9zdCAubGlrZS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucG9zdCAubGlrZSAubGlrZS1jb3VudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjA4LCAzMiwgMzksIDAuOTkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9zdCAuY29tbWVudCB7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucG9zdCAuY29tbWVudC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucG9zdCAuY29tbWVudC5oYXMtY29tbWVudHMge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ucG9zdCAuY29tbWVudCAuY29tbWVudC1jb3VudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjA4LCAzMiwgMzksIDAuOTkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9zdCAuY29tbWVudC1zZWN0aW9uIGlvbi1jYXJkIHtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4ucG9zdCAuY29tbWVudC1zZWN0aW9uIGlvbi10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"

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
        this.commentData = {};
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
            // console.log("dateTime");
            // console.log(dateTime);
            const id = this.afAuth.auth.currentUser.uid;
            let record = {};
            record['user_id'] = id;
            this.postData['fname'] = this.fname;
            this.postData['lname'] = this.lname;
            record['timeCreated'] = dateTime;
            record['data'] = this.postData;
            this.postData = {};
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
                    // console.log(e.payload.doc.data()['timeCreated']);
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
                        TimeCreated: timeFormated,
                        Likes: e.payload.doc.data()["Likes"],
                        Comments: e.payload.doc.data()["Comments"]
                    };
                });
                // Overly convoluted hack as I couldn't figure out how to query properly.
                // This will need to be fixed eventually.
                const postsLength = Object.keys(this.posts).length;
                let counter = 0;
                // console.log('this.friends');
                // console.log(this.friends);
                for (let i = 0; i < postsLength; i++) {
                    let likeFlag = 0;
                    // If only this users posts
                    // console.log(this.posts[i].User_ID);
                    // console.log(this.friends.includes(this.posts[i].User_ID));
                    if (this.posts[i].User_ID === id || this.friends.includes(this.posts[i].User_ID)) {
                        console.log(this.posts[i]);
                        if (this.posts[i].Likes) {
                            for (let n = 0; n < this.posts[i].Likes.length; n++) {
                                if (this.posts[i].Likes[n] === id) {
                                    likeFlag = 1;
                                }
                            }
                        }
                        this.myPosts[counter] = this.posts[i];
                        this.myPosts[counter]['commentFlag'] = false;
                        this.myPosts[counter]['commentsFlag'] = false;
                        if (likeFlag) {
                            this.myPosts[counter]['likeFlag'] = true;
                        }
                        else {
                            this.myPosts[counter]['likeFlag'] = false;
                        }
                        this.myPosts[counter]['index'] = counter;
                        if (this.posts[i].Likes) {
                            if (this.posts[i].Likes.length > 0) {
                                this.myPosts[counter]['likeCount'] = this.posts[i].Likes.length;
                                this.myPosts[counter]['likesFlag'] = true;
                            }
                        }
                        if (this.posts[i].Comments) {
                            if (this.posts[i].Comments.length > 0) {
                                this.myPosts[counter]['commentCount'] = this.posts[i].Comments.length;
                                this.myPosts[counter]['commentsFlag'] = true;
                            }
                        }
                        if (this.createCommentFlag) {
                            this.myPosts[this.createCommentIndex].commentFlag = true;
                        }
                        this.getUserData(this.posts[i].User_ID);
                        // If this.posts[i].Image is set.
                        if (this.posts[i].Image !== undefined) {
                            this.getPostImage(this.posts[i].User_ID, this.posts[i].Image, counter);
                        }
                        counter++;
                    }
                }
                console.log(this.posts);
            });
        });
    }
    commentCtrl(index) {
        if (this.myPosts[index].commentFlag === false) {
            this.myPosts[index].commentFlag = true;
        }
        else {
            this.myPosts[index].commentFlag = false;
        }
    }
    likeCtrl(index) {
        const id = this.afAuth.auth.currentUser.uid;
        if (this.myPosts[index].likeFlag === false) {
            this.myPosts[index].likeFlag = true;
            // Add user id to like array
            this.addLike(this.myPosts[index].id);
        }
        else {
            this.myPosts[index].likeFlag = false;
            // remove user id from like array
            this.removeLike(this.myPosts[index].id);
        }
    }
    addLike(postID) {
        const id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.addLike(postID, id).then(resp => {
            console.log(resp);
        }).catch(error => {
            // console.log(error);
        });
    }
    removeLike(postID) {
        const id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.removeLike(postID, id).then(resp => {
            console.log(resp);
        }).catch(error => {
            // console.log(error);
        });
    }
    createComment(index) {
        this.createCommentFlag = true;
        this.createCommentIndex = index;
        // console.log('createComment', this.myPosts[index].id);
        const dateTime = new Date();
        let hours = dateTime.getHours();
        let minutes = dateTime.getMinutes();
        if (hours > 12) {
            hours = hours - 12;
        }
        if (minutes < 10) {
            minutes = this.minutes[minutes - 1];
        }
        const timeFormated = this.months[dateTime.getMonth() - 1] + ' '
            + dateTime.getDate() + ' at ' + hours + ':' + minutes;
        const id = this.afAuth.auth.currentUser.uid;
        let record = {};
        record['user_id'] = id;
        record['fname'] = this.fname;
        record['lname'] = this.lname;
        record['timeCreated'] = timeFormated;
        record['data'] = this.commentData;
        this.commentData = {};
        if (this.imageID !== undefined) {
            record['image'] = this.imageID;
        }
        this.postCrudService.addComment(this.myPosts[index].id, record).then(resp => {
            // console.log(resp);
        })
            .catch(error => {
            // console.log(error);
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