import { AppError } from '@presentation/http/errors/AppError'

import { CustomerProfileService } from './CustomerProfileService'
import { FakeCustomerRepository } from '../infra/repositories/fakes/FakeCustomerRepository'

describe('UpdateProfile', () => {
  let customerProfileService: CustomerProfileService
  let fakeCustomerRepository: FakeCustomerRepository

  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository()
    customerProfileService = new CustomerProfileService(fakeCustomerRepository)
  })

  describe('when customer exists', () => {
    it('should be able return customer profile', async () => {
      const customer = await fakeCustomerRepository.create({
        name: 'Mr. Customer',
        email: 'mrcustomer@contact.com',
        password: '12345678',
      })

      const result = await customerProfileService.execute(String(customer.id))

      expect(result).toEqual(
        expect.objectContaining({
          id: String(customer.id),
          name: customer.name,
          email: customer.email,
        })
      )
    })
  })

  describe('when customer doest not exists', () => {
    it('should be able to return an error when the client does not exist', async () => {
      await expect(
        customerProfileService.execute('non-existing-customer-id')
      ).rejects.toBeInstanceOf(AppError)
    })
  })
})
