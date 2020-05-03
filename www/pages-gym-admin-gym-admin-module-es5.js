(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gym-admin-gym-admin-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/gym-admin/gym-admin.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/gym-admin/gym-admin.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app *ngIf=\"dataReady\">\n    <ion-content overflow-scroll=\"true\">\n  <!--Navigation Bar-->\n  <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\n    <ion-content>\n      <ion-list>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/feed\">Feed</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/friends\">friends</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\n        </ion-item>\n        <ion-item>\n          <ion-button (click)=\"signOut()\" class=\"signOutButton\">\n            <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n              \n  <div id=\"main\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <a href=\"user/feed\">\n        <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\n        </a>\n      </ion-toolbar>\n    </ion-header>\n  </div> \n  \n  <div class=\"profileImage\">\n    <div *ngIf=\"imageReady\">\n      <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\n      <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\n        \n        <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\n      </div>\n  </div>\n    <ion-button (click)=\"selectSource()\"><ion-icon name=\"md-create\"></ion-icon></ion-button>  \n    <ion-card-header>\n        <ion-card-title> {{ name }}</ion-card-title>\n        <!-- <ion-card-subtitle *ngIf=\"gymFlag\"> {{ gymData }} </ion-card-subtitle> -->\n        <ion-card-subtitle> {{ city }}, {{ address }}, {{phone}} </ion-card-subtitle>\n    </ion-card-header>\n  </div>\n  <div class=\"navbar\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button href=\"user/friends\" class=\"nav\" expand=\"full\" color=\"lightred\">Friends</ion-button>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  \n  \n  <main class=\"mainContent\">\n    <form (ngSubmit)=\"createGymPost()\" *ngIf=\"togglePostFlag\">\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\n      <ion-button (click)=\"selectGymPostSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n        Post\n      </ion-button>\n    </form>\n    <div>\n      <ion-card class=\"post\"  *ngFor =\"let post of myPosts\">\n        <header class=\"post-header\" *ngIf=post.Image>\n          <div class=\"inner-bg\" [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\n          <div class=\"text-bg\" >\n            <p class=\"time\">{{post.TimeCreated}}</p>\n            <p class=\"name\">{{ post.Data.name }}</p>\n          </div>\n        </header>\n        <div *ngIf=!post.Image class=\"no-image-text\">\n          <p class=\"time\">{{post.TimeCreated}}</p>\n          <p class=\"name\">{{ post.Data.name }}</p>\n        </div>\n        <p class=\"post-text\">{{post.Data.txt}}</p>\n        <!-- Leaving this here as may use in the future for use to store likes etc.. -->\n        <!-- <p>{{post.User_ID}}</p> -->\n        <footer>\n          <div class=\"like\" (click)=\"likeCtrl(post.index)\" [ngClass]=\"{'active': post.likeFlag}\">\n            <ion-img src=\"../../assets/dumbell.png\"></ion-img>\n            <span *ngIf=post.likesFlag class=\"like-count\">{{post.likeCount}}</span>\n          </div>\n          <div class=\"comment\" (click)=\"commentCtrl(post.index)\"  [ngClass]=\"{'has-comments': post.commentsFlag, 'active': post.commentFlag}\">\n            <ion-img src=\"../../assets/comment.png\"></ion-img>\n            <span *ngIf=post.commentsFlag class=\"comment-count\">{{post.commentCount}}</span>\n          </div>\n\n          <div class=\"comment-section\" *ngIf=post.commentFlag>\n            <ion-card *ngFor =\"let comment of post.Comments\">\n              <div class=\"no-image-text\">\n                <p class=\"time\">{{comment.timeCreated}}</p>\n                <p class=\"name\">{{comment.fname}} {{comment.lname}}</p>\n              </div>\n              <p class=\"post-text\">{{comment.data.txt}}</p>\n            </ion-card>\n            <form (ngSubmit)=\"createComment(post.index)\">\n              <ion-textarea placeholder=\"Write a comment...\" [(ngModel)]=\"commentData.txt\" name=\"txt\"></ion-textarea>\n              <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\n                Comment\n              </ion-button>\n            </form>\n          </div>\n        </footer>\n      </ion-card> \n      \n      <!-- <ion-card class=\"profileImage2\">\n          <ion-card-header>\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n          </ion-card-content>\n        </ion-card> -->\n    </div>\n    \n  </main>\n      \n \n  </ion-content>\n</ion-app>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gym_admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gym-admin.page */ "./src/app/pages/gym-admin/gym-admin.page.ts");




var routes = [
    {
        path: '',
        component: _gym_admin_page__WEBPACK_IMPORTED_MODULE_3__["GymAdminPage"]
    }
];
var GymAdminPageRoutingModule = /** @class */ (function () {
    function GymAdminPageRoutingModule() {
    }
    GymAdminPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GymAdminPageRoutingModule);
    return GymAdminPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gym_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gym-admin-routing.module */ "./src/app/pages/gym-admin/gym-admin-routing.module.ts");
/* harmony import */ var _gym_admin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gym-admin.page */ "./src/app/pages/gym-admin/gym-admin.page.ts");







var GymAdminPageModule = /** @class */ (function () {
    function GymAdminPageModule() {
    }
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
    return GymAdminPageModule;
}());



/***/ }),

/***/ "./src/app/pages/gym-admin/gym-admin.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/gym-admin/gym-admin.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-content {\n  --background-color: #f00;\n}\n\n.profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  position: relative;\n}\n\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n\n/*\n@media only screen and (max-width: 400px){\n  .nav{\n    width: 23.7%;\n  }\n}*/\n\np {\n  color: white;\n}\n\n.hide {\n  display: none;\n}\n\nion-textarea {\n  background: #fff;\n  padding: 10px;\n  color: #000 !important;\n}\n\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n\n.post {\n  padding: 0px 20px 10px 20px;\n}\n\n.post .post-header {\n  position: relative;\n  height: 200px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.post .post-header .inner-bg {\n  height: 200px;\n  width: 100%;\n  background-size: cover;\n  background-position: 50% 50%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 0;\n}\n\n.post .post-header .text-bg {\n  background: rgba(0, 0, 0, 0.61);\n  padding: 10px;\n  padding-left: 10px;\n  display: inline-block;\n  margin-top: -100%;\n  z-index: 10;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.post .no-image-text {\n  margin-top: 15px;\n}\n\n.post p {\n  text-align: left;\n  padding: 0px;\n  margin: 0px;\n}\n\n.post p.time {\n  font-size: 10px;\n}\n\n.post p.name {\n  font-size: 16px;\n}\n\n.post p.post-text {\n  margin: 10px 0px;\n  line-height: 1.5;\n  background: rgba(0, 0, 0, 0.3);\n  padding: 10px 20px;\n}\n\n.post .like {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  position: relative;\n}\n\n.post .like.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .like .like-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment {\n  max-width: 60px;\n  padding: 0px 10px 0px 10px;\n  opacity: 0.6;\n  border: 1px solid rgba(255, 255, 255, 0.6);\n  display: inline-block;\n  margin-left: 10px;\n  position: relative;\n}\n\n.post .comment.active {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment.has-comments {\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.post .comment .comment-count {\n  background: rgba(208, 32, 39, 0.99);\n  border-radius: 10px;\n  padding: 0px 5px;\n  margin: 0px;\n  position: absolute;\n  bottom: 5px;\n  right: 5px;\n  color: #fff;\n}\n\n.post .comment-section ion-card {\n  padding: 5px 20px;\n}\n\n.post .comment-section ion-textarea {\n  padding: 5px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9neW0tYWRtaW4vZ3ltLWFkbWluLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3ltLWFkbWluL2d5bS1hZG1pbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNETjs7QURHSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDRE47O0FES0U7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0hKOztBRE9BO0VBQ0UscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSkY7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRE9FO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDTEo7O0FEU0E7Ozs7O0VBQUE7O0FBTUE7RUFDRSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ05GOztBRFFBO0VBQ0MsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDTEQ7O0FEV0E7RUFDQywyQkFBQTtBQ1JEOztBRFVDO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JIOztBRFVHO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLFVBQUE7QUNUTDs7QURXRztFQUNFLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDVEw7O0FEZUM7RUFDRSxnQkFBQTtBQ2JIOztBRGdCQztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkSDs7QURtQkM7RUFDRSxlQUFBO0FDakJIOztBRG9CQztFQUNFLGVBQUE7QUNsQkg7O0FEb0JDO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNsQkg7O0FEdUJDO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ3JCSDs7QUR1Qkc7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUNyQkw7O0FEdUJHO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDckJMOztBRHlCQztFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ3ZCSDs7QUR5Qkc7RUFDRSxVQUFBO0VBQ0EsOEJBQUE7QUN2Qkw7O0FEeUJHO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDdkJMOztBRHlCRztFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3ZCTDs7QUQ0Qkc7RUFDRSxpQkFBQTtBQzFCTDs7QUQ0Qkc7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUMxQkwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9neW0tYWRtaW4vZ3ltLWFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMDA7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIFxuICAuaW1hZ2VCZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICB9XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNyk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgICBpb24tY2FyZC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgaW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3Byb2ZpbGVQaG90bzIuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOndoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xuICB9XG5cblxuLnByb2ZpbGVJbWFnZTMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICBcbiAgaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4vKlxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCl7XG4gIC5uYXZ7XG4gICAgd2lkdGg6IDIzLjclO1xuICB9XG59Ki9cbnB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLnBvc3QtYmcge1xuIG1pbi1oZWlnaHQ6IDIwMHB4O1xuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cblxuXG5cblxuLnBvc3Qge1xuIHBhZGRpbmc6IDBweCAyMHB4IDEwcHggMjBweDtcblxuIC5wb3N0LWhlYWRlciB7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBoZWlnaHQ6IDIwMHB4O1xuICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgIFxuICAgLmlubmVyLWJnIHtcbiAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgdG9wOiAwcHg7XG4gICAgIGxlZnQ6IDBweDtcbiAgICAgXG4gICAgIHotaW5kZXg6IDA7XG4gICB9XG4gICAudGV4dC1iZyB7XG4gICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42MSk7XG4gICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICBtYXJnaW4tdG9wOiAtMTAwJTtcbiAgICAgei1pbmRleDogMTA7XG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgYm90dG9tOiAwO1xuICAgICBsZWZ0OiAwO1xuXG4gICB9XG4gfVxuIFxuXG4gLm5vLWltYWdlLXRleHQge1xuICAgbWFyZ2luLXRvcDogMTVweDtcbiB9XG5cbiBwIHtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICBwYWRkaW5nOiAwcHg7XG4gICBtYXJnaW46IDBweDtcbiB9XG5cbiBcblxuIHAudGltZSB7XG4gICBmb250LXNpemU6IDEwcHg7XG5cbiB9XG4gcC5uYW1lIHtcbiAgIGZvbnQtc2l6ZTogMTZweDtcbiB9XG4gcC5wb3N0LXRleHQge1xuICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gfVxuXG4gXG4gLy9JY29uc1xuIC5saWtlIHtcbiAgIG1heC13aWR0aDogNjBweDtcbiAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgb3BhY2l0eTogMC42O1xuICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAmLmFjdGl2ZSB7XG4gICAgIG9wYWNpdHk6IDE7XG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgfVxuICAgLmxpa2UtY291bnQge1xuICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwzMiwzOSwgMC45OSk7XG4gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgIG1hcmdpbjogMHB4O1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGJvdHRvbTogNXB4O1xuICAgICByaWdodDogNXB4O1xuICAgICBjb2xvcjogI2ZmZjtcbiAgIH1cbiB9XG5cbiAuY29tbWVudCB7XG4gICBtYXgtd2lkdGg6IDYwcHg7XG4gICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgIG9wYWNpdHk6IDAuNjtcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbiAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAmLmFjdGl2ZSB7XG4gICAgIG9wYWNpdHk6IDE7XG4gICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO1xuICAgfVxuICAgJi5oYXMtY29tbWVudHMge1xuICAgICBvcGFjaXR5OiAxO1xuICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtcbiAgIH1cbiAgIC5jb21tZW50LWNvdW50IHtcbiAgICAgYmFja2dyb3VuZDogcmdiYSgyMDgsMzIsMzksIDAuOTkpO1xuICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICBtYXJnaW46IDBweDtcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICBib3R0b206IDVweDtcbiAgICAgcmlnaHQ6IDVweDtcbiAgICAgY29sb3I6ICNmZmY7XG4gICB9XG4gfSAgXG5cbiAuY29tbWVudC1zZWN0aW9uIHtcbiAgIGlvbi1jYXJkIHtcbiAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICB9XG4gICBpb24tdGV4dGFyZWEge1xuICAgICBwYWRkaW5nOiA1cHg7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICB9XG4gfVxufSIsIi5tZW51LWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmMDA7XG59XG5cbi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnByb2ZpbGVJbWFnZSAuaW1hZ2VCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMHB4O1xufVxuXG4ucHJvZmlsZUltYWdlMiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvcHJvZmlsZVBob3RvMi5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbiNuYW1lU3RhdHVzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogLTJweCAycHggNnB4IGJsYWNrO1xufVxuXG4ucHJvZmlsZUltYWdlMyB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KXtcbiAgLm5hdntcbiAgICB3aWR0aDogMjMuNyU7XG4gIH1cbn0qL1xucCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ucG9zdC1iZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufVxuXG4ucG9zdCB7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDEwcHggMjBweDtcbn1cbi5wb3N0IC5wb3N0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xufVxuLnBvc3QgLnBvc3QtaGVhZGVyIC5pbm5lci1iZyB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4ucG9zdCAucG9zdC1oZWFkZXIgLnRleHQtYmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjEpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogLTEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbi5wb3N0IC5uby1pbWFnZS10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wb3N0IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBvc3QgcC50aW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBvc3QgcC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBvc3QgcC5wb3N0LXRleHQge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5wb3N0IC5saWtlIHtcbiAgbWF4LXdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbiAgb3BhY2l0eTogMC42O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLmxpa2UuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmxpa2UgLmxpa2UtY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMzIsIDM5LCAwLjk5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvc3QgLmNvbW1lbnQge1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBvc3QgLmNvbW1lbnQuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmNvbW1lbnQuaGFzLWNvbW1lbnRzIHtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuLnBvc3QgLmNvbW1lbnQgLmNvbW1lbnQtY291bnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIwOCwgMzIsIDM5LCAwLjk5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvc3QgLmNvbW1lbnQtc2VjdGlvbiBpb24tY2FyZCB7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xufVxuLnBvc3QgLmNvbW1lbnQtc2VjdGlvbiBpb24tdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/firestore-api.service */ "./src/app/services/firestore-api.service.ts");
/* harmony import */ var src_app_services_gym_admin_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/gym-admin-api.service */ "./src/app/services/gym-admin-api.service.ts");












var GymAdminPage = /** @class */ (function () {
    function GymAdminPage(auth, db, afAuth, storage, camera, sanitizer, actionSheetController, webview, postCrudService, gymPostCrudService) {
        this.auth = auth;
        this.db = db;
        this.afAuth = afAuth;
        this.storage = storage;
        this.camera = camera;
        this.sanitizer = sanitizer;
        this.actionSheetController = actionSheetController;
        this.webview = webview;
        this.postCrudService = postCrudService;
        this.gymPostCrudService = gymPostCrudService;
        this.image = null;
        // friends = [];
        this.members = [];
        this.postData = {};
        this.commentData = {};
        this.posts = {};
        this.myPosts = [];
        this.months = [];
        this.minutes = [];
        var id = '9WkemgxIr047EjC8y7C5';
        this.dataReady = false;
        this.imageReady = false;
    }
    GymAdminPage.prototype.ngOnInit = function () {
        var id = '9WkemgxIr047EjC8y7C5';
        this.getGymData(id);
        this.getProfileImage(id);
        // this.getGymMembers();
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
        // this.getFriends();
        this.getMembers();
    };
    GymAdminPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    GymAdminPage.prototype.getGymData = function (id) {
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
                        // this.fname = userData.fname;
                        // this.lname = userData.lname;
                        this.name = gymData.name;
                        this.address = gymData.address;
                        this.city = gymData.city;
                        this.phone = gymData.phone;
                        this.dataReady = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    GymAdminPage.prototype.selectSource = function () {
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
    GymAdminPage.prototype.captureImage = function (sourceType) {
        var _this = this;
        var storageRef = null;
        var id = '9WkemgxIr047EjC8y7C5';
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
    GymAdminPage.prototype.uploadImage = function (imageURI, imageName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = '9WkemgxIr047EjC8y7C5';
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
    GymAdminPage.prototype.encodeImageUri = function (imageUri, callback) {
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
    GymAdminPage.prototype.getProfileImage = function (id) {
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
    GymAdminPage.prototype.createGymPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dateTime, id, record;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                dateTime = new Date().toISOString();
                id = '9WkemgxIr047EjC8y7C5';
                record = {};
                record['gym_id'] = id;
                // this.postData['fname'] = this.fname;
                // this.postData['lname'] = this.lname;
                this.postData['name'] = this.name;
                record['timeCreated'] = dateTime;
                record['data'] = this.postData;
                this.postData = {};
                if (this.imageID !== undefined) {
                    record['image'] = this.imageID;
                }
                this.gymPostCrudService.createGymPost(record).then(function (resp) {
                    // console.log(resp);
                })
                    .catch(function (error) {
                    // console.log(error);
                });
                return [2 /*return*/];
            });
        });
    };
    // async getGymMembers() {
    //   const id = this.afAuth.auth.currentUser.uid;
    //   this.gymFlag = false;
    //   await this.db.collection('gymMembers').ref.get()
    //     .then(querySnapshot => {
    //         querySnapshot.docs.forEach(doc => {
    //           if (doc.data().Members.includes(id)) {
    //             this.gymFlag = true;
    //             this.gymID = doc.data().gymID;
    //           }
    //       });
    //         if (this.gymFlag) {
    //           this.getGymData();
    //         }
    //   });
    // }
    // async getGymData() {
    //   const userData = await this.db.collection('gyms')
    //     .doc(this.gymID)
    //     .ref
    //     .get().then( doc => {
    //       if (doc.exists) {
    //         this.gymData = doc.data().name;
    //       } else {
    //           this.gymFlag = false;
    //       }
    //     });
    // }
    // Post Functions
    GymAdminPage.prototype.togglePost = function () {
        if (this.togglePostFlag === false) {
            this.togglePostFlag = true;
        }
        else {
            this.togglePostFlag = false;
        }
    };
    // Image Handlers
    GymAdminPage.prototype.selectGymPostSource = function () {
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
                                        _this.capturePostImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.capturePostImage(_this.camera.PictureSourceType.CAMERA);
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
    GymAdminPage.prototype.capturePostImage = function (sourceType) {
        var _this = this;
        var storageRef = null;
        var id = '9WkemgxIr047EjC8y7C5';
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
            _this.uploadPostImage(_this.profileImage, _this.imageID);
        });
    };
    GymAdminPage.prototype.uploadPostImage = function (imageURI, imageName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = '9WkemgxIr047EjC8y7C5';
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
    // async getFriends() {
    //   const id = this.afAuth.auth.currentUser.uid;
    //   await this.postCrudService.readFriendsIds(id).subscribe(data => {
    //     this.friends = data.payload.data()['Friends'];
    //     this.getPosts();
    //   });
    // }
    GymAdminPage.prototype.getMembers = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = '9WkemgxIr047EjC8y7C5';
                        return [4 /*yield*/, this.gymPostCrudService.readMemberIds(id).subscribe(function (data) {
                                _this.members = data.payload.data()['Members'];
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymAdminPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = '9WkemgxIr047EjC8y7C5';
                // this.friends = this.postCrudService.readFriendsIds(id);
                // This gets all posts...
                this.gymPostCrudService.readGymPosts().subscribe(function (data) {
                    _this.posts = data.map(function (e) {
                        // console.log(e.payload.doc.data()['timeCreated']);
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
                            Gym_ID: e.payload.doc.data()["gym_id"],
                            TimeCreated: timeFormated,
                            Likes: e.payload.doc.data()["Likes"],
                            Comments: e.payload.doc.data()["Comments"]
                        };
                    });
                    // Overly convoluted hack as I couldn't figure out how to query properly.
                    // This will need to be fixed eventually.
                    var postsLength = Object.keys(_this.posts).length;
                    var counter = 0;
                    // console.log('this.friends');
                    // console.log(this.friends);
                    for (var i = 0; i < postsLength; i++) {
                        var likeFlag = 0;
                        // If only this users posts
                        // console.log(this.posts[i].User_ID);
                        // console.log(this.friends.includes(this.posts[i].User_ID));
                        // if (this.posts[i].User_ID === id || this.friends.includes(this.posts[i].User_ID)) {
                        if (_this.posts[i].Gym_ID === id) {
                            if (_this.posts[i].Likes) {
                                for (var n = 0; n < _this.posts[i].Likes.length; n++) {
                                    if (_this.posts[i].Likes[n] === id) {
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
                            _this.getGymData(_this.posts[i].Gym_ID);
                            // If this.posts[i].Image is set.
                            if (_this.posts[i].Image !== undefined) {
                                _this.getPostImage(_this.posts[i].Gser_ID, _this.posts[i].Image, counter);
                            }
                            counter++;
                        }
                    }
                    // console.log(this.posts);
                });
                return [2 /*return*/];
            });
        });
    };
    GymAdminPage.prototype.getPostImage = function (id, imageID, counter) {
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
    GymAdminPage.prototype.commentCtrl = function (index) {
        if (this.myPosts[index].commentFlag === false) {
            this.myPosts[index].commentFlag = true;
        }
        else {
            this.myPosts[index].commentFlag = false;
        }
    };
    GymAdminPage.prototype.likeCtrl = function (index) {
        var id = this.afAuth.auth.currentUser.uid;
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
    GymAdminPage.prototype.addLike = function (postID) {
        var id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.addLike(postID, id).then(function (resp) {
            console.log(resp);
        }).catch(function (error) {
            // console.log(error);
        });
    };
    GymAdminPage.prototype.removeLike = function (postID) {
        var id = this.afAuth.auth.currentUser.uid;
        this.postCrudService.removeLike(postID, id).then(function (resp) {
            console.log(resp);
        }).catch(function (error) {
            // console.log(error);
        });
    };
    GymAdminPage.prototype.createComment = function (index) {
        this.createCommentFlag = true;
        this.createCommentIndex = index;
        // console.log('createComment', this.myPosts[index].id);
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
        var id = '9WkemgxIr047EjC8y7C5';
        var record = {};
        record['gym_id'] = id;
        // record['fname'] = this.fname;
        // record['lname'] = this.lname;
        record['name'] = this.name;
        record['timeCreated'] = timeFormated;
        record['data'] = this.commentData;
        this.commentData = {};
        if (this.imageID !== undefined) {
            record['image'] = this.imageID;
        }
        this.gymPostCrudService.addComment(this.myPosts[index].id, record).then(function (resp) {
            // console.log(resp);
        })
            .catch(function (error) {
            // console.log(error);
        });
    };
    GymAdminPage.prototype.makeid = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    GymAdminPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"] },
        { type: src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__["PostCrudService"] },
        { type: src_app_services_gym_admin_api_service__WEBPACK_IMPORTED_MODULE_11__["GymPostCrudService"] }
    ]; };
    GymAdminPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./gym-admin.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/gym-admin/gym-admin.page.html"),
            styles: [__webpack_require__(/*! ./gym-admin.page.scss */ "./src/app/pages/gym-admin/gym-admin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_9__["WebView"],
            src_app_services_firestore_api_service__WEBPACK_IMPORTED_MODULE_10__["PostCrudService"],
            src_app_services_gym_admin_api_service__WEBPACK_IMPORTED_MODULE_11__["GymPostCrudService"]])
    ], GymAdminPage);
    return GymAdminPage;
}()); // end ProfilePage Class



/***/ }),

/***/ "./src/app/services/gym-admin-api.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/gym-admin-api.service.ts ***!
  \***************************************************/
/*! exports provided: GymPostCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GymPostCrudService", function() { return GymPostCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var GymPostCrudService = /** @class */ (function () {
    function GymPostCrudService(db) {
        this.db = db;
    }
    GymPostCrudService.prototype.createGymPost = function (record) {
        return this.db.collection('gymposts').add(record);
    };
    GymPostCrudService.prototype.readGymPosts = function () {
        return this.db.collection('gymposts', function (ref) { return ref.orderBy('timeCreated', 'desc'); }).snapshotChanges();
    };
    GymPostCrudService.prototype.updatePost = function (recordID, record) {
        this.db.doc('gymposts/' + recordID).update(record);
    };
    GymPostCrudService.prototype.deleteGymPost = function (recordId) {
        this.db.doc('gymposts/' + recordId).delete();
    };
    //   readFriendsIds(recordID) {
    //     return this.db.doc('friends/' + recordID).snapshotChanges();
    //   }
    GymPostCrudService.prototype.readMemberIds = function (recordID) {
        return this.db.doc('gymMembers/' + recordID).snapshotChanges();
    };
    GymPostCrudService.prototype.readGyms = function () {
        return this.db.collection('gyms').snapshotChanges();
    };
    //   updateFriend(userId, friendId) {
    //     this.db.doc('friends/' + userId).update({
    //       Friends: firestore.FieldValue.arrayUnion(friendId)
    //     });
    //     this.db.doc('friends/' + friendId).update({
    //       Friends: firestore.FieldValue.arrayUnion(userId)
    //     });
    //   }
    //   removeFriend(userId, friendId){
    //     this.db.doc('friends/' + userId).update({
    //       Friends: firestore.FieldValue.arrayRemove(friendId)
    //     });
    //     this.db.doc('friends/' + friendId).update({
    //       Friends: firestore.FieldValue.arrayRemove(userId)
    //     });
    //   }
    GymPostCrudService.prototype.addLike = function (postID, userID) {
        return this.db.doc('gymposts/' + postID).update({
            Likes: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(userID)
        });
    };
    GymPostCrudService.prototype.removeLike = function (postID, userID) {
        return this.db.doc('gymposts/' + postID).update({
            Likes: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(userID)
        });
    };
    GymPostCrudService.prototype.addComment = function (postID, comment) {
        return this.db.doc('gymposts/' + postID).update({
            Comments: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(comment)
        });
    };
    GymPostCrudService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    GymPostCrudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], GymPostCrudService);
    return GymPostCrudService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-gym-admin-gym-admin-module-es5.js.map