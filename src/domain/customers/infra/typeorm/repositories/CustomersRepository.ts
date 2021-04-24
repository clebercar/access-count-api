import { getMongoRepository, MongoRepository } from 'typeorm'

import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'
import { ICustomersRepository } from '@domain/customers/infra/repositories/ICustomersRepository'

import { Customer } from '../schemas/Customer'

export class CustomersRepository implements ICustomersRepository {
  private ormRepository: MongoRepository<Customer>

  constructor() {
    this.ormRepository = getMongoRepository(Customer)
  }

  public async create({
    name,
    email,
    password,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create({
      name,
      email,
      password,
    })

    await this.ormRepository.save(customer)

    return customer
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({ email })

    return customer
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne(id)

    return customer
  }
}
