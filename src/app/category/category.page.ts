import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { CategoryService } from '../service/category.service';
import { Router, NavigationExtras } from '@angular/router';
import { Category } from '../model/category';

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
    this.categoryService.getCategories()
      .subscribe((res: any) => {
        this.categories = res.categories
      }, error => console.log(error))
  }

  onChangeSearch(event: any): void {
    console.log(event.target.value)
  }

  onClickCategory(category: Category): void {
    this.router.navigate(['client', 'category', category.id])
  }

}
