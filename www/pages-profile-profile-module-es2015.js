(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"dataReady\">\n  <ion-content overflow-scroll=\"true\">\n    <!--Navigation Bar-->\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n      <ion-content>\n        <ion-list>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/friends\">Friends</ion-button>\n          </ion-item>\n          <ion-item *ngIf=\"gymMemberFlag\">\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym/{{gymAdminID}}\">Gym</ion-button>\n          </ion-item>\n          <ion-item *ngIf=\"gymAdminFlag\">\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym-admin/{{gymAdminID}}\">Gym</ion-button>\n          </ion-item>\n          <ion-item *ngIf=\"noGymFlag\">\n            <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym-listings\">Search Gyms</ion-button>\n          </ion-item>\n          <ion-item>\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n              <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n            </ion-button>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n                \n    <div id=\"main\">\n      <ion-header>\n        <ion-toolbar>\n          <ion-buttons slot=\"end\">\n            <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <a href=\"user/feed\">\n          <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n          </a>\n        </ion-toolbar>\n      </ion-header>\n    </div> \n    \n    <div class=\"profileImage\">\n      <div *ngIf=\"imageReady\">\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\"></div>\n      </div>\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"md-create\"></ion-icon></ion-button>  \n      <ion-card-header>\n          <ion-card-title> {{ fname }} {{ lname }}</ion-card-title>\n          <ion-card-subtitle *ngIf=\"gymFlag\"> {{ gymData }} </ion-card-subtitle>\n      </ion-card-header>\n    </div>\n    <div class=\"navbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button href=\"user/friends\" class=\"nav\" expand=\"full\" color=\"lightred\">Friends</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button href=\"user/feed\"  class=\"darkred\">Feed</ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <main class=\"mainContent\">\n      <div *ngIf=\"postImageReady\">\n        <div class=\"img-container\">\n          <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+postImage+')'}\"></div>\n        </div>\n      </div>\n      <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n        <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n        <ion-button (click)=\"selectPostSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n        <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n        <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n          Post\n        </ion-button>\n      </form>\n      <div>\n        <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n          <header class=\"post-header\" *ngIf=post.Image>\n            <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n            <div class=\"text-bg\" >\n              <p class=\"time\">{{post.TimeCreated}}</p>\n              <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n            </div>\n          </header>\n          <div *ngIf=!post.Image class=\"no-image-text\">\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n          </div>\n          <p class=\"post-text\">{{post.Data.txt}}</p>\n          <footer>\n            <div class=\"like\" (click)=\"likeCtrl(post.index)\" [ngClass]=\"{'active': post.likeFlag}\">\n              <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n              <span *ngIf=post.likesFlag class=\"like-count\">{{post.likeCount}}</span>\n            </div>\n            <div class=\"comment\" (click)=\"commentCtrl(post.index)\"  [ngClass]=\"{'has-comments': post.commentsFlag, 'active': post.commentFlag}\">\n              <ion-img src=\"../../assets/comment.png\"></ion-img>\n              <span *ngIf=post.commentsFlag class=\"comment-count\">{{post.commentCount}}</span>\n            </div>\n\n            <div class=\"comment-section\" *ngIf=post.commentFlag>\n              <ion-card *ngFor =\"let comment of post.Comments\">\n                <div class=\"no-image-text\">\n                  <p class=\"time\">{{comment.timeCreated}}</p>\n                  <p class=\"name\">{{comment.fname}} {{comment.lname}}</p>\n                </div>\n                <p class=\"post-text\">{{comment.data.txt}}</p>\n              </ion-card>\n              <form (ngSubmit)=\"createComment(post.index)\">\n                <ion-textarea placeholder=\"Write a comment...\" [(ngModel)]=\"commentData.txt\" name=\"txt\"></ion-textarea>\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n                  Comment\n                </ion-button>\n              </form>\n            </div>\n          </footer>\n        </ion-card> \n      </div>\n    </main>\n  </ion-content>\n</ion-app>\n\n"

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

module.exports = ".menu-content {\n  --background-color: #f00;\n}\n\n.profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  position: relative;\n}\n\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\n/*\n@media only screen and (max-width: 400px){\n  .nav{\n    width: 23.7%;\n  }\n}*/\n\np {\n  color: white;\n}\n\n.hide {\n  display: none;\n}\n\nion-textarea {\n  background: #fff;\n  padding: 10px;\n  color: #000 !important;\n}\n\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.post {\n  padding: 0px 20px 10px 20px;\n}\n\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.post .no-image-text {\n  margin-top: 15px;\n}\n\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n\n.post p.time {\n  font-size: 10px;\n}\n\n.post p.name {\n  font-size: 16px;\n}\n\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: relative;\n}\n\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .like .like-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n  position: relative;\n}\n\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment.has-comments {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment .comment-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment-section ion-card {\n  padding: 5px 20px;\n}\n\n.post .comment-section ion-textarea {\n  padding: 5px;\n  margin-top: 10px;\n}\n\n.navbar {\n  width: 100%;\n}\n\n.navbar ion-col {\n  width: 33%;\n  margin-top: 0px;\n  padding-top: 0px;\n}\n\n.navbar ion-col:first-of-type {\n  padding-left: 0px;\n}\n\n.navbar ion-col.gym-admin {\n  width: 100%;\n}\n\n.navbar ion-col ion-button {\n  width: 100%;\n}\n\n#main {\n  padding-top: 10px;\n}\n\n.mainContent {\n  position: relative;\n}\n\n.mainContent .img-container {\n  position: relative;\n  max-height: 50%;\n  min-height: 300px;\n}\n\n@media (min-width: 500px) {\n  .mainContent .img-container {\n    min-height: 500px;\n  }\n}\n\n.mainContent .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBSjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNESjs7QURHSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDRE47O0FER0k7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0ROOztBREtFO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUNISjs7QURPQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ0pGOztBRFFBO0VBQ0Usb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0xGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUNMRjs7QURPRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFNBOzs7OztFQUFBOztBQU1BO0VBQ0UsWUFBQTtBQ05GOztBRFNBO0VBQ0UsYUFBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNORjs7QURRQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0xEOztBRFdBO0VBQ0MsMkJBQUE7QUNSRDs7QURVQztFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNSSDs7QURVRztFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxVQUFBO0FDVEw7O0FEV0c7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ1RMOztBRGVDO0VBQ0UsZ0JBQUE7QUNiSDs7QURnQkM7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDZEg7O0FEbUJDO0VBQ0UsZUFBQTtBQ2pCSDs7QURvQkM7RUFDRSxlQUFBO0FDbEJIOztBRG9CQztFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDbEJIOztBRHVCQztFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNyQkg7O0FEdUJHO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDckJMOztBRHVCRztFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3JCTDs7QUR5QkM7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN2Qkg7O0FEeUJHO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDdkJMOztBRHlCRztFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ3ZCTDs7QUR5Qkc7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUN2Qkw7O0FENEJHO0VBQ0UsaUJBQUE7QUMxQkw7O0FENEJHO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDMUJMOztBRGdDQTtFQUNFLFdBQUE7QUM3QkY7O0FEOEJFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVCSjs7QUQ2Qkk7RUFDRSxpQkFBQTtBQzNCTjs7QUQ2Qkk7RUFDRSxXQUFBO0FDM0JOOztBRDZCSTtFQUNFLFdBQUE7QUMzQk47O0FEaUNBO0VBQ0UsaUJBQUE7QUM5QkY7O0FEaUNBO0VBQ0Usa0JBQUE7QUM5QkY7O0FEK0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUM3Qko7O0FEOEJJO0VBSkY7SUFLSSxpQkFBQTtFQzNCSjtBQUNGOztBRDZCRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUMzQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcbn1cblxuLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgXG4gIC5pbWFnZUJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIH1cblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICBpb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDBweDtcbiAgfVxufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcHJvZmlsZVBob3RvMi5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6d2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG4gIH1cblxuXG4ucHJvZmlsZUltYWdlMyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG4gIFxuICBpb24tbGlzdCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbi8qXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgLm5hdntcbiAgICB3aWR0aDogMjMuNyU7XG4gIH1cbn0qL1xucHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ucG9zdC1iZyB7XG4gbWluLWhlaWdodDogMjAwcHg7XG4gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG5cblxuXG4ucG9zdCB7XG4gcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xuXG4gLnBvc3QtaGVhZGVyIHtcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIGhlaWdodDogMjAwcHg7XG4gICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICAgXG4gICAuaW5uZXItYmcge1xuICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICB0b3A6IDBweDtcbiAgICAgbGVmdDogMHB4O1xuICAgICBcbiAgICAgei1pbmRleDogMDtcbiAgIH1cbiAgIC50ZXh0LWJnIHtcbiAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYxKTtcbiAgICAgcGFkZGluZzogMTBweDtcbiAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIG1hcmdpbi10b3A6IC0xMDAlO1xuICAgICB6LWluZGV4OiAxMDtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBib3R0b206IDA7XG4gICAgIGxlZnQ6IDA7XG5cbiAgIH1cbiB9XG4gXG5cbiAubm8taW1hZ2UtdGV4dCB7XG4gICBtYXJnaW4tdG9wOiAxNXB4O1xuIH1cblxuIHAge1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIHBhZGRpbmc6IDBweDtcbiAgIG1hcmdpbjogMHB4O1xuIH1cblxuIFxuXG4gcC50aW1lIHtcbiAgIGZvbnQtc2l6ZTogMTBweDtcblxuIH1cbiBwLm5hbWUge1xuICAgZm9udC1zaXplOiAxNnB4O1xuIH1cbiBwLnBvc3QtdGV4dCB7XG4gICBtYXJnaW46IDEwcHggMHB4O1xuICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiB9XG5cbiBcbiAvL0ljb25zXG4gLmxpa2Uge1xuICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICBvcGFjaXR5OiAwLjY7XG4gICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICYuYWN0aXZlIHtcbiAgICAgb3BhY2l0eTogMTtcbiAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XG4gICB9XG4gICAubGlrZS1jb3VudCB7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMjA4LDMyLDM5LCAwLjk5KTtcbiAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgbWFyZ2luOiAwcHg7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgYm90dG9tOiA1cHg7XG4gICAgIHJpZ2h0OiA1cHg7XG4gICAgIGNvbG9yOiAjZmZmO1xuICAgfVxuIH1cblxuIC5jb21tZW50IHtcbiAgIG1heC13aWR0aDogNjBweDtcbiAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgb3BhY2l0eTogMC42O1xuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICYuYWN0aXZlIHtcbiAgICAgb3BhY2l0eTogMTtcbiAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7XG4gICB9XG4gICAmLmhhcy1jb21tZW50cyB7XG4gICAgIG9wYWNpdHk6IDE7XG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgfVxuICAgLmNvbW1lbnQtY291bnQge1xuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwzMiwzOSwgMC45OSk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgIG1hcmdpbjogMHB4O1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvdHRvbTogNXB4O1xuICAgICByaWdodDogNXB4O1xuICAgICBjb2xvcjogI2ZmZjtcbiAgIH1cbiB9ICBcblxuIC5jb21tZW50LXNlY3Rpb24ge1xuICAgaW9uLWNhcmQge1xuICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgIH1cbiAgIGlvbi10ZXh0YXJlYSB7XG4gICAgIHBhZGRpbmc6IDVweDtcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgIH1cbiB9XG59XG5cblxuLm5hdmJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBpb24tY29sIHtcbiAgICB3aWR0aDogMzMlO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICB9XG4gICAgJi5neW0tYWRtaW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cblxuI21haW4ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpe1xuICAgICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgfVxuICB9XG4gIC5pbWFnZUJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIH1cbn0iLCIubWVudS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9maWxlSW1hZ2UgLmltYWdlQmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDBweDtcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Byb2ZpbGVQaG90bzIuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDIzLjclO1xuICB9XG59Ki9cbnAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLnBvc3QtYmcge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciAuaW5uZXItYmcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiAwO1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIC50ZXh0LWJnIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYxKTtcbiAgcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IC0xMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4ucG9zdCAubm8taW1hZ2UtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucG9zdCBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5wb3N0IHAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wb3N0IHAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wb3N0IHAucG9zdC10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ucG9zdCAubGlrZSB7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5saWtlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5saWtlIC5saWtlLWNvdW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDMyLCAzOSwgMC45OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb3N0IC5jb21tZW50IHtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgb3BhY2l0eTogMC42O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5jb21tZW50LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5jb21tZW50Lmhhcy1jb21tZW50cyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5jb21tZW50IC5jb21tZW50LWNvdW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDMyLCAzOSwgMC45OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb3N0IC5jb21tZW50LXNlY3Rpb24gaW9uLWNhcmQge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbi5wb3N0IC5jb21tZW50LXNlY3Rpb24gaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmF2YmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmF2YmFyIGlvbi1jb2wge1xuICB3aWR0aDogMzMlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ubmF2YmFyIGlvbi1jb2w6Zmlyc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLm5hdmJhciBpb24tY29sLmd5bS1hZG1pbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdmJhciBpb24tY29sIGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI21haW4ge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLm1haW5Db250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5Db250ZW50IC5pbWctY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5tYWluQ29udGVudCAuaW1nLWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gIH1cbn1cbi5tYWluQ29udGVudCAuaW1hZ2VCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn0iXX0= */"

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
/* harmony import */ var src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");











let ProfilePage = class ProfilePage {
    constructor(auth, db, afAuth, storage, camera, sanitizer, actionSheetController, webview, postCrudService) {
        this.auth = auth;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.actionSheetController = actionSheetController;
        this.webview = webview;
        this.postCrudService = postCrudService;
        this.image = null;
        this.friends = [];
        this.postData = {};
        this.commentData = {};
        this.posts = {};
        this.myPosts = [];
        this.months = [];
        this.minutes = [];
        const id = this.afAuth.auth.currentUser.uid;
        this.dataReady = false;
        this.imageReady = false;
        this.gymAdminFlag = false;
        this.gymMemberFlag = false;
        this.noGymFlag = false;
        this.postImageReady = false;
    }
    ngOnInit() {
        const id = this.afAuth.auth.currentUser.uid;
        this.getCurrentUserData(id);
        this.getProfileImage(id);
        this.getGymMembers();
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
        this.getFriends();
    }
    signOut() {
        this.auth.signOut();
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
                    console.log('No such document!');
                }
            });
        });
    }
    getCurrentUserData(id) {
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
            this.uploadImage(this.profileImage, 'profileImage');
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
    getProfileImage(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const ref = this.storage.ref(id + '/image/profileImage');
            const profileImage = ref.getDownloadURL();
            profileImage.subscribe(result => {
                this.profileImage = result;
                this.imageReady = true;
            });
        });
    }
    getGymMembers() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            this.gymFlag = false;
            yield this.db.collection('gymMembers').ref.get()
                .then(querySnapshot => {
                querySnapshot.docs.forEach(doc => {
                    if (doc.data().Members.includes(id)) {
                        this.gymFlag = true;
                        this.gymID = doc.data().gymID;
                    }
                });
                if (this.gymFlag) {
                    this.getGymData();
                }
                else {
                    this.noGymFlag = true;
                }
            });
        });
    }
    getGymData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = this.afAuth.auth.currentUser.uid;
            const userData = yield this.db.collection('gyms')
                .doc(this.gymID)
                .ref
                .get().then(doc => {
                if (doc.exists) {
                    this.gymData = doc.data().name;
                    this.gymAdminID = doc.id;
                    if (doc.data().admins.includes(id)) {
                        this.gymAdminFlag = true;
                    }
                    else {
                        this.gymMemberFlag = true;
                    }
                }
                else {
                    this.gymFlag = false;
                    this.noGymFlag = true;
                }
            });
        });
    }
    // Post Functions
    togglePost() {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    }
    // Image Handlers
    selectPostSource() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Select Image Source',
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.capturePostImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.capturePostImage(this.camera.PictureSourceType.CAMERA);
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
    capturePostImage(sourceType) {
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
            this.postImage = this.webview.convertFileSrc(imagePath);
            console.log('capturePostImage');
            console.log(this.postImage);
            this.postImageReady = true;
            // Upload image
            this.imageID = this.makeid(60);
            // console.log(this.imageID);
            this.uploadPostImage(this.postImage, this.imageID);
        });
    }
    uploadPostImage(imageURI, imageName) {
        return new Promise((resolve, reject) => {
            const id = this.afAuth.auth.currentUser.uid;
            let storageRef = this.storage.ref(id);
            let imageRef = storageRef.child('image').child(imageName);
            this.encodeImageUri(imageURI, function (image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                    resolve(snapshot.downloadURL);
                    this.postImage = snapshot.downloadURL;
                    console.log('uploadPostImage');
                    console.log(this.postImage);
                }, err => {
                    reject(err);
                });
            });
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
                // this.postImage = result;
                // this.postImageReady = true;
                // console.log('counter', counter);
                // console.log(result);
                this.myPosts[counter].Image = result;
                return result;
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
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
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
}; // end ProfilePage Class
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
    { type: src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__["PostCrudService"] }
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
        _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
        src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__["PostCrudService"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map