import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCompeltePageRoutingModule } from './order-compelte-routing.module';

import { OrderCompeltePage } from './order-compelte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCompeltePageRoutingModule
  ],
  declarations: [OrderCompeltePage]
})
export class OrderCompeltePageModule {}
