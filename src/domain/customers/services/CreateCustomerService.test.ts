import { AppError } from '@presentation/http/errors/AppError'

import { CreateCustomerService } from './CreateCustomerService'
import { FakeCustomerRepository } from '../infra/repositories/fakes/FakeCustomerRepository'

describe('Given CreateCustomerService', () => {
  let createcustomerService: CreateCustomerService
  let fakeCustomerRepository: FakeCustomerRepository

  beforeEach(async () => {
    fakeCustomerRepository = new FakeCustomerRepository()
    createcustomerService = new CreateCustomerService(fakeCustomerRepository)
  })

  describe('when the customer is successfully created', () => {
    it('should be able to create a new user', async () => {
      const user = await createcustomerService.execute({
        name: 'Mr. Customer',
        email: 'mrcustomer@contact.com',
        password: '12345678',
      })

      expect(user).toHaveProperty('id')
    })
  })

  describe('when already exists a customer with same email', () => {
    it('should not be able to create a new customer with same email', async () => {
      await createcustomerService.execute({
        name: 'Mr. Customer',
        email: 'mrcustomer@contact.com',
        password: '12345678',
      })

      await expect(
        createcustomerService.execute({
          name: 'Mr. Customer',
          email: 'mrcustomer@contact.com',
          password: '12345678',
        })
      ).rejects.toBeInstanceOf(AppError)
    })
  })
})
