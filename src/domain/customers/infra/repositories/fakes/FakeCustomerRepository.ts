import { Customer } from '@domain/customers/entities/Customer'
import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'
import { ICustomersRepository } from '../ICustomersRepository'

export class FakeCustomerRepository implements ICustomersRepository {
  public customers: Customer[] = []

  public async create({
    email,
    name,
    password,
  }: ICreateCustomerDTO): Promise<Customer> {
    return new Customer(email, name, password)
  }
}
