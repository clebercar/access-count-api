import { injectable, inject } from 'tsyringe'

import {
  AccessesCountProviderSym,
  IAccessesCountProvider,
} from '@shared/providers/AccessesCountProvider/interfaces/IAccessesCountProvider'

@injectable()
export class IncrementAccessesService {
  constructor(
    @inject(AccessesCountProviderSym)
    private accessesCountProvider: IAccessesCountProvider
  ) {}

  public async execute(): Promise<void> {
    await this.accessesCountProvider.incrementAccesses()
  }
}
