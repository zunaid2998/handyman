import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';
import { IonDatetime } from '@ionic/angular';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss']
})
export class ChatDetailPage implements OnInit {
  @ViewChild('content', null) content: any

  loading: boolean
  writtenMessage: string = ''
  chat: any

  constructor(private activatedRoute: ActivatedRoute,
              private chatService: ChatService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      if(params.id){
        this.loading = true
        this.chatService.getChatDetail(params.id).subscribe((data: any) => {
          if(data && data.chat) {
            this.chat = data.chat
          }
        }, error => console.log(error), () => this.loading = false )
      }
    })
  }

  ionViewDidEnter(){
    this.scrollToBottom()
  }

  onClickSend(): void {
    let conversation: any = {
      message: this.writtenMessage,
      dateTime: new Date(),
      senderName: 'Ahmed',
      senderType: 'consumer'
    }
    this.chat.conversation.push(conversation)
    this.chatService.updateConversation(this.chat.id, this.chat.conversation)
      .subscribe((data: any) => {
        console.log(data)
        this.writtenMessage = ''
        this.scrollToBottom()
      }, error => console.log(error))
  }

  scrollToBottom(): void {
    this.content.scrollToBottom(300)
  }

  onClickBook(): void {
    this.orderService.createOrder({contractorId: this.chat.contractorId})
      .subscribe((response: any) => {
        console.log(response.order)
        this.router.navigate(['client', 'request']);
      }, error => console.log(error))
  }

}
