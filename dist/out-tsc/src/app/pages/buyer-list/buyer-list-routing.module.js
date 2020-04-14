import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuyerListPage } from './buyer-list.page';
const routes = [
    {
        path: '',
        component: BuyerListPage
    }
];
let BuyerListPageRoutingModule = class BuyerListPageRoutingModule {
};
BuyerListPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], BuyerListPageRoutingModule);
export { BuyerListPageRoutingModule };
//# sourceMappingURL=buyer-list-routing.module.js.map