(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-gym-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym/gym.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app > \n  <ion-content overflow-scroll=\"true\">\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n      <ion-content>\n        <ion-list>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/profile\">Profile</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gymmembers/{{gymID}}\">Members</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n                \n    <div id=\"main\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n        </ion-toolbar>\n      </ion-header>\n    </div> \n\n    <div class=\"profileImage\">\n      <div *ngIf=\"imageReady\">\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\"></div>\n      </div>\n      <ion-card-header>\n          <ion-card-title> {{ name }}</ion-card-title>\n          <ion-card-subtitle> {{ address }} - {{ phone }} <br> {{ city }}, {{ state }} </ion-card-subtitle>\n      </ion-card-header>\n    </div>\n    <div class=\"navbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button href=\"user/friends\" class=\"nav\" expand=\"full\" color=\"lightred\">Friends</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button href=\"user/feed\"  class=\"darkred\">Feed</ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"notMember\">\n            <ion-button (click)=\"becomeMember()\"  class=\"darkred\">Add Gym</ion-button>\n          </ion-col>\n          <ion-col *ngIf=\"!notMember\">\n            <ion-button (click)=\"removeMember()\"  class=\"darkred\">Remove Gym</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n    <main class=\"mainContent\">\n      <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n        <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n        <ion-button (click)=\"selectPostSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n        <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n        <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n          Post\n        </ion-button>\n      </form>\n      <div>\n        <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n          <header class=\"post-header\" *ngIf=post.Image>\n            <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n            <div class=\"text-bg\" >\n              <p class=\"time\">{{post.TimeCreated}}</p>\n              <p class=\"name\">{{post.Data.name}}</p>\n            </div>\n          </header>\n          <div *ngIf=!post.Image class=\"no-image-text\">\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.name}}</p>\n          </div>\n          <p class=\"post-text\">{{post.Data.txt}}</p>\n          <footer>\n            <div class=\"like\" (click)=\"likeCtrl(post.index)\" [ngClass]=\"{'active': post.likeFlag}\">\n              <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n              <span *ngIf=post.likesFlag class=\"like-count\">{{post.likeCount}}</span>\n            </div>\n            <div class=\"comment\" (click)=\"commentCtrl(post.index)\"  [ngClass]=\"{'has-comments': post.commentsFlag, 'active': post.commentFlag}\">\n              <ion-img src=\"../../assets/comment.png\"></ion-img>\n              <span *ngIf=post.commentsFlag class=\"comment-count\">{{post.commentCount}}</span>\n            </div>\n            <div class=\"comment-section\" *ngIf=post.commentFlag>\n              <ion-card *ngFor =\"let comment of post.Comments\">\n                <div class=\"no-image-text\">\n                  <p class=\"time\">{{comment.timeCreated}}</p>\n                  <p class=\"name\">{{comment.name}}</p>\n                </div>\n                <p class=\"post-text\">{{comment.data.txt}}</p>\n              </ion-card>\n              <form (ngSubmit)=\"createComment(post.index)\">\n                <ion-textarea placeholder=\"Write a comment...\" [(ngModel)]=\"commentData.txt\" name=\"txt\"></ion-textarea>\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n                  Comment\n                </ion-button>\n              </form>\n            </div>\n          </footer>\n        </ion-card> \n      </div>\n    </main>\n  </ion-content>\n</ion-app>\n\n"

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

module.exports = ".menu-content {\n  --background-color: #f00;\n}\n\n.profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  position: relative;\n}\n\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\n/*\n@media only screen and (max-width: 400px){\n  .nav{\n    width: 23.7%;\n  }\n}*/\n\n.post {\n  padding: 0px 20px 10px 20px;\n}\n\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.post .no-image-text {\n  margin-top: 15px;\n}\n\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n  color: white;\n}\n\n.post p.time {\n  font-size: 10px;\n}\n\n.post p.name {\n  font-size: 16px;\n}\n\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: relative;\n}\n\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .like .like-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n  position: relative;\n}\n\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment.has-comments {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment .comment-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment-section ion-card {\n  padding: 5px 20px;\n}\n\n.post .comment-section ion-textarea {\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.navbar {\n  width: 100%;\n}\n\n.navbar ion-col {\n  width: 33%;\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.navbar ion-col:first-of-type {\n  padding-left: 0px;\n}\n\n.navbar ion-col.gym-admin {\n  width: 100%;\n}\n\n.navbar ion-col ion-button {\n  width: 100%;\n}\n\np {\n  color: white;\n}\n\n.hide {\n  display: none;\n}\n\nion-textarea {\n  background: #fff;\n  padding: 10px;\n  color: #000 !important;\n}\n\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW0vZ3ltLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltL2d5bS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNETjs7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRE47O0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE9BO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSkY7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7Ozs7O0VBQUE7O0FBUUE7RUFDRSwyQkFBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFVJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7QUNUTjs7QURXSTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDVE47O0FEZUU7RUFDRSxnQkFBQTtBQ2JKOztBRGdCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZEo7O0FEbUJFO0VBQ0UsZUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxlQUFBO0FDbEJKOztBRG9CRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRHVCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNyQko7O0FEdUJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDckJOOztBRHVCSTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3JCTjs7QUR5QkU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN2Qko7O0FEeUJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDdkJOOztBRHlCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ3ZCTjs7QUR5Qkk7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUN2Qk47O0FENEJJO0VBQ0UsaUJBQUE7QUMxQk47O0FENEJJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDMUJOOztBRCtCQztFQUNDLFdBQUE7QUM1QkY7O0FENkJFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzNCSjs7QUQ0Qkk7RUFDRSxpQkFBQTtBQzFCTjs7QUQ0Qkk7RUFDRSxXQUFBO0FDMUJOOztBRDRCSTtFQUNFLFdBQUE7QUMxQk47O0FEZ0NBO0VBQ0UsWUFBQTtBQzdCRjs7QURnQ0E7RUFDRSxhQUFBO0FDN0JGOztBRGdDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDN0JGOztBRCtCQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQzVCRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2d5bS9neW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgXG4gIC5pbWFnZUJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIH1cblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcHJvZmlsZVBob3RvMi5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuXG4ucHJvZmlsZUltYWdlMyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIFxuICBpb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi8qXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgLm5hdntcbiAgICB3aWR0aDogMjMuNyU7XG4gIH1cbn0qL1xuXG5cbi5wb3N0IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xuIFxuICAucG9zdC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgIFxuICAgIC5pbm5lci1iZyB7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMHB4O1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgXG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAudGV4dC1iZyB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNjEpO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IC0xMDAlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuIFxuICAgIH1cbiAgfVxuICBcbiBcbiAgLm5vLWltYWdlLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbiBcbiAgcCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiBcbiAgcC50aW1lIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gXG4gIH1cbiAgcC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgcC5wb3N0LXRleHQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICB9XG4gXG4gIFxuICAvL0ljb25zXG4gIC5saWtlIHtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgLmxpa2UtY291bnQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDgsMzIsMzksIDAuOTkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuIFxuICAuY29tbWVudCB7XG4gICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XG4gICAgfVxuICAgICYuaGFzLWNvbW1lbnRzIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgLmNvbW1lbnQtY291bnQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDgsMzIsMzksIDAuOTkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgcmlnaHQ6IDVweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfSAgXG4gXG4gIC5jb21tZW50LXNlY3Rpb24ge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIH1cbiAgICBpb24tdGV4dGFyZWEge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIH1cbiB9XG5cbiAubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGlvbi1jb2wge1xuICAgIHdpZHRoOiAzMyU7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgICAmLmd5bS1hZG1pbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ucG9zdC1iZyB7XG4gbWluLWhlaWdodDogMjAwcHg7XG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufSIsIi5tZW51LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMDA7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSAuaW1hZ2VCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcHJvZmlsZVBob3RvMi5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgLm5hdntcbiAgICB3aWR0aDogMjMuNyU7XG4gIH1cbn0qL1xuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciAuaW5uZXItYmcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAwO1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIC50ZXh0LWJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4ucG9zdCAubm8taW1hZ2UtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucG9zdCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnBvc3QgcC50aW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBvc3QgcC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBvc3QgcC5wb3N0LXRleHQge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5wb3N0IC5saWtlIHtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgb3BhY2l0eTogMC42O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLmxpa2UuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmxpa2UgLmxpa2UtY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMzIsIDM5LCAwLjk5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvc3QgLmNvbW1lbnQge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLmNvbW1lbnQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmNvbW1lbnQuaGFzLWNvbW1lbnRzIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmNvbW1lbnQgLmNvbW1lbnQtY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMzIsIDM5LCAwLjk5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvc3QgLmNvbW1lbnQtc2VjdGlvbiBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLnBvc3QgLmNvbW1lbnQtc2VjdGlvbiBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYXZiYXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXZiYXIgaW9uLWNvbCB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5uYXZiYXIgaW9uLWNvbDpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4ubmF2YmFyIGlvbi1jb2wuZ3ltLWFkbWluIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyIGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3N0LWJnIHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");













var GymPage = /** @class */ (function () {
    function GymPage(auth, db, afAuth, storage, camera, sanitizer, actionSheetController, webview, router, route, dataService, postCrudService) {
        this.auth = auth;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.actionSheetController = actionSheetController;
        this.webview = webview;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.postCrudService = postCrudService;
        this.image = null;
        this.posts = {};
        this.myPosts = [];
        this.friends = [];
        this.postData = {};
        this.commentData = {};
        this.months = [];
        this.minutes = [];
        this.gymMembers = [];
        this.gyms = {};
        this.dataReady = false;
        this.imageReady = false;
        this.detailsFlag = false;
        this.notMember = false;
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
    }
    GymPage.prototype.ngOnInit = function () {
        this.gymID = this.route.snapshot.params.id; // '9WkemgxIr047EjC8y7C5';
        this.getGymData(this.gymID);
        this.getProfileImage(this.gymID);
        this.getPosts();
        this.getGymMembers();
    };
    GymPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    GymPage.prototype.getGymData = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var gymData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.collection('gyms')
                            .doc(id)
                            .ref
                            .get().then(function (doc) {
                            if (doc.exists) {
                                var gymData_1 = doc.data();
                                return gymData_1;
                            }
                            else {
                                console.log('No such document!');
                            }
                        })];
                    case 1:
                        gymData = _a.sent();
                        this.name = gymData.name;
                        this.address = gymData.address;
                        this.city = gymData.city;
                        this.state = gymData.state;
                        this.phone = gymData.phone;
                        this.dataReady = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    GymPage.prototype.selectSource = function () {
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
    GymPage.prototype.captureImage = function (sourceType) {
        var _this = this;
        var storageRef = null;
        var id = this.gymID; // '9WkemgxIr047EjC8y7C5';
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
            _this.uploadImage(_this.profileImage, 'profileImage');
        });
    };
    GymPage.prototype.uploadImage = function (imageURI, imageName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = _this.gymID;
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
    GymPage.prototype.encodeImageUri = function (imageUri, callback) {
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
    GymPage.prototype.getProfileImage = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, profileImage;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ref = this.storage.ref(id + '/image/profileImage');
                profileImage = ref.getDownloadURL();
                profileImage.subscribe(function (result) {
                    _this.profileImage = result;
                    _this.imageReady = true;
                });
                return [2 /*return*/];
            });
        });
    };
    GymPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.postCrudService.readGymPosts().subscribe(function (data) {
                    _this.posts = data.map(function (e) {
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
                        return {
                            isEdit: false,
                            id: e.payload.doc.id,
                            gym_id: e.payload.doc.data()['gym_id'],
                            TimeCreated: timeFormated,
                            Data: e.payload.doc.data()["data"],
                            Image: e.payload.doc.data()["image"],
                            Likes: e.payload.doc.data()["Likes"],
                            Comments: e.payload.doc.data()["Comments"]
                        };
                    });
                    var postsLength = Object.keys(_this.posts).length;
                    var counter = 0;
                    for (var i = 0; i < postsLength; i++) {
                        var likeFlag = 0;
                        if (_this.posts[i].gym_id === _this.gymID) {
                            if (_this.posts[i].Likes) {
                                for (var n = 0; n < _this.posts[i].Likes.length; n++) {
                                    if (_this.posts[i].Likes[n] === _this.gymID) {
                                        likeFlag = 1;
                                    }
                                }
                            }
                            _this.myPosts[counter] = _this.posts[i];
                            _this.myPosts[counter]['commentFlag'] = false;
                            _this.myPosts[counter]['commentsFlag'] = false;
                            if (likeFlag) {
                                _this.myPosts[counter]['likeFlag'] = true;
                            }
                            else {
                                _this.myPosts[counter]['likeFlag'] = false;
                            }
                            _this.myPosts[counter]['index'] = counter;
                            if (_this.posts[i].Likes) {
                                if (_this.posts[i].Likes.length > 0) {
                                    _this.myPosts[counter]['likeCount'] = _this.posts[i].Likes.length;
                                    _this.myPosts[counter]['likesFlag'] = true;
                                }
                            }
                            if (_this.posts[i].Comments) {
                                if (_this.posts[i].Comments.length > 0) {
                                    _this.myPosts[counter]['commentCount'] = _this.posts[i].Comments.length;
                                    _this.myPosts[counter]['commentsFlag'] = true;
                                }
                            }
                            if (_this.createCommentFlag) {
                                _this.myPosts[_this.createCommentIndex].commentFlag = true;
                            }
                            _this.getUserData(_this.posts[i].id);
                            // If this.posts[i].Image is set.
                            if (_this.posts[i].Image !== undefined) {
                                _this.getGymPostImage(_this.posts[i].User_ID, _this.posts[i].Image, counter);
                            }
                            counter++;
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    GymPage.prototype.getUserData = function (id) {
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
                                console.log('No such document!');
                            }
                        })];
                    case 1:
                        userData = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymPage.prototype.getGymPostImage = function (id, imageID, counter) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ref, profileImage;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                ref = this.storage.ref(id + '/image/' + imageID);
                profileImage = ref.getDownloadURL();
                profileImage.subscribe(function (result) {
                    _this.myPosts[counter].Image = result;
                    return result;
                });
                return [2 /*return*/];
            });
        });
    };
    GymPage.prototype.commentCtrl = function (index) {
        if (this.myPosts[index].commentFlag === false) {
            this.myPosts[index].commentFlag = true;
        }
        else {
            this.myPosts[index].commentFlag = false;
        }
    };
    GymPage.prototype.likeCtrl = function (index) {
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
    };
    GymPage.prototype.addLike = function (postID) {
        var id = this.gymID;
        this.postCrudService.addGymLike(postID, id).then(function (resp) {
            // console.log(resp);
        }).catch(function (error) {
            // console.log(error);
        });
    };
    GymPage.prototype.removeLike = function (postID) {
        var id = this.gymID;
        this.postCrudService.removeGymLike(postID, id).then(function (resp) {
            // console.log(resp);
        }).catch(function (error) {
            // console.log(error);
        });
    };
    GymPage.prototype.createComment = function (index) {
        this.createCommentFlag = true;
        this.createCommentIndex = index;
        var dateTime = new Date();
        var hours = dateTime.getHours();
        var minutes = dateTime.getMinutes();
        if (hours > 12) {
            hours = hours - 12;
        }
        if (minutes < 10) {
            minutes = this.minutes[minutes - 1];
        }
        var timeFormated = this.months[dateTime.getMonth() - 1] + ' '
            + dateTime.getDate() + ' at ' + hours + ':' + minutes;
        var id = this.gymID;
        var record = {};
        record['user_id'] = id;
        record['name'] = this.name;
        record['timeCreated'] = timeFormated;
        record['data'] = this.commentData;
        this.commentData = {};
        if (this.imageID !== undefined) {
            record['image'] = this.imageID;
        }
        this.postCrudService.addGymComment(this.myPosts[index].id, record).then(function (resp) {
            // console.log(resp);
        })
            .catch(function (error) {
            // console.log(error);
        });
    };
    GymPage.prototype.togglePost = function () {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    };
    GymPage.prototype.createPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dateTime, id, record;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                dateTime = new Date().toISOString();
                id = this.gymID;
                record = {};
                record['gym_id'] = id;
                this.postData['name'] = this.name;
                record['timeCreated'] = dateTime;
                record['data'] = this.postData;
                this.postData = {};
                if (this.imageID !== undefined) {
                    record['image'] = this.imageID;
                }
                this.postCrudService.createGymPost(record).then(function (resp) {
                    // console.log(resp);
                })
                    .catch(function (error) {
                    // console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    GymPage.prototype.getGymMembers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, userID;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.gymID;
                        userID = this.afAuth.auth.currentUser.uid;
                        return [4 /*yield*/, this.postCrudService.readGymMembersIds(id).subscribe(function (data) {
                                _this.gymMembers = data.payload.data()['Members'];
                                // this.getUserData();
                                var foundFlag = 0;
                                var membersLength = Object.keys(_this.gymMembers).length;
                                for (var i = 0; i < membersLength; i++) {
                                    console.log(_this.gymMembers[i]);
                                    if (_this.gymMembers[i] === userID) {
                                        foundFlag = 1;
                                    }
                                }
                                if (!foundFlag) {
                                    _this.notMember = true;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymPage.prototype.becomeMember = function () {
        var _this = this;
        var callFlag = 0;
        var userID = this.afAuth.auth.currentUser.uid;
        // Check if member of another gym.. and remove it if they are...
        this.postCrudService.readGymMembers().subscribe(function (data) {
            // Simple hack to stop running in infinite loop
            if (callFlag > 0) {
                return;
            }
            callFlag++;
            _this.gyms = data.map(function (e) {
                return {
                    id: e.payload.doc.id,
                    Members: e.payload.doc.data()["Members"],
                };
            });
            var gymsLength = Object.keys(_this.gyms).length;
            for (var i = 0; i < gymsLength; i++) {
                if (_this.gyms[i].Members.includes(userID)) {
                    _this.removeThisMember(_this.gyms[i].id, userID);
                }
            }
            _this.postCrudService.addGymMember(_this.gymID, userID);
            _this.notMember = false;
        });
    };
    GymPage.prototype.removeMember = function () {
        var id = this.gymID;
        var userID = this.afAuth.auth.currentUser.uid;
        this.postCrudService.removeGymMember(id, userID);
        this.notMember = true;
    };
    GymPage.prototype.removeThisMember = function (gymID, memberID) {
        this.postCrudService.removeGymMember(gymID, memberID);
    };
    GymPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_12__["PostCrudService"] }
    ]; };
    GymPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./gym.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym/gym.page.html"),
            styles: [__webpack_require__(/*! ./gym.page.scss */ "./src/app/pages/gym/gym.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ActionSheetController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__["WebView"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_12__["PostCrudService"]])
    ], GymPage);
    return GymPage;
}()); // end ProfilePage Class



/***/ })

}]);
//# sourceMappingURL=pages-gym-gym-module-es5.js.map