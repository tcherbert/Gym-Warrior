import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymMembersPageRoutingModule } from './gymmembers-routing.module';

import { GymMembersPage } from './gymmembers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymMembersPageRoutingModule
  ],
  declarations: [GymMembersPage]
})
export class GymMembersPageModule {}
