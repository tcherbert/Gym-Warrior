import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
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
            name: ['', Validators.required],
            price: ['', Validators.required],
            desc: ['', Validators.required],
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
SellerListDetailsPage = tslib_1.__decorate([
    Component({
        selector: 'app-seller-list-details',
        templateUrl: './seller-list-details.page.html',
        styleUrls: ['./seller-list-details.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, ProductService, NavController,
        Camera])
], SellerListDetailsPage);
export { SellerListDetailsPage };
//# sourceMappingURL=seller-list-details.page.js.map