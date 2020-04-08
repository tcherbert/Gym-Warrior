(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-list-details-seller-list-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list-details/seller-list-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seller-list-details/seller-list-details.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/seller/list\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create Product</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"createProduct()\">\n\n    <div class=\"product-image ion-text-center\">\n      <img [src]=\"productImageBase64\" *ngIf=\"productImageBase64\">\n      <ion-button type=\"button\" expand=\"full\" fill=\"clear\" (click)=\"selectImage()\">\n        Select product image\n      </ion-button>\n    </div>\n\n    <ion-item>\n        <ion-label position=\"stacked\">Name</ion-label>\n        <ion-input formControlName=\"name\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Price</ion-label>\n        <ion-input formControlName=\"price\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"stacked\">Desccription</ion-label>\n        <ion-textarea rows=\"6\" formControlName=\"desc\"></ion-textarea>\n    </ion-item>\n\n    <ion-button type=\"submit\" expand=\"block\" class=\"ion-padding-horizontal ion-margin-vertical\"\n    [disabled]=\"!productForm.valid\">\n      Save Product\n    </ion-button>\n  </form>\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-list-details.page */ "./src/app/pages/seller-list-details/seller-list-details.page.ts");




const routes = [
    {
        path: '',
        component: _seller_list_details_page__WEBPACK_IMPORTED_MODULE_3__["SellerListDetailsPage"]
    }
];
let SellerListDetailsPageRoutingModule = class SellerListDetailsPageRoutingModule {
};
SellerListDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerListDetailsPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _seller_list_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-list-details-routing.module */ "./src/app/pages/seller-list-details/seller-list-details-routing.module.ts");
/* harmony import */ var _seller_list_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-list-details.page */ "./src/app/pages/seller-list-details/seller-list-details.page.ts");







let SellerListDetailsPageModule = class SellerListDetailsPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/seller-list-details/seller-list-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-list-details/seller-list-details.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-image {\n  height: 200px;\n  background: #ececec;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-image ion-button {\n  display: contents;\n}\n.product-image img {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 200px;\n  width: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1oZXJiZXJ0L0RvY3VtZW50cy9HaXRIdWIvR3ltLVdhcnJpb3Ivc3JjL2FwcC9wYWdlcy9zZWxsZXItbGlzdC1kZXRhaWxzL3NlbGxlci1saXN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsZXItbGlzdC1kZXRhaWxzL3NlbGxlci1saXN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxsZXItbGlzdC1kZXRhaWxzL3NlbGxlci1saXN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlvbi1idXR0b24ge1xuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG5cbiAgaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59IiwiLnByb2R1Y3QtaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2R1Y3QtaW1hZ2UgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");






let SellerListDetailsPage = class SellerListDetailsPage {
    constructor(fb, productService, navCtrl, camera) {
        this.fb = fb;
        this.productService = productService;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.productImageBase64 = null;
    }
    ngOnInit() {
        this.productForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            img: ''
        });
    }
    createProduct() {
        this.productService.addProduct(this.productForm.value).then(res => {
            this.navCtrl.pop();
        });
    }
    selectImage() {
        const options = {
            quality: 70,
            destinationType: 0,
            mediaType: 0,
            sourceType: 1,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(data => {
            console.log(data);
            this.productImageBase64 = 'data:image/jpeg;base64,' + data;
            this.productForm.patchValue({ img: data });
        });
    }
};
SellerListDetailsPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] }
];
SellerListDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seller-list-details',
        template: __webpack_require__(/*! raw-loader!./seller-list-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seller-list-details/seller-list-details.page.html"),
        styles: [__webpack_require__(/*! ./seller-list-details.page.scss */ "./src/app/pages/seller-list-details/seller-list-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"]])
], SellerListDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-seller-list-details-seller-list-details-module-es2015.js.map