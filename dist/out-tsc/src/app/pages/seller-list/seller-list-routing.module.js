import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SellerListPage } from './seller-list.page';
const routes = [
    {
        path: '',
        component: SellerListPage
    }
];
let SellerListPageRoutingModule = class SellerListPageRoutingModule {
};
SellerListPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SellerListPageRoutingModule);
export { SellerListPageRoutingModule };
//# sourceMappingURL=seller-list-routing.module.js.map