import { TotalNumberOfAccessesService } from './TotalNumberOfAccessesService'
import { FakeAccessesCountProvider } from '@shared/providers/AccessesCountProvider/fakes/FakeAccessesCountProvider'

describe('Given TotalNumberOfAccessesService', () => {
  let subject: number

  let totalNumberOfAccessesService: TotalNumberOfAccessesService
  let fakeAccessesCountProvider: FakeAccessesCountProvider

  beforeEach(async () => {
    fakeAccessesCountProvider = new FakeAccessesCountProvider()

    totalNumberOfAccessesService = new TotalNumberOfAccessesService(
      fakeAccessesCountProvider
    )

    jest.spyOn(fakeAccessesCountProvider, 'totalNumberOfAccesses')

    subject = await totalNumberOfAccessesService.execute()
  })

  it('should be able to call method totalNumberOfAccesses from AccessesCountProvider', () => {
    expect(
      fakeAccessesCountProvider.totalNumberOfAccesses
    ).toHaveBeenCalledWith()
  })

  it('should be able to return total number of accesses', () => {
    expect(subject).toEqual(1)
  })
})
