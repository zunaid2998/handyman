import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/consumer/auth/register`, user)
  }

  login(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/consumer/auth/login`, user)
  }

  getUserInfo(user: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/userInfo`, {headers: this.reqHeader})
  }
}
