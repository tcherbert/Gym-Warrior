(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-app>\r\n    <ion-content overflow-scroll=\"true\">\r\n\r\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\r\n        <ion-content>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/groups\">Groups</ion-button>\r\n            </ion-item>\r\n            <ion-button (click)=\"signOut()\" class=\"signOutButton\">\r\n              Logout <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n            </ion-button>\r\n       \r\n          </ion-list>\r\n        </ion-content>\r\n      </ion-menu>\r\n      \r\n      <div id=\"main\">\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n      </div>   \r\n\r\n<main>\r\n    <div>\r\n      <ion-button class=\"nav\" href=\"user/profile\" color=\"lightred\">profile</ion-button>\r\n      <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\r\n      <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\r\n      <ion-button (click)=\"togglePost()\" class=\"darkred\">Add Post</ion-button>\r\n    </div>\r\n    \r\n    <div class=\"profileImage\" *ngIf=\"togglePostFlag\">\r\n      <div *ngIf=\"imageReady\">\r\n        <!-- <div class=\"imageBg\" [style.background-image]=\"profileImage\"> -->\r\n        <div class=\"imageBg\" [ngStyle]=\"{'background-image':'url('+profileImage+')'}\">\r\n          <!-- <img [src]=\"profileImage\" *ngIf=\"profileImage\"> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <form (ngSubmit)=\"createPost()\" *ngIf=\"togglePostFlag\">\r\n      <ion-textarea placeholder=\"What is on your mind?\" [(ngModel)]=\"postData.txt\" name=\"txt\"></ion-textarea>\r\n      <ion-button (click)=\"selectSource()\"><ion-icon name=\"ios-image\"></ion-icon> Add Image</ion-button>\r\n      <ion-button *ngIf=\"imageReady\" (click)=\"removeImage()\"><ion-icon name=\"ios-image\"></ion-icon> Remove Image</ion-button>\r\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-margin-vertical\">\r\n        Post\r\n      </ion-button>\r\n    </form>\r\n\r\n    <div>\r\n      <ion-card  *ngFor =\"let post of myPosts\">\r\n        <div>\r\n          <div class=\"post-bg\" *ngIf=post.Image [ngStyle]=\"{'background-image':'url('+post.Image+')'}\"></div>\r\n          <p>{{post.Data.txt}}</p>\r\n          <p>{{post.Data.fname}}</p>\r\n          <p>{{post.Data.lname}}</p>\r\n        </div>\r\n      </ion-card> \r\n      \r\n      <ion-card class=\"profileImage2\">\r\n          <ion-card-header>\r\n            <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n          </ion-card-header>\r\n\r\n          <ion-card-content id=\"nameStatus\">\r\n            We just released a new class schedule! Check it out!\r\n          </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n</main>\r\n</ion-content>\r\n\r\n</ion-app>"

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

module.exports = ".profileImage {\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.profileImage > div {\n  height: 400px;\n}\n.profileImage .imageBg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n.profileImage ion-card-header {\n  position: absolute;\n  bottom: 0px;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #ffffff;\n}\n.profileImage ion-card-header ion-card-title {\n  font-weight: bold;\n  padding: 0px;\n  color: #fff !important;\n}\n.profileImage ion-card-header ion-card-subtitle {\n  margin: 0px;\n  color: #fff;\n}\n.profileImage ion-button {\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 10px;\n  position: absolute;\n  right: 5px;\n  top: 0px;\n}\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n.nav {\n  width: 24%;\n}\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\np {\n  color: white;\n  text-align: center;\n}\n.hide {\n  display: none;\n}\nion-textarea {\n  background: #fff;\n  padding: 10px;\n}\n.post-bg {\n  min-height: 200px;\n  background-size: cover;\n  background-position: 50% 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZC9DOlxcVXNlcnNcXHRjYXJ2XFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltLVdhcnJpb3Ivc3JjXFxhcHBcXHBhZ2VzXFxmZWVkXFxmZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURFRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ0FKO0FERUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ0FOO0FESUU7RUFDRSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0ZKO0FETUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNIRjtBRE1FO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETUU7RUFDRSxVQUFBO0FDSEo7QURNRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDSEo7QURLSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQ0hOO0FETUM7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNISDtBRE9DO0VBQ0UsYUFBQTtBQ0pIO0FET0M7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUNKSDtBRE1BO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mZWVkL2ZlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJj5kaXYge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlQmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gIH1cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjcpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgaW9uLWNhcmQtdGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4jbmFtZVN0YXR1cyB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5wcm9maWxlSW1hZ2UyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA1NSU7XHJcblxyXG4gIH1cclxuICAubmF2e1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICB9XHJcblxyXG4gIC5uYXZNZW51IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBcclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiBwe1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIH1cclxuIFxyXG5cclxuIC5oaWRlIHtcclxuICAgZGlzcGxheTogbm9uZTtcclxuIH1cclxuXHJcbiBpb24tdGV4dGFyZWEge1xyXG4gICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICBwYWRkaW5nOiAxMHB4O1xyXG4gfVxyXG4ucG9zdC1iZyB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG59XHJcblxyXG4gIiwiLnByb2ZpbGVJbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcm9maWxlSW1hZ2UgPiBkaXYge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLnByb2ZpbGVJbWFnZSAuaW1hZ2VCZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlSW1hZ2UgaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnByb2ZpbGVJbWFnZSBpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMHB4O1xufVxuXG4jbmFtZVN0YXR1cyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbn1cblxuLnByb2ZpbGVJbWFnZTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2d5bXByb2ZpbGUuanBlZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNTUlO1xufVxuXG4ubmF2IHtcbiAgd2lkdGg6IDI0JTtcbn1cblxuLm5hdk1lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4ubmF2TWVudSBpb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbnAge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucG9zdC1iZyB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xufSJdfQ== */"

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
        this.postData = {};
        this.posts = {};
        this.myPosts = [];
        this.togglePostFlag = false;
    }
    FeedPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.afAuth.auth.currentUser.uid;
        this.getUserData(id);
        // This gets all posts...
        this.postCrudService.readPosts().subscribe(function (data) {
            _this.posts = data.map(function (e) {
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
            var postsLength = Object.keys(_this.posts).length;
            var id = _this.afAuth.auth.currentUser.uid;
            var counter = 0;
            for (var i = 0; i < postsLength; i++) {
                // If only this users posts
                if (_this.posts[i].User_ID === id) {
                    _this.myPosts[counter] = _this.posts[i];
                    _this.getUserData(_this.posts[i].User_ID);
                    // If this.posts[i].Image is set.
                    if (_this.posts[i].Image !== undefined) {
                        _this.getPostImage(id, _this.posts[i].Image, counter);
                    }
                    counter++;
                }
            }
            //console.log(this.myPosts);
        });
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
            // console.log('storageRef');
            // console.log(storageRef);
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
            var id, record;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = this.afAuth.auth.currentUser.uid;
                record = {};
                record['user_id'] = id;
                this.postData['fname'] = this.fname;
                this.postData['lname'] = this.lname;
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



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map