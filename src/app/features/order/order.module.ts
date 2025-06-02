import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderComponent} from "./order/order.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {OrderRoutingModule} from "./order-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  exports: [OrderRoutingModule]
})
export class OrderModule { }
