import { Component, OnInit } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  chats: any = []
  loading: boolean;

  constructor(private chatService: ChatService, private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.chatService.getChats().subscribe((data: any) =>{
      this.chats = data.chats
      this.loading = false;
      console.log(this.chats)
    }, error => console.log(error))
  }

  onClickChat(chat: any){
    this.router.navigate(['client', 'chat', chat.id])
  }

}
