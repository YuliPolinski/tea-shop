import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {RouterModule} from "@angular/router";
import {CatalogComponent} from "./catalog/catalog.component";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";



@NgModule({
  declarations: [ProductComponent, CatalogComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [ProductsRoutingModule],
})
export class ProductsModule { }
