import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CameraPageRoutingModule } from './camera-routing.module';
import { CameraPage } from './camera.page';
let CameraPageModule = class CameraPageModule {
};
CameraPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CameraPageRoutingModule
        ],
        declarations: [CameraPage]
    })
], CameraPageModule);
export { CameraPageModule };
//# sourceMappingURL=camera.module.js.map