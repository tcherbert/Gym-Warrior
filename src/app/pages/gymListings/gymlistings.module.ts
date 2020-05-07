import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymListingsPageRoutingModule } from './gymlistings-routing.module';

import { GymListingsPage } from './gymlistings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymListingsPageRoutingModule
  ],
  declarations: [GymListingsPage]
})
export class GymListingsPageModule {}
