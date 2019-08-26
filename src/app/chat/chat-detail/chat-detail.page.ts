import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

  conversations: any = []
  loading: boolean

  constructor(private activatedRoute: ActivatedRoute, private chatService: ChatService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if(params.id){
        this.loading = true
        this.chatService.getChatDetail(params.id).subscribe((data: any) => {
          if(data && data.chat) this.conversations = data.chat.conversation
          console.log(this.conversations)
        }, error => console.log(error), () => this.loading = false )
      }
    })
  }

}
