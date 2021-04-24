import { injectable, inject } from 'tsyringe'
import { CustomerMap } from '../mappers/CustomerMap'
import { AppError } from '@/presentation/http/errors/AppError'

import {
  CustomersRepositorySym,
  ICustomersRepository,
} from '../infra/repositories/ICustomersRepository'

@injectable()
export class CustomerProfileService {
  constructor(
    @inject(CustomersRepositorySym)
    private customersRepository: ICustomersRepository
  ) {}

  public async execute(id: string) {
    const customer = await this.customersRepository.findById(id)

    if (!customer)
      throw new AppError({
        statusCode: 404,
        code: 'NOT_FOUND',
        message: 'Customer not found',
      })

    return CustomerMap.toDomain(customer)
  }
}
