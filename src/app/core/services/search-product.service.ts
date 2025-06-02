import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Tea} from "../../models/tea.model";

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private searchSubject = new BehaviorSubject<string>('');
  private allTeas: Tea[] = [];

  setSearch(query: string) {
    this.searchSubject.next(query);
  }


  setAllTeas(teas: Tea[]) {
    this.allTeas = teas;
  }

  getSuggestions(query: string): Tea[] {
    return this.allTeas.filter(tea =>
      tea.title.toLowerCase().includes(query.toLowerCase())
    );
  }
}
