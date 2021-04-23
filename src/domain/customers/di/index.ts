import { container } from 'tsyringe'

import {
  CustomersRepositorySym,
  ICustomersRepository,
} from '../infra/repositories/ICustomersRepository'
import { CustomersRepository } from '../infra/typeorm/repositories/CustomersRepository'

container.registerSingleton<ICustomersRepository>(
  CustomersRepositorySym,
  CustomersRepository
)
