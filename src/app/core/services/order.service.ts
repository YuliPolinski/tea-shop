import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormOrder, OrderResponse } from '../../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://testologia.ru/order-tea';

  constructor(private http: HttpClient) {}

  submitOrder(orderData: FormOrder): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(this.apiUrl, orderData);
  }
}
