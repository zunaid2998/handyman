import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {
  orders: any[]
  loading: boolean

  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {}

  onClickOrder(id: number): void {
    this.router.navigate(['client', 'request', id])
  }

  ionViewWillEnter() {
    this.loadOrders()
  }

  private loadOrders(): void {
    this.loading = true;
    this.orderService.getOrders()
      .subscribe((response: any) => {
        this.orders = response.orders
      }, error => console.log(error), () => this.loading = false)
  }

}
