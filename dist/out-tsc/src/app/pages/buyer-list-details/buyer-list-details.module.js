import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerListDetailsPageRoutingModule } from './buyer-list-details-routing.module';
import { BuyerListDetailsPage } from './buyer-list-details.page';
let BuyerListDetailsPageModule = class BuyerListDetailsPageModule {
};
BuyerListDetailsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BuyerListDetailsPageRoutingModule
        ],
        declarations: [BuyerListDetailsPage]
    })
], BuyerListDetailsPageModule);
export { BuyerListDetailsPageModule };
//# sourceMappingURL=buyer-list-details.module.js.map