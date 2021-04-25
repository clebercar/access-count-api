import { injectable, inject } from 'tsyringe'
import {
  AccessesCountProviderSym,
  IAccessesCountProvider,
} from '@shared/providers/AccessesCountProvider/interfaces/IAccessesCountProvider'

@injectable()
export class TotalNumberOfAccessesService {
  constructor(
    @inject(AccessesCountProviderSym)
    private accessesCountProvider: IAccessesCountProvider
  ) {}

  public async execute(): Promise<number> {
    return this.accessesCountProvider.totalNumberOfAccesses()
  }
}
