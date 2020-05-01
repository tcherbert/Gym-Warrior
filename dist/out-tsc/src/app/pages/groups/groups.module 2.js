import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupsPageRoutingModule } from './groups-routing.module';
import { GroupsPage } from './groups.page';
let GroupsPageModule = class GroupsPageModule {
};
GroupsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            GroupsPageRoutingModule
        ],
        declarations: [GroupsPage]
    })
], GroupsPageModule);
export { GroupsPageModule };
//# sourceMappingURL=groups.module.js.map