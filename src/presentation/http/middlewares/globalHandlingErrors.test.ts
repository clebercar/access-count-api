import { Request, Response } from 'express'

import { AppError } from '@presentation/http/errors/AppError'
import globalHandlingErrors from './globalHandlingErrors'

describe('Given Global Handling Errors middleware', () => {
  const responseMock = {
    json: (...args) => {
      args
    },
    status: function (_responseStatus) {
      return this
    },
  } as Response
  const nextMock = jest.fn()
  const requestMock = {} as Request

  describe('when occured an error of type AppError', () => {
    const error = new AppError({
      statusCode: 404,
      code: 'NOT_FOUND',
      message: 'Customer not found',
    })

    beforeEach(async () => {
      jest.spyOn(responseMock, 'json')
      jest.spyOn(responseMock, 'status')

      await globalHandlingErrors(error, requestMock, responseMock, nextMock)
    })

    it('should be able to return correct status code response', () => {
      expect(responseMock.status).toBeCalledWith(error.statusCode)
    })

    it('should be able to return correct json response', () => {
      expect(responseMock.json).toBeCalledWith({
        status: error.statusCode,
        code: error.code,
        message: error.message,
      })
    })
  })

  describe('when occured an unknown error', () => {
    const error = new Error('Occured an unknown error')

    beforeEach(async () => {
      jest.spyOn(responseMock, 'json')
      jest.spyOn(responseMock, 'status')
      jest.spyOn(console, 'error').mockImplementationOnce(() => jest.fn)

      await globalHandlingErrors(error, requestMock, responseMock, nextMock)
    })

    it('should be able to logging error', () => {
      expect(console.error).toBeCalledWith('Internal server error:', error)
    })

    it('should be able to return correct status code response', () => {
      expect(responseMock.status).toBeCalledWith(500)
    })

    it('should be able to return correct json response', () => {
      expect(responseMock.json).toBeCalledWith({
        status: 500,
        code: 'APPLICATION_ERROR',
        message: 'Internal server error',
      })
    })
  })
})
