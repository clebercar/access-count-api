import { IAccessesCountProvider } from '../interfaces/IAccessesCountProvider'

export class FakeAccessesCountProvider implements IAccessesCountProvider {
  public async totalNumberOfAccesses(): Promise<number> {
    return 1
  }

  public async incrementAccesses(): Promise<void> {
    return
  }
}
