import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })

  constructor(private http: HttpClient) { }

  getChats(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/chats`, {headers: this.reqHeader})
  }

  getChatDetail(id : number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/consumer/chat/${id}`, {headers: this.reqHeader})
  }

  addMessageToChat(id: number, message: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/consumer/chat/${id}`, message, {headers: this.reqHeader})
  }
}
