import { injectable, inject } from 'tsyringe'
import { CustomerMap } from '../mappers/CustomerMap'
import { AppError } from '@/presentation/http/errors/AppError'

import {
  CustomersRepositorySym,
  ICustomersRepository,
} from '../infra/repositories/ICustomersRepository'

interface IRequest {
  name: string
  email: string
  password: string
}

@injectable()
export class CreateCustomerService {
  constructor(
    @inject(CustomersRepositorySym)
    private customersRepository: ICustomersRepository
  ) {}

  public async execute({ name, email, password }: IRequest) {
    const customerExists = await this.customersRepository.findByEmail(email)

    if (customerExists)
      throw new AppError({
        statusCode: 409,
        code: 'ALREADY_EXISTS',
        message: 'Customer already registered',
      })

    const customer = await this.customersRepository.create({
      name,
      email,
      password,
    })

    return CustomerMap.toDomain(customer)
  }
}
