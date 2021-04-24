import { ObjectID } from 'mongodb'
import { Customer } from '@domain/customers/infra/typeorm/schemas/Customer'
import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'
import { ICustomersRepository } from '../ICustomersRepository'

export class FakeCustomerRepository implements ICustomersRepository {
  public customers: Customer[] = []

  public async create(data: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer()

    Object.assign(customer, { id: new ObjectID(), ...data })

    this.customers.push(customer)

    return customer
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    return this.customers.find((customer) => customer.email === email)
  }
}
