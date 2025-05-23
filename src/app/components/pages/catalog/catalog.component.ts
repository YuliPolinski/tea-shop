import {Component, OnInit} from '@angular/core';
import {TeaService} from '../../../services/tea.service';
import {ActivatedRoute} from "@angular/router";
import {SearchProductService} from "../../../services/search-product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  teas: any[] = [];
  isLoading = true;
  notFound = false;
  currentSearch = '';

  constructor(
    private teaService: TeaService,
    private route: ActivatedRoute,
    private searchService: SearchProductService
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['search'] || '';
      this.currentSearch = query;

      this.searchService.setSearch(query);

      this.teaService.getTea(query).subscribe(data => {
        this.teas = data;

        this.searchService.setAllTeas(data);

        this.notFound = data.length === 0;
        this.isLoading = false;
      });
    });
  }
}
