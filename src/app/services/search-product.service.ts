import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private searchSubject = new BehaviorSubject<string>('');
  private allTeas: any[] = [];

  setSearch(query: string) {
    this.searchSubject.next(query);
  }

  setAllTeas(teas: any[]) {
    this.allTeas = teas;
  }

  getSuggestions(query: string): any[] {
    const loweredQuery = query.toLowerCase();
    return this.allTeas.filter(tea =>
      tea.title.toLowerCase().includes(loweredQuery)
    );
  }
}
