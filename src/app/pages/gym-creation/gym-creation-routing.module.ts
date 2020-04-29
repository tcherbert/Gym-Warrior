import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GymCreationPage } from './gym-creation.page';

const routes: Routes = [
  {
    path: '',
    component: GymCreationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymCreationPageRoutingModule {}
