import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {FaqComponent} from "./faq/faq.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";



@NgModule({
  declarations: [MainComponent, FaqComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HomeRoutingModule]
})
export class HomeModule { }
