import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupAndDestinationPageRoutingModule } from './pickup-and-destination-routing.module';

import { PickupAndDestinationPage } from './pickup-and-destination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupAndDestinationPageRoutingModule
  ],
  declarations: [PickupAndDestinationPage]
})
export class PickupAndDestinationPageModule {}
