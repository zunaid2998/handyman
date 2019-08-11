import { Component, OnInit } from '@angular/core';
import { ContractorService } from 'src/app/service/contractor.service';
import { ActivatedRoute } from '@angular/router';
import { Contractor } from 'src/app/model/contractor';

@Component({
  selector: 'app-contractor-detail',
  templateUrl: './contractor-detail.page.html',
  styleUrls: ['./contractor-detail.page.scss'],
})
export class ContractorDetailPage implements OnInit {
  contractor: Contractor
  displayedSegment: string
  categoryId: number
  segment: any
  constructor(private contractorService: ContractorService,
              private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.categoryId = parseInt(params.id)
      this.contractor = this.contractorService.getContractor(parseInt(params.contractorId))
    })
  }

  segmentChanged(ev: any){
    this.displayedSegment = ev.detail.value
  }

}
