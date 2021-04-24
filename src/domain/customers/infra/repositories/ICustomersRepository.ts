import { Customer } from '@domain/customers/infra/typeorm/schemas/Customer'
import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'

interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>
  findByEmail(email: string): Promise<Customer | undefined>
  findById(id: string): Promise<Customer | undefined>
}

const CustomersRepositorySym = Symbol('CustomersRepository')

export { CustomersRepositorySym, ICustomersRepository }
