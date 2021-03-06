import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RoleGuard } from './guards/role.guard';
import { AutomaticLoginGuard } from './guards/automatic-login.guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const routes = [
    {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [AutomaticLoginGuard]
    },
    // Stuff held over from the tutorial. Might be worth a look for future stuff so I left it.
    {
        path: 'user',
        canActivate: [AngularFireAuthGuard, RoleGuard],
        data: {
            authGuardPipe: redirectUnauthorizedToLogin,
            role: 'USER'
        },
        children: [
            {
                path: 'feed',
                loadChildren: () => import('./pages/feed/feed.module').then(m => m.FeedPageModule)
            },
            {
                path: 'calendar',
                loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarPageModule)
            },
            {
                path: 'gym',
                loadChildren: () => import('./pages/gym/gym.module').then(m => m.GymPageModule)
            },
            {
                path: 'camera',
                loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
            },
            {
                path: 'groups',
                loadChildren: () => import('./pages/groups/groups.module').then(m => m.GroupsPageModule)
            },
            {
                path: 'list',
                loadChildren: () => import('./pages/buyer-list/buyer-list.module').then(m => m.BuyerListPageModule)
            },
            {
                path: 'list/:id',
                loadChildren: () => import('./pages/buyer-list-details/buyer-list-details.module').then(m => m.BuyerListDetailsPageModule)
            },
            {
                path: '',
                redirectTo: 'feed',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'seller',
        canActivate: [AngularFireAuthGuard, RoleGuard],
        data: {
            authGuardPipe: redirectUnauthorizedToLogin,
            role: 'SELLER'
        },
        children: [
            {
                path: 'list',
                loadChildren: () => import('./pages/seller-list/seller-list.module').then(m => m.SellerListPageModule)
            },
            {
                path: 'list/new',
                loadChildren: () => import('./pages/seller-list-details/seller-list-details.module').then(m => m.SellerListDetailsPageModule)
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'cart-modal',
        loadChildren: () => import('./pages/cart-modal/cart-modal.module').then(m => m.CartModalPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map