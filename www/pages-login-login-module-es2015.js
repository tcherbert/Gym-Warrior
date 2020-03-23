(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Academy Fire</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n  <header>\n    <ion-img class=\"centerLogo\" src=\"../../../assets/landing_logo.png\"></ion-img>\n  </header>\n  <div class=\"flip-container\" #flipcontainer>\n    <div class=\"flipper\">\n      <div class=\"front\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Login</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <ion-input type=\"email\" placeholder=\"E-Mail\" formControlName=\"email\"></ion-input>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n\n              <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\"\n              class=\"sign-in ion-padding-horizontal ion-margin-vertical\">\n                Sign in\n              </ion-button>\n  \n              <ion-button expand=\"block\" type=\"button\" fill=\"outline\"\n              class=\"create-button ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                Create Account\n              </ion-button>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <div class=\"back\">\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>Register</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n                <ion-input placeholder=\"First Name\" formControlName=\"fname\"></ion-input>\n                <ion-input placeholder=\"Last Name\" formControlName=\"lname\"></ion-input>\n                <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n                \n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-padding-horizontal ion-margin-vertical\"\n                [disabled]=\"!registerForm.valid\">\n                  Register\n                </ion-button>\n                \n                <ion-button expand=\"block\" type=\"button\"  fill=\"clear\"\n                class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                  <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\n                  Back to Login\n                </ion-button>\n                \n              </form>\n            </ion-card-content>\n          </ion-card>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n"

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

module.exports = ".sc-ion-card-md-h {\n  background: #FF0003;\n}\n\nion-card-header.md.hydrated {\n  background: #FF0003;\n}\n\n.item-native {\n  background: #FF0003 !important;\n}\n\nion-item.ion-untouched.ion-pristine.ion-invalid.item-interactive.item-input.item-has-placeholder.item.md.item-lines-none.ion-focusable.hydrated {\n  background: #FF0003 !important;\n}\n\n.create-button {\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  line-height: 30px;\n}\n\n.create-button.activated {\n  color: #fff !important;\n  background: transparent !important;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-container,\n.front,\n.back {\n  width: 100%;\n  height: 500px;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.navMenu {\n  visibility: hidden;\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxsYWFtdW5kc29uL0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURBQTtFQUNFLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FESUEsd0NBQUE7O0FBQ0E7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDREY7O0FESUE7OztFQUdFLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FESUEseUJBQUE7O0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUVBLGtCQUFBO0FDRkY7O0FES0Esa0NBQUE7O0FBQ0E7O0VBRUUsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNIRjs7QURNQSxrQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUNIRjs7QURNQSxnQ0FBQTs7QUFDQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNIRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vU3R5bGluZyBPdmVycmlkZXMuXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGJhY2tncm91bmQ6ICNGRjAwMDM7XG59XG5pb24tY2FyZC1oZWFkZXIubWQuaHlkcmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xufVxuaW9uLWl0ZW0uaW9uLXVudG91Y2hlZC5pb24tcHJpc3RpbmUuaW9uLWludmFsaWQuaXRlbS1pbnRlcmFjdGl2ZS5pdGVtLWlucHV0Lml0ZW0taGFzLXBsYWNlaG9sZGVyLml0ZW0ubWQuaXRlbS1saW5lcy1ub25lLmlvbi1mb2N1c2FibGUuaHlkcmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzICFpbXBvcnRhbnQ7XG59XG4uY3JlYXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbi5jcmVhdGUtYnV0dG9uLmFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4vLyAuc2lnbi1pbiB7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuLy8gICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuLy8gICBjb2xvcjogI2ZmZjtcbi8vIH1cbi8vRnJvbSBUdXRvcmlhbCBjb2RlIGZvciBjYXJkIGZsaXBcbi8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4uZmxpcC1jb250YWluZXIge1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jb250YWluZXIuZmxpcCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jb250YWluZXIsXG4uZnJvbnQsXG4uYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbi5mcm9udCxcbi5iYWNrIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4vKiBmcm9udCBwYW5lLCBwbGFjZWQgYWJvdmUgYmFjayAqL1xuLmZyb250IHtcbiAgei1pbmRleDogMjtcbn1cblxuLyogYmFjaywgaW5pdGlhbGx5IGhpZGRlbiBwYW5lICovXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLm5hdk1lbnV7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLnNjLWlvbi1jYXJkLW1kLWgge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuXG5pb24tY2FyZC1oZWFkZXIubWQuaHlkcmF0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuXG4uaXRlbS1uYXRpdmUge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi1pbnZhbGlkLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1pbnB1dC5pdGVtLWhhcy1wbGFjZWhvbGRlci5pdGVtLm1kLml0ZW0tbGluZXMtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLWJ1dHRvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLmNyZWF0ZS1idXR0b24uYWN0aXZhdGVkIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNvbnRhaW5lci5mbGlwIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNvbnRhaW5lcixcbi5mcm9udCxcbi5iYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4uZmxpcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbi5mcm9udCxcbi5iYWNrIHtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLm5hdk1lbnUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

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