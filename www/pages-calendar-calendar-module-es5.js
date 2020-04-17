(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calendar/calendar.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calendar/calendar.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n \r\n  \r\n    \r\n  <div class=\"profileImage\">\r\n    <ion-card-header>\r\n        <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n        <ion-card-subtitle id=\"nameStatus\">1234 Street, City 555-555-5555</ion-card-subtitle>\r\n    </ion-card-header>\r\n  </div>\r\n<main>\r\n    <div>\r\n        <ion-button class=\"nav\" color=\"lightred\">Message</ion-button>\r\n        <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\r\n        <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\r\n    </div>\r\n    <div>\r\n        <ion-card class=\"profileImage2\">\r\n            <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n            We just released a new class schedule! Check it out!\r\n        </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"profileImage2\">\r\n             <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n           Personal training special! Now through March 1 all of our personal training sessions are 50% off!\r\n        </ion-card-content>\r\n        </ion-card>\r\n\r\n        <ion-card class=\"profileImage2\">\r\n             <ion-card-header>\r\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\r\n             </ion-card-header>\r\n\r\n         <ion-card-content id=\"nameStatus\">\r\n           It's a great day for a great day!\r\n        </ion-card-content>\r\n        </ion-card>\r\n         \r\n    </div>\r\n\r\n</main>\r\n\r\n<ion-button (click)=\"signOut()\" class=\"signOutButton\">\r\n  <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\r\n</ion-button>\r\n\r\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/calendar/calendar-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/calendar/calendar-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageRoutingModule", function() { return CalendarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");




var routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
var CalendarPageRoutingModule = /** @class */ (function () {
    function CalendarPageRoutingModule() {
    }
    CalendarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CalendarPageRoutingModule);
    return CalendarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/calendar/calendar.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.module.ts ***!
  \***************************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/pages/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");







var CalendarPageModule = /** @class */ (function () {
    function CalendarPageModule() {
    }
    CalendarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarPageRoutingModule"]
            ],
            declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
        })
    ], CalendarPageModule);
    return CalendarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  margin-top: 62px;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvQzpcXFVzZXJzXFx0Y2FydlxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bS1XYXJyaW9yL3NyY1xcYXBwXFxwYWdlc1xcY2FsZW5kYXJcXGNhbGVuZGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FsZW5kYXIvY2FsZW5kYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNDRjs7QURHRTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlSW1hZ2Uge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA1NSU7XHJcbiAgbWFyZ2luLXRvcDogNjJweDtcclxufVxyXG5cclxuI25hbWVTdGF0dXMge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnByb2ZpbGVJbWFnZTIge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuXHJcbiAgfVxyXG4gIC5uYXZ7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gIH0iLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAzMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.ts ***!
  \*************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




var CalendarPage = /** @class */ (function () {
    function CalendarPage(auth, productService) {
        this.auth = auth;
        this.productService = productService;
    }
    CalendarPage.prototype.ngOnInit = function () {
        this.products = this.productService.getSellerProducts();
    };
    CalendarPage.prototype.delete = function (id) {
        this.productService.deleteProduct(id);
    };
    CalendarPage.prototype.signOut = function () {
        this.auth.signOut();
    };
    CalendarPage.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
    ]; };
    CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buyer-list',
            template: __webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calendar/calendar.page.html"),
            styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/pages/calendar/calendar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], CalendarPage);
    return CalendarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-calendar-calendar-module-es5.js.map