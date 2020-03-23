(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/calendar/calendar.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/calendar/calendar.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n \n  \n    \n  <div class=\"profileImage\">\n    <ion-card-header>\n        <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n        <ion-card-subtitle id=\"nameStatus\">1234 Street, City 555-555-5555</ion-card-subtitle>\n    </ion-card-header>\n  </div>\n<main>\n    <div>\n        <ion-button class=\"nav\" color=\"lightred\">Message</ion-button>\n        <ion-button class=\"nav\" color=\"darkred\">Photos</ion-button>\n        <ion-button class=\"nav\" color=\"lightred\">Schedule</ion-button>\n    </div>\n    <div>\n        <ion-card class=\"profileImage2\">\n            <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n            We just released a new class schedule! Check it out!\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"profileImage2\">\n             <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n           Personal training special! Now through March 1 all of our personal training sessions are 50% off!\n        </ion-card-content>\n        </ion-card>\n\n        <ion-card class=\"profileImage2\">\n             <ion-card-header>\n                <ion-card-title id=\"nameStatus\">Smart Fitness</ion-card-title>\n             </ion-card-header>\n\n         <ion-card-content id=\"nameStatus\">\n           It's a great day for a great day!\n        </ion-card-content>\n        </ion-card>\n         \n    </div>\n\n</main>\n\n<ion-button (click)=\"signOut()\" class=\"signOutButton\">\n  <ion-icon slot=\"icon-only\" name=\"log-out\"></ion-icon>\n</ion-button>\n\n</ion-app>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");




const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_3__["CalendarPage"]
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CalendarPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/pages/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/pages/calendar/calendar.page.ts");







let CalendarPageModule = class CalendarPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/calendar/calendar.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/calendar/calendar.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profileImage {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n  margin-top: 62px;\n}\n\n#nameStatus {\n  color: white;\n  text-shadow: -2px 2px 6px black;\n}\n\n.profileImage2 {\n  background: url('gymprofile.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 55%;\n}\n\n.nav {\n  width: 32%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FER0U7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjp3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDZweCBibGFjaztcbiAgfVxuXG5cbiAgLnByb2ZpbGVJbWFnZTIge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvZ3ltcHJvZmlsZS5qcGVnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA1NSU7XG5cbiAgfVxuICAubmF2e1xuICAgIHdpZHRoOiAzMiU7XG4gIH0iLCIucHJvZmlsZUltYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbiAgbWFyZ2luLXRvcDogNjJweDtcbn1cblxuI25hbWVTdGF0dXMge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAtMnB4IDJweCA2cHggYmxhY2s7XG59XG5cbi5wcm9maWxlSW1hZ2UyIHtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9neW1wcm9maWxlLmpwZWcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDU1JTtcbn1cblxuLm5hdiB7XG4gIHdpZHRoOiAzMiU7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");




let CalendarPage = class CalendarPage {
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
CalendarPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
CalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buyer-list',
        template: __webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/calendar/calendar.page.html"),
        styles: [__webpack_require__(/*! ./calendar.page.scss */ "./src/app/pages/calendar/calendar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=pages-calendar-calendar-module-es2015.js.map