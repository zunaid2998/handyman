import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SubmitReviewPage } from '../submit-review/submit-review.page';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.page.html',
  styleUrls: ['./request-detail.page.scss'],
})
export class RequestDetailPage implements OnInit {
  orderId: number
  order: any
  loading: boolean
  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.orderId = parseInt(params.id)
      if(this.orderId){
        this.loading = true
        this.orderService.getOrderDetails(this.orderId)
          .subscribe((response: any) => {
            this.order = response.order
          }, error => console.log(error), () => this.loading = false)
      }
    })
  }

  onClickComplete(){
    const order = {
      status: "COMPLETE"
    }
    this.orderService.updateOrder(this.orderId, order)
      .subscribe((response: any) => {
        console.log(response)
        this.displayReviewModal()
      }, error => console.log(error))
  }

  private async displayReviewModal(){
    const modal = await this.modalController.create({
      component: SubmitReviewPage,
      componentProps: {
        'consumerId': this.order.consumerId,
        'contractorId': this.order.contractorId,
        'orderId': this.order.id
      }
    })
    return await modal.present()
  }

}
