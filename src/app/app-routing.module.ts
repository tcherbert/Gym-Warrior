import { DataResolverService } from './services/data-resolver.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RoleGuard } from './guards/role.guard';
import { AutomaticLoginGuard } from './guards/automatic-login.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [AutomaticLoginGuard]
  },
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
        loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
      },
      {
        path: 'friends',
        loadChildren: () => import('./pages/friends/friends.module').then( m => m.FriendsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'gym',
        loadChildren: () => import('./pages/gym/gym.module').then( m => m.GymPageModule)
      },
      {
        path: 'gym/:id',
        resolve: {
          gymID: DataResolverService
        },
        loadChildren: './pages/gym/gym.module#GymPageModule'
      },
      {
        path: 'gym-admin',
        loadChildren: () => import('./pages/gym-admin/gym-admin.module').then( m => m.GymAdminPageModule)
      },
      {
        path: 'gym-admin/:id',
        resolve: {
          gymID: DataResolverService
        },
        loadChildren: './pages/gym-admin/gym-admin.module#GymAdminPageModule'
      },
      {
        path: 'gymmembers',
        loadChildren: () => import('./pages/gym-admin/gym-admin.module').then( m => m.GymAdminPageModule)
      },
      {
        path: 'gymmembers/:id',
        resolve: {
          gymID: DataResolverService
        },
        loadChildren: './pages/gymmembers/gymmembers.module#GymMembersPageModule'
      },
      {
        path: 'gym-listings',
        loadChildren: () => import('./pages/gymListings/gymlistings.module').then(m => m.GymListingsPageModule)
      },
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
