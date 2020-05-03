import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GymAdminPage } from "./gym-admin.page"

const routes: Routes = [
  {
    path: '',
    component: GymAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymAdminPageRoutingModule {}
