import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tea} from "../models/tea.model";

@Injectable({
  providedIn: 'root'
})
export class TeaService {
  constructor(private http: HttpClient) {}

  getTea(search: string = ''): Observable<Tea[]> {
    const url = search
      ? `https://testologia.ru/tea?search=${encodeURIComponent(search)}`
      : 'https://testologia.ru/tea';
    return this.http.get<Tea[]>(url);
  }


}
