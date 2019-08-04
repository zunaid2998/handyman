import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications = []

  constructor() { }

  getNotifications(): Notification[] {
    for(let i = 1; i < 1000; i++){
      this.notifications.push({id: i, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'})
    }
    return this.notifications
  }
}
