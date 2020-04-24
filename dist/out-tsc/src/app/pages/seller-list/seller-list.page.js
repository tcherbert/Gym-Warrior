import * as tslib_1 from "tslib";
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
let SellerListPage = class SellerListPage {
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
SellerListPage = tslib_1.__decorate([
    Component({
        selector: 'app-seller-list',
        templateUrl: './seller-list.page.html',
        styleUrls: ['./seller-list.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, ProductService])
], SellerListPage);
export { SellerListPage };
//# sourceMappingURL=seller-list.page.js.map