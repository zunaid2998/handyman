import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../service/category.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  searchText: any;
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onChangeSearch(event: any): void {
    console.log(event.target.value)
  }

  onClickCategory(category: Category): void {
    let navigationExtras: NavigationExtras = {
      state: {
        category: category
      }
    }
    this.router.navigate(['client', 'category', category.id], navigationExtras)
  }

}
