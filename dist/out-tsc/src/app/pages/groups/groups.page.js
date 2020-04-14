import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
let GroupsPage = class GroupsPage {
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
GroupsPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list',
        templateUrl: './groups.page.html',
        styleUrls: ['./groups.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, ProductService])
], GroupsPage);
export { GroupsPage };
//# sourceMappingURL=groups.page.js.map