import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/model/service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {
  categoryId: number
  services: Service[]

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.categoryId = parseInt(params.id)
    })
    if(this.categoryId) {
      this.categoryService.getServicesByCategory(this.categoryId)
        .subscribe((res: any) => {
          this.services = res.services
        }, error => console.log(error))
    }
  }

  onclickService(service: Service): void {
    this.router.navigate(['client','category', this.categoryId ,'service', service.id])
  }

}
