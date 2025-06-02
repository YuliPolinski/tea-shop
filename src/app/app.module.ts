import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import {CoreModule} from "./core/core.module";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import { LayoutComponent } from './features/layout.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    SharedModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
