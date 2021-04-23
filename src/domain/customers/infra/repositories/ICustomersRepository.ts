import { Customer } from '@domain/customers/entities/Customer'
import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'

interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>
  findByEmail(email: string): Promise<Customer>
}

const CustomersRepositorySym = Symbol('CustomersRepository')

export { CustomersRepositorySym, ICustomersRepository }
