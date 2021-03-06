(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <header>\n    <ion-img class=\"centerLogo\" src=\"../../../assets/landing_logo.png\"></ion-img>\n  </header>\n  <div class=\"flip-container\" #flipcontainer>\n    <div class=\"flipper\">\n      <div class=\"front\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Login</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n              <ion-input type=\"email\" placeholder=\"E-Mail\" formControlName=\"email\"></ion-input>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n\n              <ion-button expand=\"block\" type=\"submit\" [disabled]=\"!loginForm.valid\"\n              class=\"sign-in ion-padding-horizontal ion-margin-vertical\">\n                Sign in\n              </ion-button>\n  \n              <ion-button expand=\"block\" type=\"button\" fill=\"outline\"\n              class=\"create-button ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                Create Account\n              </ion-button>\n            </form>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <div class=\"back\">\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>Register</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"></ion-input>\n                <ion-input placeholder=\"First Name\" formControlName=\"fname\"></ion-input>\n                <ion-input placeholder=\"Last Name\" formControlName=\"lname\"></ion-input>\n                <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n                \n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-padding-horizontal ion-margin-vertical\"\n                [disabled]=\"!registerForm.valid\">\n                  Register\n                </ion-button>\n                \n                <ion-button expand=\"block\" type=\"button\"  fill=\"clear\"\n                class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                  <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\n                  Back to Login\n                </ion-button>\n                \n              </form>\n            </ion-card-content>\n          </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n"

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

module.exports = ".sc-ion-card-md-h {\n  background: #FF0003;\n}\n\nion-card-header.md.hydrated {\n  background: #FF0003;\n}\n\n.item-native {\n  background: #FF0003 !important;\n}\n\nion-item.ion-untouched.ion-pristine.ion-invalid.item-interactive.item-input.item-has-placeholder.item.md.item-lines-none.ion-focusable.hydrated {\n  background: #FF0003 !important;\n}\n\n.create-button {\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 10px;\n  line-height: 30px;\n}\n\n.create-button.activated {\n  color: #fff !important;\n  background: transparent !important;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-container,\n.front,\n.back {\n  width: 100%;\n  height: 500px;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.navMenu {\n  visibility: hidden;\n  display: none !important;\n}\n\n#main {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0FDQUY7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsOEJBQUE7QUNFRjs7QURBQTtFQUNFLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxzQkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FESUEsd0NBQUE7O0FBQ0E7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDREY7O0FESUE7OztFQUdFLFdBQUE7RUFDQSxhQUFBO0FDREY7O0FESUEseUJBQUE7O0FBQ0E7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUVBLGtCQUFBO0FDRkY7O0FES0Esa0NBQUE7O0FBQ0E7O0VBRUUsbUNBQUE7VUFBQSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNIRjs7QURNQSxrQ0FBQTs7QUFDQTtFQUNFLFVBQUE7QUNIRjs7QURNQSxnQ0FBQTs7QUFDQTtFQUNFLGtDQUFBO1VBQUEsMEJBQUE7QUNIRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7QUNGRjs7QURNQTtFQUNFLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1N0eWxpbmcgT3ZlcnJpZGVzLlxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICBiYWNrZ3JvdW5kOiAjRkYwMDAzO1xufVxuaW9uLWNhcmQtaGVhZGVyLm1kLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMztcbn1cbi5pdGVtLW5hdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNGRjAwMDMgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtLmlvbi11bnRvdWNoZWQuaW9uLXByaXN0aW5lLmlvbi1pbnZhbGlkLml0ZW0taW50ZXJhY3RpdmUuaXRlbS1pbnB1dC5pdGVtLWhhcy1wbGFjZWhvbGRlci5pdGVtLm1kLml0ZW0tbGluZXMtbm9uZS5pb24tZm9jdXNhYmxlLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xufVxuLmNyZWF0ZS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uY3JlYXRlLWJ1dHRvbi5hY3RpdmF0ZWQge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLy8gLnNpZ24taW4ge1xuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICBsaW5lLWhlaWdodDogMzBweDtcbi8vICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyB9XG4vL0Zyb20gVHV0b3JpYWwgY29kZSBmb3IgY2FyZCBmbGlwXG4vKiBlbnRpcmUgY29udGFpbmVyLCBrZWVwcyBwZXJzcGVjdGl2ZSAqL1xuLmZsaXAtY29udGFpbmVyIHtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbn1cblxuLmZsaXAtY29udGFpbmVyLmZsaXAgLmZsaXBwZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmZsaXAtY29udGFpbmVyLFxuLmZyb250LFxuLmJhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLyogZmxpcCBzcGVlZCBnb2VzIGhlcmUgKi9cbi5mbGlwcGVyIHtcbiAgdHJhbnNpdGlvbjogMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xuLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cbi5uYXZNZW51e1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4jbWFpbiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSIsIi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMztcbn1cblxuaW9uLWNhcmQtaGVhZGVyLm1kLmh5ZHJhdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMztcbn1cblxuLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogI0ZGMDAwMyAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbS5pb24tdW50b3VjaGVkLmlvbi1wcmlzdGluZS5pb24taW52YWxpZC5pdGVtLWludGVyYWN0aXZlLml0ZW0taW5wdXQuaXRlbS1oYXMtcGxhY2Vob2xkZXIuaXRlbS5tZC5pdGVtLWxpbmVzLW5vbmUuaW9uLWZvY3VzYWJsZS5oeWRyYXRlZCB7XG4gIGJhY2tncm91bmQ6ICNGRjAwMDMgIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1idXR0b24ge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5jcmVhdGUtYnV0dG9uLmFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4uZmxpcC1jb250YWluZXIge1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jb250YWluZXIuZmxpcCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jb250YWluZXIsXG4uZnJvbnQsXG4uYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4uZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5uYXZNZW51IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNtYWluIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");








let LoginPage = class LoginPage {
    constructor(fb, authService, loadingCtrl, toastCtrl, alertCtrl, router, db, afAuth) {
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.db = db;
        this.afAuth = afAuth;
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
                this.createFriendsTable();
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
    createFriendsTable() {
        const id = this.afAuth.auth.currentUser.uid;
        // this.db.doc('friends').ref.update(id);
        // this.db.collection('friends').add(id);
        const myobj = { Friends: [] };
        this.db.collection('friends').doc(id).set(myobj);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"] }
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuth"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map