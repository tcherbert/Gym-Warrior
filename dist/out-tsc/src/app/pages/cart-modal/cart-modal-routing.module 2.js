import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartModalPage } from './cart-modal.page';
const routes = [
    {
        path: '',
        component: CartModalPage
    }
];
let CartModalPageRoutingModule = class CartModalPageRoutingModule {
};
CartModalPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CartModalPageRoutingModule);
export { CartModalPageRoutingModule };
//# sourceMappingURL=cart-modal-routing.module.js.map