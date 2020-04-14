import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuyerListDetailsPage } from './buyer-list-details.page';
const routes = [
    {
        path: '',
        component: BuyerListDetailsPage
    }
];
let BuyerListDetailsPageRoutingModule = class BuyerListDetailsPageRoutingModule {
};
BuyerListDetailsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BuyerListDetailsPageRoutingModule);
export { BuyerListDetailsPageRoutingModule };
//# sourceMappingURL=buyer-list-details-routing.module.js.map