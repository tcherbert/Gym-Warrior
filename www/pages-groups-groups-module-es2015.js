(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-groups-groups-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/groups/groups.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/groups/groups.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n    <ion-content overflow-scroll=\"true\">\r\n    <ion-menu contentId=\"main\" side=\"end\" class=\"navMenu\">\r\n        <ion-content>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\"  href=\"/user/profile\">Profile</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/gym\">Gyms</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button class=\"navButton\" fill=\"clear\" href=\"/user/feed\">Groups</ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-button (click)=\"signOut()\" class=\"signOutButton\">\r\n                <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n       \r\n          </ion-list>\r\n        </ion-content>\r\n      </ion-menu>\r\n      \r\n      <div id=\"main\">\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-menu-button></ion-menu-button>\r\n            </ion-buttons>\r\n            <ion-img class=\"logo\" src=\"../../assets/logo.png\"></ion-img>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n      </div>   \r\n      \r\n<div class=\"profileImage \">\r\n  <ion-card-header>\r\n      <ion-card-title id=\"nameStatus\">Tina's Indoor Cycling Class</ion-card-title>\r\n      <ion-card-subtitle id=\"nameStatus\">Monday, Wednesday, Friday at 8 am</ion-card-subtitle>\r\n  </ion-card-header>\r\n</div>\r\n    <main>\r\n        <div>\r\n      <ion-button color=\"lightred\">Schedule</ion-button>\r\n    </div>\r\n  <div>\r\n      <ion-card class=\"profileImage2\">\r\n          <ion-card-header>\r\n              <ion-card-subtitle id=\"nameStatus\">Smart Fitness</ion-card-subtitle>\r\n              <ion-card-title id=\"nameStatus\">Sally Jones</ion-card-title>\r\n           </ion-card-header>\r\n            <ion-card-content id=\"nameStatus\">\r\n                Is someone willing to teach me the ropes for Spin? Don't want to look lik a fool!\r\n            </ion-card-content>\r\n      </ion-card>\r\n\r\n      <ion-card class=\"profileImage3\">\r\n           <ion-card-header>\r\n              <ion-card-title id=\"nameStatus\">Tina's Indoor Cycling Class</ion-card-title>\r\n           </ion-card-header>\r\n\r\n       <ion-card-content id=\"nameStatus\">\r\n          New music tomorrow! Let's hit some RPMs!\r\n      </ion-card-content>\r\n      </ion-card>\r\n       \r\n  </div>\r\n</main>\r\n      </ion-content>\r\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/groups/groups-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/groups/groups-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageRoutingModule", function() { return GroupsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups.page */ "./src/app/pages/groups/groups.page.ts");




const routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_3__["GroupsPage"]
    }
];
let GroupsPageRoutingModule = class GroupsPageRoutingModule {
};
GroupsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/groups/groups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.module.ts ***!
  \***********************************************/
/*! exports provided: GroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groups_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups-routing.module */ "./src/app/pages/groups/groups-routing.module.ts");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups.page */ "./src/app/pages/groups/groups.page.ts");







let GroupsPageModule = class GroupsPageModule {
};
GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _groups_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupsPageRoutingModule"]
        ],
        declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
    })
], GroupsPageModule);



/***/ }),

/***/ "./src/app/pages/groups/groups.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.profileImage2 {\n  background: url('profilePhoto2.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\nion-button {\n  width: 100%;\n}\n\n.profileImage3 {\n  background: url('groupprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.navMenu {\n  position: fixed;\n  z-index: 9999;\n}\n\n.navMenu ion-list {\n  padding-top: 30px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3JvdXBzL0M6XFxVc2Vyc1xcdGNhcnZcXERvY3VtZW50c1xcR2l0aHViXFxHeW0tV2Fycmlvci9zcmNcXGFwcFxccGFnZXNcXGdyb3Vwc1xcZ3JvdXBzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNFRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dyb3Vwcy9ncm91cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVJbWFnZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9ncm91cHByb2ZpbGUuanBlZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogNTUlO1xyXG59XHJcblxyXG4ucHJvZmlsZUltYWdlMiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wcm9maWxlUGhvdG8yLmpwZWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDU1JTtcclxufVxyXG5cclxuI25hbWVTdGF0dXMge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XHJcbiAgfVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnByb2ZpbGVJbWFnZTMge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3JvdXBwcm9maWxlLmpwZWcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBoZWlnaHQ6IDU1JTtcclxufVxyXG5cclxuXHJcbi5uYXZNZW51IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBcclxuICBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5wcm9maWxlSW1hZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9wcm9maWxlUGhvdG8yLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGVJbWFnZTMge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2dyb3VwcHJvZmlsZS5qcGVnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA1NSU7XG59XG5cbi5uYXZNZW51IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdk1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/groups/groups.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/groups/groups.page.ts ***!
  \*********************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




let GroupsPage = class GroupsPage {
    constructor(auth, productService) {
        this.auth = auth;
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.getSellerProducts();
    }
    delete(id) {
        this.productService.deleteProduct(id);
    }
    signOut() {
        this.auth.signOut();
    }
};
GroupsPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./groups.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/groups/groups.page.html"),
        styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/app/pages/groups/groups.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], GroupsPage);



/***/ })

}]);
//# sourceMappingURL=pages-groups-groups-module-es2015.js.map