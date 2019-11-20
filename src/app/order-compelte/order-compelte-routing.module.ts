import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCompeltePage } from './order-compelte.page';

const routes: Routes = [
  {
    path: '',
    component: OrderCompeltePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCompeltePageRoutingModule {}
