import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/service/review.service';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.page.html',
  styleUrls: ['./submit-review.page.scss'],
})
export class SubmitReviewPage implements OnInit {
  review: any = {}
  constructor(private reviewService: ReviewService,
              private navParams: NavParams,
              private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  onClickReviewSubmit(){
    const review = {
      consumerId: this.navParams.get('consumerId'),
      contractorId: this.navParams.get('contractorId'),
      orderId: this.navParams.get('orderId'),
      message: this.review.message,
      rating: this.review.rating
    }
    this.reviewService.createReview(review)
      .subscribe((response: any) => {
        this.modalController.dismiss()
        this.router.navigate(['client', 'request'])
      }, error => console.log(error))
  }

  onClickSkip(){
    this.modalController.dismiss()
    this.router.navigate(['client', 'request'])
  }

}
