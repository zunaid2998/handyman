import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  getContractor(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/contractors/${id}`, {headers: this.reqHeader})
  }
}
