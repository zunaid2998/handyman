import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  createReview(review: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/consumer/reviews`, review, {headers: this.reqHeader})
  }
}
