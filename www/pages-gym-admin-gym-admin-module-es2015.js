(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-admin-gym-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym-admin/gym-admin.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym-admin/gym-admin.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"dataReady\">\n    <ion-content overflow-scroll=\"true\">\n  <!--Navigation Bar-->\n  <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n    <ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n            <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n              \n  <div id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n      </ion-toolbar>\n    </ion-header>\n  </div> \n  \n  <div class=\"profileImage\">\n    <div *ngIf=\"imageReady\">\n      <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n      <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n        \n        <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n      </div>\n  </div>\n    <ion-button (click)=\"selectSource()\"><ion-icon name=\"md-create\"></ion-icon></ion-button>  \n    <ion-card-header>\n        <ion-card-title> {{ name }}</ion-card-title>\n        <ion-card-subtitle> {{ city }}, {{ address }}, {{ phone }} </ion-card-subtitle>\n    </ion-card-header>\n  </div>\n  <div class=\"navbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button class=\"nav\" expand=\"full\" color=\"lightred\">About</ion-button>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button class=\"nav\" expand=\"full\" color=\"darkred\">Photos</ion-button>\n          </ion-col>\n          <!-- <ion-col class=\"ion-no-padding\">\n            <ion-button href=\"user/friends\" class=\"nav\" expand=\"full\" color=\"lightred\">Friends</ion-button>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n    </div>\n  \n  \n    <main class=\"mainContent\">\n      <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\n        <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n        <ion-button (click)=\"selectPostSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n        <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n        <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n          Post\n        </ion-button>\n      </form>\n      <div>\n        <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n          <header class=\"post-header\" *ngIf=post.Image>\n            <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n            <div class=\"text-bg\" >\n              <p class=\"time\">{{post.TimeCreated}}</p>\n              <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n            </div>\n          </header>\n          <div *ngIf=!post.Image class=\"no-image-text\">\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{post.Data.fname}} {{post.Data.lname}}</p>\n          </div>\n          <p class=\"post-text\">{{post.Data.txt}}</p>\n          <!-- Leaving this here as may use in the future for use to store likes etc.. -->\n          <!-- <p>{{post.User_ID}}</p> -->\n          <footer>\n            <div class=\"like\" (click)=\"likeCtrl(post.index)\" [ngClass]=\"{'active': post.likeFlag}\">\n              <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n              <span *ngIf=post.likesFlag class=\"like-count\">{{post.likeCount}}</span>\n            </div>\n            <div class=\"comment\" (click)=\"commentCtrl(post.index)\"  [ngClass]=\"{'has-comments': post.commentsFlag, 'active': post.commentFlag}\">\n              <ion-img src=\"../../assets/comment.png\"></ion-img>\n              <span *ngIf=post.commentsFlag class=\"comment-count\">{{post.commentCount}}</span>\n            </div>\n  \n            <div class=\"comment-section\" *ngIf=post.commentFlag>\n              <ion-card *ngFor =\"let comment of post.Comments\">\n                <div class=\"no-image-text\">\n                  <p class=\"time\">{{comment.timeCreated}}</p>\n                  <p class=\"name\">{{comment.fname}} {{comment.lname}}</p>\n                </div>\n                <p class=\"post-text\">{{comment.data.txt}}</p>\n              </ion-card>\n              <form (ngSubmit)=\"createComment(post.index)\">\n                <ion-textarea placeholder=\"Write a comment...\" [(ngModel)]=\"commentData.txt\" name=\"txt\"></ion-textarea>\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n                  Comment\n                </ion-button>\n              </form>\n            </div>\n          </footer>\n        </ion-card> \n        \n        <!-- <ion-card class=\"profileImage2\">\n            <ion-card-header>\n              <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n            </ion-card-header>\n  \n            <ion-card-content id=\"nameStatus\">\n              We just released a new class schedule! Check it out!\n            </ion-card-content>\n          </ion-card> -->\n      </div>\n      \n    </main>\n      \n \n  </ion-content>\n</ion-app>\n\n"

/***/ }),

/***/ "./src/app/pages/gym-admin/gym-admin-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/gym-admin/gym-admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: GymAdminPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymAdminPageRoutingModule", function() { return GymAdminPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gym_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym-admin.page */ "./src/app/pages/gym-admin/gym-admin.page.ts");




const routes = [
    {
        path: '',
        component: _gym_admin_page__WEBPACK_IMPORTED_MODULE_3__["GymAdminPage"]
    }
];
let GymAdminPageRoutingModule = class GymAdminPageRoutingModule {
};
GymAdminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GymAdminPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gym-admin/gym-admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/gym-admin/gym-admin.module.ts ***!
  \*****************************************************/
/*! exports provided: GymAdminPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymAdminPageModule", function() { return GymAdminPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gym_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym-admin-routing.module */ "./src/app/pages/gym-admin/gym-admin-routing.module.ts");
/* harmony import */ var _gym_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym-admin.page */ "./src/app/pages/gym-admin/gym-admin.page.ts");







let GymAdminPageModule = class GymAdminPageModule {
};
GymAdminPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gym_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["GymAdminPageRoutingModule"]
        ],
        declarations: [_gym_admin_page__WEBPACK_IMPORTED_MODULE_6__["GymAdminPage"]]
    })
], GymAdminPageModule);



/***/ }),

/***/ "./src/app/pages/gym-admin/gym-admin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/gym-admin/gym-admin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-content {\n  --background-color: #f00;\n}\n\n.profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  position: relative;\n}\n\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\n/*\n@media only screen and (max-width: 400px){\n  .nav{\n    width: 23.7%;\n  }\n}*/\n\n.post {\n  padding: 0px 20px 10px 20px;\n}\n\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.post .no-image-text {\n  margin-top: 15px;\n}\n\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n  color: white;\n}\n\n.post p.time {\n  font-size: 10px;\n}\n\n.post p.name {\n  font-size: 16px;\n}\n\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: relative;\n}\n\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .like .like-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n  position: relative;\n}\n\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment.has-comments {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment .comment-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment-section ion-card {\n  padding: 5px 20px;\n}\n\n.post .comment-section ion-textarea {\n  padding: 5px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW0tYWRtaW4vZ3ltLWFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltLWFkbWluL2d5bS1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNETjs7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRE47O0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE9BO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSkY7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7Ozs7O0VBQUE7O0FBUUE7RUFDRSwyQkFBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JKOztBRFVJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7QUNUTjs7QURXSTtFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDVE47O0FEZUU7RUFDRSxnQkFBQTtBQ2JKOztBRGdCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDZEo7O0FEbUJFO0VBQ0UsZUFBQTtBQ2pCSjs7QURvQkU7RUFDRSxlQUFBO0FDbEJKOztBRG9CRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDbEJKOztBRHVCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNyQko7O0FEdUJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDckJOOztBRHVCSTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3JCTjs7QUR5QkU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN2Qko7O0FEeUJJO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDdkJOOztBRHlCSTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ3ZCTjs7QUR5Qkk7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUN2Qk47O0FENEJJO0VBQ0UsaUJBQUE7QUMxQk47O0FENEJJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDMUJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ3ltLWFkbWluL2d5bS1hZG1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBcbiAgLmltYWdlQmcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgfVxuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wcm9maWxlUGhvdG8yLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG5cbi5wcm9maWxlSW1hZ2UzIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ncm91cHByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4ubmF2TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbiAgXG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLypcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpe1xuICAubmF2e1xuICAgIHdpZHRoOiAyMy43JTtcbiAgfVxufSovXG5cblxuLnBvc3Qge1xuICBwYWRkaW5nOiAwcHggMjBweCAxMHB4IDIwcHg7XG4gXG4gIC5wb3N0LWhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XG4gICAgXG4gICAgLmlubmVyLWJnIHtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIC50ZXh0LWJnIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42MSk7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogLTEwMCU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDA7XG4gXG4gICAgfVxuICB9XG4gIFxuIFxuICAubm8taW1hZ2UtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuIFxuICBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIFxuIFxuICBwLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiBcbiAgfVxuICBwLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICBwLnBvc3QtdGV4dCB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIH1cbiBcbiAgXG4gIC8vSWNvbnNcbiAgLmxpa2Uge1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gXG4gICAgJi5hY3RpdmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICAubGlrZS1jb3VudCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwzMiwzOSwgMC45OSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG4gXG4gIC5jb21tZW50IHtcbiAgICBtYXgtd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuIFxuICAgICYuYWN0aXZlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG4gICAgJi5oYXMtY29tbWVudHMge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgIH1cbiAgICAuY29tbWVudC1jb3VudCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwzMiwzOSwgMC45OSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiA1cHg7XG4gICAgICByaWdodDogNXB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9ICBcbiBcbiAgLmNvbW1lbnQtc2VjdGlvbiB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgfVxuICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuIH0iLCIubWVudS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xufVxuXG4ucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9maWxlSW1hZ2UgLmltYWdlQmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwcHg7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZUltYWdlIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDBweDtcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Byb2ZpbGVQaG90bzIuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDIzLjclO1xuICB9XG59Ki9cbi5wb3N0IHtcbiAgcGFkZGluZzogMHB4IDIwcHggMTBweCAyMHB4O1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIgLmlubmVyLWJnIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciAudGV4dC1iZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuLnBvc3QgLm5vLWltYWdlLXRleHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnBvc3QgcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wb3N0IHAudGltZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wb3N0IHAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wb3N0IHAucG9zdC10ZXh0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4ucG9zdCAubGlrZSB7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5saWtlLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5saWtlIC5saWtlLWNvdW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDMyLCAzOSwgMC45OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb3N0IC5jb21tZW50IHtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgb3BhY2l0eTogMC42O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3N0IC5jb21tZW50LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5jb21tZW50Lmhhcy1jb21tZW50cyB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5wb3N0IC5jb21tZW50IC5jb21tZW50LWNvdW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMDgsIDMyLCAzOSwgMC45OSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNXB4O1xuICByaWdodDogNXB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wb3N0IC5jb21tZW50LXNlY3Rpb24gaW9uLWNhcmQge1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbi5wb3N0IC5jb21tZW50LXNlY3Rpb24gaW9uLXRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/gym-admin/gym-admin.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/gym-admin/gym-admin.page.ts ***!
  \***************************************************/
/*! exports provided: GymAdminPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymAdminPage", function() { return GymAdminPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");













let GymAdminPage = class GymAdminPage {
    constructor(auth, db, afAuth, storage, camera, sanitizer, actionSheetController, webview, router, route, dataService, postCrudService) {
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
        const id = '9WkemgxIr047EjC8y7C5';
        this.dataReady = false;
        this.imageReady = false;
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
    ngOnInit() {
        const id = this.route.snapshot.params.id; // '9WkemgxIr047EjC8y7C5';
        this.getGymData(id);
        this.getProfileImage(id);
        this.getPosts();
    }
    signOut() {
        this.auth.signOut();
    }
    getGymData(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const gymData = yield this.db.collection('gyms')
                .doc(id)
                .ref
                .get().then(doc => {
                if (doc.exists) {
                    const gymData = doc.data();
                    return gymData;
                }
                else {
                    console.log('No such document!');
                }
            });
            this.name = gymData.name;
            this.address = gymData.address;
            this.city = gymData.city;
            this.phone = gymData.phone;
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
        const id = '9WkemgxIr047EjC8y7C5';
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
            const id = '9WkemgxIr047EjC8y7C5';
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
    createPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const id = '9WkemgxIr047EjC8y7C5';
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
                    if (this.posts[i].User_ID === id) { // || this.friends.includes(this.posts[i].User_ID)
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
                // console.log(this.posts);
            });
        });
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
        console.log('createComment()');
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
        // record['fname'] = this.fname;
        // record['lname'] = this.lname;
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
}; // end ProfilePage Class
GymAdminPage.ctorParameters = () => [
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
];
GymAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./gym-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym-admin/gym-admin.page.html"),
        styles: [__webpack_require__(/*! ./gym-admin.page.scss */ "./src/app/pages/gym-admin/gym-admin.page.scss")]
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
], GymAdminPage);



/***/ })

}]);
//# sourceMappingURL=pages-gym-admin-gym-admin-module-es2015.js.map