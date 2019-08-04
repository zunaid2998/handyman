import { Injectable } from '@angular/core';
import { Contractor } from '../model/contractor';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {
  contractors = [{
    id: 1,
    firstName: 'Ahmed',
    lastName: 'Zunaid',
    phone: '4313355435',
    email: 'zunaid2998@gmail.com'
  },
  {
    id: 2,
    firstName: 'Saima',
    lastName: 'Akhter',
    phone: '4313359475',
    email: 'saima.auw@gmail.com'
  }]

  constructor() { }

  getContractors(): Contractor[] {
    return this.contractors
  }

  getContractor(id: number): Contractor {
    return this.contractors.find(contractor => contractor.id === id)
  }
}
