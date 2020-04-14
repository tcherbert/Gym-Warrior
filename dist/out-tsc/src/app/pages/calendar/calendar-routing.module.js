import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CalendarPage } from './calendar.page';
const routes = [
    {
        path: '',
        component: CalendarPage
    }
];
let CalendarPageRoutingModule = class CalendarPageRoutingModule {
};
CalendarPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CalendarPageRoutingModule);
export { CalendarPageRoutingModule };
//# sourceMappingURL=calendar-routing.module.js.map