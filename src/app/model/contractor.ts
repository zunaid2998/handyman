export interface Contractor {
  id: number
  firstName: string
  lastName: string
  phone: string
  email?: string
  address?: {
    apt: string
    house: string
    road: string
    city: string
    state: string
    country: string
    postalCode: string
  }
}