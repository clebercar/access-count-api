import { IncrementAccessesService } from './IncrementAccessesService'
import { FakeAccessesCountProvider } from '@shared/providers/AccessesCountProvider/fakes/FakeAccessesCountProvider'

describe('Given IncrementAccessesService', () => {
  let incrementAccessesService: IncrementAccessesService
  let fakeAccessesCountProvider: FakeAccessesCountProvider

  beforeEach(async () => {
    fakeAccessesCountProvider = new FakeAccessesCountProvider()

    incrementAccessesService = new IncrementAccessesService(
      fakeAccessesCountProvider
    )

    jest.spyOn(fakeAccessesCountProvider, 'incrementAccesses')
  })

  it('should be able to call method incrementAccesses from AccessesCountProvider', async () => {
    await incrementAccessesService.execute()

    expect(fakeAccessesCountProvider.incrementAccesses).toHaveBeenCalledWith()
  })
})
