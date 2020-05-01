import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartModalPageRoutingModule } from './cart-modal-routing.module';
import { CartModalPage } from './cart-modal.page';
let CartModalPageModule = class CartModalPageModule {
};
CartModalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CartModalPageRoutingModule
        ],
        declarations: [CartModalPage]
    })
], CartModalPageModule);
export { CartModalPageModule };
//# sourceMappingURL=cart-modal.module.js.map