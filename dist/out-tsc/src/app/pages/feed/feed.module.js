import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FeedPageRoutingModule } from './feed-routing.module';
import { FeedPage } from './feed.page';
let FeedPageModule = class FeedPageModule {
};
FeedPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FeedPageRoutingModule
        ],
        declarations: [FeedPage]
    })
], FeedPageModule);
export { FeedPageModule };
//# sourceMappingURL=feed.module.js.map