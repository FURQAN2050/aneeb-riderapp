import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'delivery-request',
    loadChildren: () => import('./delivery-request/delivery-request.module').then( m => m.DeliveryRequestPageModule)
  },
  {
    path: 'delivery-details',
    loadChildren: () => import('./delivery-details/delivery-details.module').then( m => m.DeliveryDetailsPageModule)
  },
  {
    path: 'pickup-and-destination',
    loadChildren: () => import('./pickup-and-destination/pickup-and-destination.module').then( m => m.PickupAndDestinationPageModule)
  },
  {
    path: 'order-compelte',
    loadChildren: () => import('./order-compelte/order-compelte.module').then( m => m.OrderCompeltePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
