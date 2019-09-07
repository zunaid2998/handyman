import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  createOrder(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/consumer/orders`, data, {headers: this.reqHeader})
  }

  getOrders(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/orders`, {headers: this.reqHeader})
  }

  getOrder(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/orders/${id}`, {headers: this.reqHeader})
  }

  getOrderDetails(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/orders/${id}/detail`, {headers: this.reqHeader})
  }

  updateOrder(id: number, order: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/consumer/orders/${id}`, order, {headers: this.reqHeader})
  }
}
