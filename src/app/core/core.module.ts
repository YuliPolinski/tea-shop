import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TeaService } from './services/tea.service';
import { OrderService } from './services/order.service';
import { SearchProductService } from './services/search-product.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [TeaService, OrderService, SearchProductService]
})
export class CoreModule {}
