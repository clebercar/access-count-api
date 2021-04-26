import { container } from 'tsyringe'
import request, { Response } from 'supertest'
import App from '@presentation/http/App'
import { IncrementAccessesService } from '@domain/metrics/services/IncrementAccessesService'
import { TotalNumberOfAccessesService } from '@domain/metrics/services/TotalNumberOfAccessesService'
import { FakeAccessesCountProvider } from '@shared/providers/AccessesCountProvider/fakes/FakeAccessesCountProvider'

describe('Given AccessesController', () => {
  describe('POST /v1/accesses', () => {
    describe('when is incremented a new access with successfully', () => {
      let subject: Response

      beforeAll(async () => {
        jest
          .spyOn(container, 'resolve')
          .mockImplementationOnce(
            () => new IncrementAccessesService(new FakeAccessesCountProvider())
          )

        subject = await request(App.application).post('/v1/accesses')
      })

      it('should be able to status 201', async () => {
        expect(subject.status).toBe(201)
      })
    })
  })

  describe('GET /v1/accesses', () => {
    beforeAll(async () => {
      jest
        .spyOn(container, 'resolve')
        .mockImplementationOnce(
          () =>
            new TotalNumberOfAccessesService(new FakeAccessesCountProvider())
        )
    })

    describe('when solicited the number total of accesses', () => {
      let subject: Response

      beforeAll(async () => {
        subject = await request(App.application).get(`/v1/accesses`)
      })

      it('should be able to status 200', () => {
        expect(subject.status).toBe(200)
      })

      it('should be able to return the number total of accesses', () => {
        expect(subject.body.total).toBeDefined()
      })
    })
  })
})
