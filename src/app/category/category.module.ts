import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CategoryPage } from './category.page';
import { ContractorDetailPageModule } from './contractor-detail/contractor-detail.module';
import { ServiceDetailPageModule } from './service-detail/service-detail.module';
import { CategoryDetailPageModule } from './category-detail/category-detail.module';

const routes: Routes = [
  {
    path: '',
    component: CategoryPage
  },
  { path: ':id', loadChildren: () => CategoryDetailPageModule },
  { path: ':id/service/:serviceId', loadChildren: () => ServiceDetailPageModule },
  { path: ':id/service/:serviceId/contractor/:contractorId', loadChildren: () => ContractorDetailPageModule }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CategoryPage]
})
export class CategoryPageModule {}
