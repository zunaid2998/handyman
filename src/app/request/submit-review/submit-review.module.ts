import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SubmitReviewPage } from './submit-review.page';
import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubmitReviewPage],
  entryComponents: [SubmitReviewPage]
})
export class SubmitReviewPageModule {}
