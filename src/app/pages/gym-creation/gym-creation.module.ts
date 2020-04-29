import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GymCreationPageRoutingModule } from './gym-creation-routing.module'
import { GymCreationPage } from './gym-creation.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymCreationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GymCreationPage]
})
export class GymCreationPageModule {}
