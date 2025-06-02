import { Component, OnInit } from '@angular/core';
import { TeaService } from './core/services/tea.service';
import { SearchProductService } from './core/services/search-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(
    private teaService: TeaService,
    private searchService: SearchProductService
  ) {}

  ngOnInit(): void {
    this.teaService.getTea().subscribe(data => {
      this.searchService.setAllTeas(data);
    });
  }
}
