import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
  category: Category

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.getCurrentNavigation().extras.state){
      this.category = this.router.getCurrentNavigation().extras.state.category
    }
  }

  onclickContractor(id: number): void {
    this.router.navigate(['client','category', this.category.id ,'contractor', id])
  }

}
