import { container } from 'tsyringe'
import request, { Response } from 'supertest'
import { application } from '@presentation/http/App'
import { CreateCustomerService } from '@domain/customers/services/CreateCustomerService'
import { FakeCustomerRepository } from '@domain/customers/infra/repositories/fakes/FakeCustomerRepository'

describe('Given CustomersController', () => {
  const fakeCustomerRepository = new FakeCustomerRepository()

  describe('POST /v1/customers', () => {
    beforeAll(async () => {
      jest
        .spyOn(container, 'resolve')
        .mockImplementation(
          () => new CreateCustomerService(fakeCustomerRepository)
        )
    })

    describe('when the customer is successfully created', () => {
      let subject: Response

      beforeAll(async () => {
        subject = await request(application).post('/v1/customers').send({
          name: 'Mr. Customer',
          email: 'mrcustomer@contact.com',
          password: '12345678',
        })
      })

      it('should be able to status 201', async () => {
        expect(subject.status).toBe(201)
      })

      it('should be able to return customer created', async () => {
        const { id, email, name } = subject.body

        expect(id).toBeDefined()
        expect(name).toBeDefined()
        expect(email).toBeDefined()
      })
    })

    describe('when the customer already exists', () => {
      let subject: Response

      beforeAll(async () => {
        const customerParameters = {
          name: 'Mr. Customer',
          email: 'mrcustomer@contact.com',
          password: '12345678',
        }

        await fakeCustomerRepository.create(customerParameters)

        subject = await request(application)
          .post('/v1/customers')
          .send(customerParameters)
      })

      it('should be able to status 409', () => {
        expect(subject.status).toEqual(409)
      })

      it('should be able to return message error', () => {
        expect(subject.body.message).toEqual('Customer already registered')
      })

      it('should be able to return code type', () => {
        expect(subject.body.code).toEqual('ALREADY_EXISTS')
      })
    })
  })
})
