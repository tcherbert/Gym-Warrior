import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedPage } from './feed.page';
const routes = [
    {
        path: '',
        component: FeedPage
    }
];
let FeedPageRoutingModule = class FeedPageRoutingModule {
};
FeedPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FeedPageRoutingModule);
export { FeedPageRoutingModule };
//# sourceMappingURL=feed-routing.module.js.map