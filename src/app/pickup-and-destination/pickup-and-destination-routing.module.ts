import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupAndDestinationPage } from './pickup-and-destination.page';

const routes: Routes = [
  {
    path: '',
    component: PickupAndDestinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupAndDestinationPageRoutingModule {}
