import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/categories`, {headers: this.reqHeader})
  }

  getServicesByCategory(categoryId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/categories/${categoryId}/services`, {headers: this.reqHeader})
  }

  getContractorsByServices(serviceId: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/services/${serviceId}/contractors`, {headers: this.reqHeader})
  }
}
