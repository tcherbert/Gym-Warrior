import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsPage } from './groups.page';
const routes = [
    {
        path: '',
        component: GroupsPage
    }
];
let GroupsPageRoutingModule = class GroupsPageRoutingModule {
};
GroupsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], GroupsPageRoutingModule);
export { GroupsPageRoutingModule };
//# sourceMappingURL=groups-routing.module.js.map