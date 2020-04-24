import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
let CalendarPage = class CalendarPage {
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
CalendarPage = tslib_1.__decorate([
    Component({
        selector: 'app-buyer-list',
        templateUrl: './calendar.page.html',
        styleUrls: ['./calendar.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AuthService, ProductService])
], CalendarPage);
export { CalendarPage };
//# sourceMappingURL=calendar.page.js.map