import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BuyerListPageRoutingModule } from './buyer-list-routing.module';
import { BuyerListPage } from './buyer-list.page';
let BuyerListPageModule = class BuyerListPageModule {
};
BuyerListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            BuyerListPageRoutingModule
        ],
        declarations: [BuyerListPage]
    })
], BuyerListPageModule);
export { BuyerListPageModule };
//# sourceMappingURL=buyer-list.module.js.map