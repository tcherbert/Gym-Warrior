import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymAdminPageRoutingModule } from './gym-admin-routing.module';

import { GymAdminPage } from './gym-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymAdminPageRoutingModule
  ],
  declarations: [GymAdminPage]
})
export class GymAdminPageModule {}
