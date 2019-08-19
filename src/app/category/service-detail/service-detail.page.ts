import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { Contractor } from 'src/app/model/contractor';
import { Service } from 'src/app/model/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  categoryId: number
  serviceId: number
  contractors: Contractor[]
  loaded: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      this.categoryId = params.id
      this.serviceId = params.serviceId
    })
    if(this.categoryId && this.serviceId) {
      this.loaded = false
      this.categoryService.getContractorsByServices(this.serviceId)
        .subscribe((res: any) => {
          this.contractors = res.contractors
          this.loaded = true
        }, error => console.log(error))
    }
  }

  onclickContractor(contractor: Contractor): void {
    this.router.navigate(['client','category', this.categoryId ,'service', this.serviceId, 'contractor', contractor.id])
  }

}
