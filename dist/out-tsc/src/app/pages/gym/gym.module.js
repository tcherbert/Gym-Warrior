import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GymPageRoutingModule } from './gym-routing.module';
import { GymPage } from './gym.page';
let GymPageModule = class GymPageModule {
};
GymPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GymPageRoutingModule
        ],
        declarations: [GymPage]
    })
], GymPageModule);
export { GymPageModule };
//# sourceMappingURL=gym.module.js.map