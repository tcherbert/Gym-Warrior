import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerListDetailsPageRoutingModule } from './seller-list-details-routing.module';
import { SellerListDetailsPage } from './seller-list-details.page';
let SellerListDetailsPageModule = class SellerListDetailsPageModule {
};
SellerListDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SellerListDetailsPageRoutingModule,
            ReactiveFormsModule
        ],
        declarations: [SellerListDetailsPage]
    })
], SellerListDetailsPageModule);
export { SellerListDetailsPageModule };
//# sourceMappingURL=seller-list-details.module.js.map