import { Request, Response } from 'express'
import { AppError } from '@/presentation/http/errors/AppError'

import { CreateCustomersValidator } from './CreateCustomersValidator'

describe('Given CreateCustomersValidator  ', () => {
  const responseMock = {} as Response
  const nextMock = jest.fn()

  describe('when all fields are informed', () => {
    const requestMock = {
      body: {
        name: 'Jhon Doe',
        email: 'jhon@contact.com',
        password: '12345678',
      },
    } as Request

    it('should be able to call next function', async () => {
      await CreateCustomersValidator.validate(
        requestMock,
        responseMock,
        nextMock
      )

      expect(nextMock).toBeCalledTimes(1)
    })
  })

  describe('when the password is less than 8 characters', () => {
    const requestMock = {
      body: {
        name: 'Jhon Doe',
        email: 'jhon@contact.com',
        password: '1234567',
      },
    } as Request

    it('should be able to return an throw error', async () => {
      await expect(
        CreateCustomersValidator.validate(requestMock, responseMock, nextMock)
      ).rejects.toBeInstanceOf(AppError)
    })
  })
})
