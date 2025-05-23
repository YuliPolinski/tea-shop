import { Component} from '@angular/core';
import {SearchProductService} from "../../../services/search-product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchQuery = '';
  suggestions: any[] = [];

  constructor(private router: Router, private searchProductService: SearchProductService) {}

  submitSearch() {
    if (this.searchQuery.trim()) {
      this.searchProductService.setSearch(this.searchQuery);
      this.router.navigate(['/catalog'], {
        queryParams: { search: this.searchQuery }
      });
      this.suggestions = [];
    }
  }

  onInputChange(): void {
    if (this.searchQuery.trim().length > 0) {
      this.suggestions = this.searchProductService.getSuggestions(this.searchQuery);
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(title: string) {
    this.searchQuery = title;
    this.submitSearch();
  }

}
