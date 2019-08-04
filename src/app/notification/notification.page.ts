import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notificaton.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications: Notification[]
  constructor(private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications()
  }

}
