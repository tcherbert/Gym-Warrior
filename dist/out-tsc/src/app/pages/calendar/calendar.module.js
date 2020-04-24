import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CalendarPage } from './calendar.page';
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            CalendarPageRoutingModule
        ],
        declarations: [CalendarPage]
    })
], CalendarPageModule);
export { CalendarPageModule };
//# sourceMappingURL=calendar.module.js.map