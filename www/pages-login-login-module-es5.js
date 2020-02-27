(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Academy Fire</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"flip-container\" #flipcontainer>\n    <div class=\"flipper\">\n      <div class=\"front\">\n          <ion-card>\n              <ion-card-header>\n                <ion-card-title>Login</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Email</ion-label>\n                    <ion-input type=\"email\" placeholder=\"john@doe.com\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Password</ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n\n                  <ion-button expand=\"block\" type=\"submit\" color=\"primary\" [disabled]=\"!loginForm.valid\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\">\n                Sign in\n                </ion-button>\n     \n                  <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"outline\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                Create Account\n                </ion-button>\n                </form>\n              </ion-card-content>\n            </ion-card>\n      </div>\n\n      <div class=\"back\">\n          <ion-card>\n              <ion-card-header>\n                <ion-card-title>New Account</ion-card-title>\n              </ion-card-header>\n              <ion-card-content>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n          \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Email</ion-label>\n                    <ion-input type=\"email\" placeholder=\"john@doe.com\" formControlName=\"email\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Name</ion-label>\n                    <ion-input placeholder=\"John\" formControlName=\"name\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item lines=\"none\">\n                    <ion-label position=\"stacked\">Password</ion-label>\n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </ion-item>\n          \n                  <ion-item lines=\"none\">\n                    <ion-label>Select Role</ion-label>\n                    <ion-select formControlName=\"role\">\n                        <ion-select-option value=\"BUYER\">Buyer</ion-select-option>\n                        <ion-select-option value=\"SELLER\">Seller</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n          \n                  <ion-button expand=\"block\" type=\"submit\" class=\"ion-padding-horizontal ion-margin-vertical\"\n                  [disabled]=\"!registerForm.valid\">\n                    Register\n                  </ion-button>\n\n                  <ion-button expand=\"block\" type=\"button\" color=\"secondary\" fill=\"clear\"\n                  class=\"ion-padding-horizontal ion-margin-vertical\" (click)=\"toggleRegister()\">\n                  <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\n                Back to Login\n                </ion-button>\n\n                </form>\n              </ion-card-content>\n            </ion-card>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
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
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  background: #dde9ff;\n  border-radius: 10px;\n  margin-top: 6px;\n  --padding-start: 6px !important;\n}\n\n/* entire container, keeps perspective */\n\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n\n.flip-container.flip .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n\n.flip-container,\n.front,\n.back {\n  width: 100%;\n  height: 500px;\n}\n\n/* flip speed goes here */\n\n.flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n\n.front,\n.back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n\n.front {\n  z-index: 2;\n}\n\n/* back, initially hidden pane */\n\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0Rlc2t0b3AvYWNhZGVteS1maXJlLW1hcmtldHBsYWNlLWNvdXJzZS9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NGOztBREdBLHdDQUFBOztBQUNBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQ0FGOztBREdBOzs7RUFHRSxXQUFBO0VBQ0EsYUFBQTtBQ0FGOztBREdBLHlCQUFBOztBQUNBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFFQSxrQkFBQTtBQ0RGOztBRElBLGtDQUFBOztBQUNBOztFQUVFLG1DQUFBO1VBQUEsMkJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDRkY7O0FES0Esa0NBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDRkY7O0FES0EsZ0NBQUE7O0FBQ0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZGRlOWZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNvbnRhaW5lci5mbGlwIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi5mbGlwLWNvbnRhaW5lcixcbi5mcm9udCxcbi5iYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4uZmxpcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4vKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xuLmZyb250LFxuLmJhY2sge1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4uZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4iLCJpb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZGRlOWZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4uZmxpcC1jb250YWluZXIge1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jb250YWluZXIuZmxpcCAuZmxpcHBlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jb250YWluZXIsXG4uZnJvbnQsXG4uYmFjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIGhpZGUgYmFjayBvZiBwYW5lIGR1cmluZyBzd2FwICovXG4uZnJvbnQsXG4uYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4uZnJvbnQge1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(fb, authService, loadingCtrl, toastCtrl, alertCtrl, router) {
        this.fb = fb;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['BUYER', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    LoginPage.prototype.navigateByRole = function (role) {
        if (role == 'BUYER') {
            this.router.navigateByUrl('/buyer');
        }
        else if (role == 'SELLER') {
            this.router.navigateByUrl('/seller');
        }
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.authService.signIn(this.loginForm.value).subscribe(function (user) {
                            loading.dismiss();
                            console.log('after login: ', user);
                            _this.navigateByRole(user['role']);
                        }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loading.dismiss();
                                        return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Error',
                                                message: err.message,
                                                buttons: ['OK']
                                            })];
                                    case 1:
                                        alert = _a.sent();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading...'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.authService.signUp(this.registerForm.value).then(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var toast;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.toastCtrl.create({
                                                duration: 3000,
                                                message: 'Successfully created new Account!'
                                            })];
                                    case 2:
                                        toast = _a.sent();
                                        toast.present();
                                        console.log('finished: ', res);
                                        this.navigateByRole(this.registerForm.value['role']);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var alert;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.alertCtrl.create({
                                                header: 'Error',
                                                message: err.message,
                                                buttons: ['OK']
                                            })];
                                    case 2:
                                        alert = _a.sent();
                                        alert.present();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.toggleRegister = function () {
        this.flipcontainer.nativeElement.classList.toggle('flip');
    };
    LoginPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
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
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map