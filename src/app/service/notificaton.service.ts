import { Injectable } from '@angular/core';
import { Notification } from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications: any = []

  constructor() { }

  getNotifications(): Notification[] {
    for(let i = 1; i < 10; i++){
      this.notifications.push({id: i, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'})
    }
    return this.notifications
  }
}
