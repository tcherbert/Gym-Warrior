(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-camera-camera-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/camera/camera.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/camera/camera.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Test App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img [src]=\"image\" *ngIf=\"image\">\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"selectSource()\">\n      <ion-icon name=\"camera\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/camera/camera-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/camera/camera-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CameraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageRoutingModule", function() { return CameraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./camera.page */ "./src/app/pages/camera/camera.page.ts");




var routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_3__["CameraPage"]
    }
];
var CameraPageRoutingModule = /** @class */ (function () {
    function CameraPageRoutingModule() {
    }
    CameraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CameraPageRoutingModule);
    return CameraPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/camera/camera.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.module.ts ***!
  \***********************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-routing.module */ "./src/app/pages/camera/camera-routing.module.ts");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera.page */ "./src/app/pages/camera/camera.page.ts");







var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _camera_routing_module__WEBPACK_IMPORTED_MODULE_5__["CameraPageRoutingModule"]
            ],
            declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
        })
    ], CameraPageModule);
    return CameraPageModule;
}());



/***/ }),

/***/ "./src/app/pages/camera/camera.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/camera/camera.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/camera/camera.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/camera/camera.page.ts ***!
  \*********************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var CameraPage = /** @class */ (function () {
    function CameraPage(camera, webview, actionSheetController, sanitizer) {
        this.camera = camera;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.sanitizer = sanitizer;
        this.image = null;
    }
    CameraPage.prototype.ngOnInit = function () {
    };
    CameraPage.prototype.selectSource = function () {
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
    CameraPage.prototype.captureImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            console.log('Path Before: ', imagePath);
            _this.image = _this.webview.convertFileSrc(imagePath);
            _this.image = _this.sanitizer.bypassSecurityTrustUrl(_this.image);
            console.log('path: ', _this.image);
        });
    };
    CameraPage.ctorParameters = function () { return [
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
        { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__["WebView"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! raw-loader!./camera.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/camera/camera.page.html"),
            styles: [__webpack_require__(/*! ./camera.page.scss */ "./src/app/pages/camera/camera.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_3__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], CameraPage);
    return CameraPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-camera-camera-module-es5.js.map