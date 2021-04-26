const AppMock = {
  bootstrap: () => 'opa',
  application: () => jest.fn,
}

jest.mock('@infra/typeorm', () => jest.fn)
jest.mock('./presentation/http/App', () => AppMock)

describe('Given file to start server http', () => {
  beforeEach(async () => {
    jest.spyOn(AppMock, 'bootstrap')

    await import('./index')
  })

  it('should be able to call method bootstrap from App', async () => {
    expect(AppMock.bootstrap).toBeCalled()
  })
})
