import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CameraPage } from './camera.page';
const routes = [
    {
        path: '',
        component: CameraPage
    }
];
let CameraPageRoutingModule = class CameraPageRoutingModule {
};
CameraPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CameraPageRoutingModule);
export { CameraPageRoutingModule };
//# sourceMappingURL=camera-routing.module.js.map