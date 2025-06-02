import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LayoutComponent} from "./features/layout.component";

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {path: '', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)},
    {path: 'order', loadChildren: () => import('./features/order/order.module').then((m) => m.OrderModule)},
    {path: 'catalog', loadChildren: () => import('./features/products/products.module').then((m) => m.ProductsModule)},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
