(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Academy Fire</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <header>\r\n    <ion-img class=\"centerLogo\" src=\"../../../assets/landing_logo.png\"></ion-img>\r\n  </header>\r\n  <div class=\"flip-container\" #flipcontainer>\r\n    <div class=\"flipper\">\r\n      <div class=\"front\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Login</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n              <ion-input type=\"email\" placeholder=\"E-Mail\" formControlName=\"email\"></ion-input>\r\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n\r\n              <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\"\r\n              class=\"sign-in ion-padding-horizontal ion-margin-vertical\">\r\n                Sign in\r\n              </ion-button>\r\n  \r\n              <ion-button expand=\"block\" type=\"button\" fill=\"outline\"\r\n              class=\"create-button ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\r\n                Create Account\r\n              </ion-button>\r\n            </form>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"back\">\r\n        <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>Register</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n                <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\r\n                <ion-input placeholder=\"First Name\" formControlName=\"fname\"></ion-input>\r\n                <ion-input placeholder=\"Last Name\" formControlName=\"lname\"></ion-input>\r\n                <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\r\n                \r\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-padding-horizontal ion-margin-vertical\"\r\n                [disabled]=\"!registerForm.valid\">\r\n                  Register\r\n                </ion-button>\r\n                \r\n                <ion-button expand=\"block\" type=\"button\"  fill=\"clear\"\r\n                class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\r\n                  <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\r\n                  Back to Login\r\n                </ion-button>\r\n                \r\n              </form>\r\n            </ion-card-content>\r\n          </ion-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sc-ion-card-md-h {\n  background: #FF0003;\n}\n\nion-card-header.md.hydrated {\n  background: #FF0003;\n}\n\n.item-native {\n  background: #FF0003 !important;\n}\n\nion-item.ion-untouched.ion-pristine.ion-invalid.item-interactive.item-input.item-has-placeholder.item.md.item-lines-none.ion-focusable.hydrated {\n  background: #FF0003 !important;\n}\n\n.create-button {\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  line-height: 30px;\n}\n\n.create-button.activated {\n  color: #fff !important;\n  background: transparent !important;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-container,\n.front,\n.back {\n  width: 100%;\n  height: 500px;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.navMenu {\n  visibility: hidden;\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFx0Y2FydlxcRG9jdW1lbnRzXFxHaXRodWJcXEd5bS1XYXJyaW9yL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUNBRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGOztBREFBO0VBQ0UsOEJBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QURGQTtFQUNFLHNCQUFBO0VBQ0Esa0NBQUE7QUNLRjs7QURJQSx3Q0FBQTs7QUFDQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNERjs7QURJQTs7O0VBR0UsV0FBQTtFQUNBLGFBQUE7QUNERjs7QURJQSx5QkFBQTs7QUFDQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBRUEsa0JBQUE7QUNGRjs7QURLQSxrQ0FBQTs7QUFDQTs7RUFFRSxtQ0FBQTtVQUFBLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0hGOztBRE1BLGtDQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ0hGOztBRE1BLGdDQUFBOztBQUNBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQ0hGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9TdHlsaW5nIE92ZXJyaWRlcy5cclxuLnNjLWlvbi1jYXJkLW1kLWgge1xyXG4gIGJhY2tncm91bmQ6ICNGRjAwMDM7XHJcbn1cclxuaW9uLWNhcmQtaGVhZGVyLm1kLmh5ZHJhdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xyXG59XHJcbi5pdGVtLW5hdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVtLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi1pbnZhbGlkLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1pbnB1dC5pdGVtLWhhcy1wbGFjZWhvbGRlci5pdGVtLm1kLml0ZW0tbGluZXMtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjRkYwMDAzICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNyZWF0ZS1idXR0b24ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxufVxyXG4uY3JlYXRlLWJ1dHRvbi5hY3RpdmF0ZWQge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4vLyAuc2lnbi1pbiB7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICBsaW5lLWhlaWdodDogMzBweDtcclxuLy8gICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcbi8vRnJvbSBUdXRvcmlhbCBjb2RlIGZvciBjYXJkIGZsaXBcclxuLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cclxuLmZsaXAtY29udGFpbmVyIHtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4uZmxpcC1jb250YWluZXIuZmxpcCAuZmxpcHBlciB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5mbGlwLWNvbnRhaW5lcixcclxuLmZyb250LFxyXG4uYmFjayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cclxuLmZsaXBwZXIge1xyXG4gIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4vKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xyXG4uZnJvbnQsXHJcbi5iYWNrIHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cclxuLmZyb250IHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4vKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cclxuLmJhY2sge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5uYXZNZW51e1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnNjLWlvbi1jYXJkLW1kLWgge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuXG5pb24tY2FyZC1oZWFkZXIubWQuaHlkcmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi1pbnZhbGlkLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1pbnB1dC5pdGVtLWhhcy1wbGFjZWhvbGRlci5pdGVtLm1kLml0ZW0tbGluZXMtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNyZWF0ZS1idXR0b24uYWN0aXZhdGVkIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNvbnRhaW5lci5mbGlwIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNvbnRhaW5lcixcbi5mcm9udCxcbi5iYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4uZmxpcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbi5mcm9udCxcbi5iYWNrIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLm5hdk1lbnUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginPage = class LoginPage {
    constructor(fb, authService, loadingCtrl, toastCtrl, alertCtrl, router) {
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['BUYER', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    navigateByRole(role) {
        if (role === 'USER') {
            this.router.navigateByUrl('/user/profile');
        }
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signIn(this.loginForm.value).subscribe(user => {
                loading.dismiss();
                console.log('after login: ', user);
                this.navigateByRole(user['role']);
            }, (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('Start of Register...');
            let loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            this.authService.signUp(this.registerForm.value).then((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield loading.dismiss();
                let toast = yield this.toastCtrl.create({
                    duration: 3000,
                    message: 'Successfully created new Account!'
                });
                toast.present();
                console.log('finished: ', res);
                this.navigateByRole(this.registerForm.value['role']);
            }), (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield loading.dismiss();
                let alert = yield this.alertCtrl.create({
                    header: 'Error',
                    message: err.message,
                    buttons: ['OK']
                });
                alert.present();
            }));
        });
    }
    toggleRegister() {
        this.flipcontainer.nativeElement.classList.toggle('flip');
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('flipcontainer', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginPage.prototype, "flipcontainer", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map