import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Contractor } from '../model/contractor';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
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

  categories = [
    {
      id: 1,
      name: 'Plumbing',
      contractors: this.contractors
    },
    {
      id: 2,
      name: 'Home Cleaning',
      contractors: this.contractors
    },
    {
      id: 3,
      name: 'Heating',
      contractors: this.contractors
    }
  ]

  constructor() { }

  getCategories(): Category[] {
    return this.categories
  }

  getCategory(id: number): Category {
    return this.categories.find(category => category.id === id)
  }

  getContractorsByCategory(categoryId: number): Category {
    return this.categories.find(category => category.id === categoryId)
  }
}
