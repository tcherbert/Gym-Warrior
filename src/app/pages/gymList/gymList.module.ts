import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymListPageRoutingModule } from './gymList-routing.module';

import { GymListPage } from './gymList.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymListPageRoutingModule
  ],
  declarations: [GymListPage]
})
export class GymListPageModule {}
