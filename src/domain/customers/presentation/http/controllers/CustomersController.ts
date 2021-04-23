import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { CreateCustomerService } from '@domain/customers/services/CreateCustomerService'

export class CustomersController {
  public async create(response: Response, request: Request) {
    const { name, email, password } = request.body

    const createCustomerService = container.resolve(CreateCustomerService)

    const customer = await createCustomerService.execute({
      name,
      email,
      password,
    })

    return response.json(customer).sendStatus(201)
  }
}
