import { CountAPIProvider } from './CountAPIProvider'
import { FakeHttpProvider } from '../../HttpProvider/fakes/FakeHttpProvider'

describe('Given CountAPIProvider', () => {
  describe('when call method totalNumberOfAccesses', () => {
    let result: number
    let countAPIProvider: CountAPIProvider
    let fakeHttpProvider: FakeHttpProvider

    beforeEach(async () => {
      process.env = Object.assign(process.env, {
        COUNT_API_URL: 'https://fake.countapi.com',
        COUNT_API_NAMESPACE: 'random-namespace',
        COUNT_API_SECRET_KEY: 'random-secret',
      })

      fakeHttpProvider = new FakeHttpProvider()
      countAPIProvider = new CountAPIProvider(fakeHttpProvider)

      jest.spyOn(fakeHttpProvider, 'get').mockResolvedValueOnce({ value: 1 })
      result = await countAPIProvider.totalNumberOfAccesses()
    })

    it('should be able to call method get from HttpRequestProvider', () => {
      expect(fakeHttpProvider.get).toBeCalled()
    })

    it('should be able to return total number off accesses', () => {
      expect(result).toEqual(1)
    })
  })

  describe('when call method incrementAccesses', () => {
    let countAPIProvider: CountAPIProvider
    let fakeHttpProvider: FakeHttpProvider

    beforeEach(async () => {
      fakeHttpProvider = new FakeHttpProvider()
      countAPIProvider = new CountAPIProvider(fakeHttpProvider)

      jest.spyOn(fakeHttpProvider, 'get')
      await countAPIProvider.incrementAccesses()
    })

    it('should be able to call method get from HttpRequestProvider', () => {
      expect(fakeHttpProvider.get).toBeCalled()
    })
  })

  describe('when the required environment variables have not been defined', () => {
    const fakeHttpProvider = new FakeHttpProvider()

    it('should be able to return an error when COUNT_API_URL is undefined', () => {
      delete process.env.COUNT_API_URL

      expect(() => {
        new CountAPIProvider(fakeHttpProvider)
      }).toThrow('Variable COUNT_API_URL has not been defined')
    })

    it('should be able to return an error when COUNT_API_NAMESPACE is undefined', () => {
      Object.assign(process.env, {
        COUNT_API_URL: 'https://fake.countapi.com',
      })

      delete process.env.COUNT_API_NAMESPACE

      expect(() => {
        new CountAPIProvider(fakeHttpProvider)
      }).toThrowError('Variable COUNT_API_NAMESPACE has not been defined')
    })

    it('should be able to return an error when COUNT_API_SECRET_KEY is undefined', () => {
      process.env = Object.assign(process.env, {
        COUNT_API_URL: 'https://fake.countapi.com',
        COUNT_API_NAMESPACE: 'random-namespace',
      })

      delete process.env.COUNT_API_SECRET_KEY

      expect(() => {
        new CountAPIProvider(fakeHttpProvider)
      }).toThrowError('Variable COUNT_API_SECRET_KEY has not been defined')
    })
  })
})
