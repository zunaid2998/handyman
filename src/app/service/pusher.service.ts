import { Injectable } from '@angular/core';
declare const Pusher: any;

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  channel: any
  constructor() {
    const pusher = new Pusher('ABCDEFG', {
      cluster: 'mt1',
      encrypted: false,
      wsHost: '127.0.0.1',
      wsPort: 6001
    })
    this.channel = pusher.subscribe('afmzunaid')
  }

  init(): any {
    return this.channel
  }
}
