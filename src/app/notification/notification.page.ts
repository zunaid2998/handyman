import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../service/notificaton.service';
import { PusherService } from '../service/pusher.service';
import { Notification } from '../model/notification';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  notifications: Notification[]
  channel: any
  constructor(private notificationService: NotificationService,
              private pusherService: PusherService) {}

  ngOnInit() {
    this.notifications = this.notificationService.getNotifications()
    const channel = this.pusherService.init()
    channel.bind('notify', (body: any) => {
      const newMessage: Notification = {id: body.id, message: body.message}
      this.notifications = [newMessage, ...this.notifications]
    })
  }

}
