import { AppError } from './AppError'

describe('Given class AppError', () => {
  describe('when informed a message', () => {
    it('should return correct message with status code default', () => {
      const subject = new AppError({ message: 'message-error' })

      expect(subject.message).toEqual('message-error')
      expect(subject.statusCode).toEqual(400)
    })
  })

  describe('when informed message, statusCode and code', () => {
    it('should be able to return correct error', () => {
      const subject = new AppError({
        statusCode: 401,
        message: 'message-error',
        code: 'UNAUTHORIZED',
      })

      expect(subject.message).toEqual('message-error')
      expect(subject.code).toEqual('UNAUTHORIZED')
      expect(subject.statusCode).toEqual(401)
    })
  })
})
