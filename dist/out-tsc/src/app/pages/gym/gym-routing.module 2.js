import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GymPage } from './gym.page';
const routes = [
    {
        path: '',
        component: GymPage
    }
];
let GymPageRoutingModule = class GymPageRoutingModule {
};
GymPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GymPageRoutingModule);
export { GymPageRoutingModule };
//# sourceMappingURL=gym-routing.module.js.map