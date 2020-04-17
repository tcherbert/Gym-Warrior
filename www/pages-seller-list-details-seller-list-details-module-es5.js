(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-details-seller-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list-details/seller-list-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seller-list-details/seller-list-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/seller/list\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Create Product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"createProduct()\">\r\n\r\n    <div class=\"product-image ion-text-center\">\r\n      <img [src]=\"productImageBase64\" *ngIf=\"productImageBase64\">\r\n      <ion-button type=\"button\" expand=\"full\" fill=\"clear\" (click)=\"selectImage()\">\r\n        Select product image\r\n      </ion-button>\r\n    </div>\r\n\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Name</ion-label>\r\n        <ion-input formControlName=\"name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Price</ion-label>\r\n        <ion-input formControlName=\"price\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n        <ion-label position=\"stacked\">Desccription</ion-label>\r\n        <ion-textarea rows=\"6\" formControlName=\"desc\"></ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" class=\"ion-padding-horizontal ion-margin-vertical\"\r\n    [disabled]=\"!productForm.valid\">\r\n      Save Product\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/seller-list-details/seller-list-details-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SellerListDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPageRoutingModule", function() { return SellerListDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-list-details.page */ "./src/app/pages/seller-list-details/seller-list-details.page.ts");




var routes = [
    {
        path: '',
        component: _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__["SellerListDetailsPage"]
    }
];
var SellerListDetailsPageRoutingModule = /** @class */ (function () {
    function SellerListDetailsPageRoutingModule() {
    }
    SellerListDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SellerListDetailsPageRoutingModule);
    return SellerListDetailsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/seller-list-details/seller-list-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: SellerListDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPageModule", function() { return SellerListDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seller_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-list-details-routing.module */ "./src/app/pages/seller-list-details/seller-list-details-routing.module.ts");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-list-details.page */ "./src/app/pages/seller-list-details/seller-list-details.page.ts");







var SellerListDetailsPageModule = /** @class */ (function () {
    function SellerListDetailsPageModule() {
    }
    SellerListDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _seller_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerListDetailsPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_seller_list_details_page__WEBPACK_IMPORTED_MODULE_6__["SellerListDetailsPage"]]
        })
    ], SellerListDetailsPageModule);
    return SellerListDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/seller-list-details/seller-list-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-image {\n  height: 200px;\n  background: #ececec;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-image ion-button {\n  display: contents;\n}\n.product-image img {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 200px;\n  width: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsbGVyLWxpc3QtZGV0YWlscy9DOlxcVXNlcnNcXHRjYXJ2XFxEb2N1bWVudHNcXEdpdGh1YlxcR3ltLVdhcnJpb3Ivc3JjXFxhcHBcXHBhZ2VzXFxzZWxsZXItbGlzdC1kZXRhaWxzXFxzZWxsZXItbGlzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsbGVyLWxpc3QtZGV0YWlscy9zZWxsZXItbGlzdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsbGVyLWxpc3QtZGV0YWlscy9zZWxsZXItbGlzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWltYWdlIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufSIsIi5wcm9kdWN0LWltYWdlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWltYWdlIGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbi5wcm9kdWN0LWltYWdlIGltZyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/seller-list-details/seller-list-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: SellerListDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerListDetailsPage", function() { return SellerListDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






var SellerListDetailsPage = /** @class */ (function () {
    function SellerListDetailsPage(fb, productService, navCtrl, camera) {
        this.fb = fb;
        this.productService = productService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.productImageBase64 = null;
    }
    SellerListDetailsPage.prototype.ngOnInit = function () {
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ''
        });
    };
    SellerListDetailsPage.prototype.createProduct = function () {
        var _this = this;
        this.productService.addProduct(this.productForm.value).then(function (res) {
            _this.navCtrl.pop();
        });
    };
    SellerListDetailsPage.prototype.selectImage = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: 0,
            mediaType: 0,
            sourceType: 1,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (data) {
            console.log(data);
            _this.productImageBase64 = 'data:image/jpeg;base64,' + data;
            _this.productForm.patchValue({ img: data });
        });
    };
    SellerListDetailsPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
    ]; };
    SellerListDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-seller-list-details',
            template: __webpack_require__(/*! raw-loader!./seller-list-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list-details/seller-list-details.page.html"),
            styles: [__webpack_require__(/*! ./seller-list-details.page.scss */ "./src/app/pages/seller-list-details/seller-list-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
    ], SellerListDetailsPage);
    return SellerListDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-seller-list-details-seller-list-details-module-es5.js.map