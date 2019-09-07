import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RequestPage } from './request.page';
import { RequestDetailPageModule } from './request-detail/request-detail.module';
import { SubmitReviewPageModule } from './submit-review/submit-review.module';

const routes: Routes = [
  {
    path: '',
    component: RequestPage
  },
  {
    path: ':id',
    loadChildren: () => RequestDetailPageModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SubmitReviewPageModule
  ],
  declarations: [RequestPage]
})
export class RequestPageModule {}
