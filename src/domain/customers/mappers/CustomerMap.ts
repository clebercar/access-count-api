import { Customer } from '../infra/typeorm/schemas/Customer'

export interface ICustomerMapped {
  id: string
  name: string
  email: string
}

export class CustomerMap {
  public static toDomain(customer: Customer): ICustomerMapped {
    return {
      id: String(customer.id),
      name: customer.name,
      email: customer.email,
    }
  }
}
