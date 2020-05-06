import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymListPage } from './gymList.page';

const routes: Routes = [
  {
    path: '',
    component: GymListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymListPageRoutingModule {}
