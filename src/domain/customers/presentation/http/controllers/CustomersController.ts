import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateCustomerService } from '@domain/customers/services/CreateCustomerService'
import { CustomerProfileService } from '@domain/customers/services/CustomerProfileService'

export class CustomersController {
  public async create(request: Request, response: Response) {
    const { name, email, password } = request.body

    const createCustomerService = container.resolve(CreateCustomerService)

    const customer = await createCustomerService.execute({
      name,
      email,
      password,
    })

    return response.status(201).json(customer)
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params

    const customerProfileService = container.resolve(CustomerProfileService)

    const customer = await customerProfileService.execute(id)

    return response.json(customer)
  }
}
