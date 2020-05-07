import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymListingsPage } from './gymlistings.page';

const routes: Routes = [
  {
    path: '',
    component: GymListingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymListingsPageRoutingModule {}
