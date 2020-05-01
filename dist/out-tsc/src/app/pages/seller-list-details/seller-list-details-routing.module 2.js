import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SellerListDetailsPage } from './seller-list-details.page';
const routes = [
    {
        path: '',
        component: SellerListDetailsPage
    }
];
let SellerListDetailsPageRoutingModule = class SellerListDetailsPageRoutingModule {
};
SellerListDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SellerListDetailsPageRoutingModule);
export { SellerListDetailsPageRoutingModule };
//# sourceMappingURL=seller-list-details-routing.module.js.map