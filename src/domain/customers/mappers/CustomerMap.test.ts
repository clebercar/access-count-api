import { CustomerMap } from './CustomerMap'
import { FakeCustomerRepository } from '../infra/repositories/fakes/FakeCustomerRepository'

describe('Given CustomerMap', () => {
  const fakeCustomerRepository = new FakeCustomerRepository()

  describe('when call method toDomain', () => {
    describe('and all fields has value', () => {
      it('should return the customer mapped to domain', async () => {
        const customer = await fakeCustomerRepository.create({
          email: 'contact@jhondoe.com',
          name: 'Jhon Doe',
          password: 'secret',
        })

        const result = CustomerMap.toDomain(customer)

        expect(result).toEqual(
          expect.objectContaining({
            id: String(customer.id),
            name: customer.name,
            email: customer.email,
          })
        )
      })
    })
  })
})
