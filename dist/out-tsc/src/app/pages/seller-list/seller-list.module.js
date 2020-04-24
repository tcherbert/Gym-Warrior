import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerListPageRoutingModule } from './seller-list-routing.module';
import { SellerListPage } from './seller-list.page';
let SellerListPageModule = class SellerListPageModule {
};
SellerListPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SellerListPageRoutingModule
        ],
        declarations: [SellerListPage]
    })
], SellerListPageModule);
export { SellerListPageModule };
//# sourceMappingURL=seller-list.module.js.map