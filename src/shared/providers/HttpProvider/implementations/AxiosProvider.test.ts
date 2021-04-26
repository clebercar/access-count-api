const axiosMethods = {
  put: () => Promise.resolve(jest.fn),
  get: () => Promise.resolve(jest.fn),
  delete: () => Promise.resolve(jest.fn),
  post: () => Promise.resolve(jest.fn),
  patch: () => Promise.resolve(jest.fn),
}

jest.mock('axios', () => ({
  create: () => axiosMethods,
}))

import { AxiosProvider } from './AxiosProvider'

describe('Given CountAPIProvider', () => {
  const axiosProvider = new AxiosProvider()

  describe('when call method get', () => {
    jest.spyOn(axiosMethods, 'get')

    it('should be able to call method get from axios', async () => {
      await axiosProvider.get({ url: 'http://test.com' })

      expect(axiosMethods.get).toBeCalled()
    })
  })

  describe('when call method post', () => {
    jest.spyOn(axiosMethods, 'post')

    it('should be able to call method post from axios', async () => {
      await axiosProvider.post({ url: 'http://test.com' })

      expect(axiosMethods.post).toBeCalled()
    })
  })

  describe('when call method delete', () => {
    jest.spyOn(axiosMethods, 'delete')

    it('should be able to call method delete from axios', async () => {
      await axiosProvider.delete({ url: 'http://test.com' })

      expect(axiosMethods.delete).toBeCalled()
    })
  })

  describe('when call method put', () => {
    jest.spyOn(axiosMethods, 'put')

    it('should be able to call method put from axios', async () => {
      await axiosProvider.put({ url: 'http://test.com' })

      expect(axiosMethods.put).toBeCalled()
    })
  })

  describe('when call method patch', () => {
    jest.spyOn(axiosMethods, 'patch')

    it('should be able to call method patch from axios', async () => {
      await axiosProvider.patch({ url: 'http://test.com' })

      expect(axiosMethods.patch).toBeCalled()
    })
  })
})
