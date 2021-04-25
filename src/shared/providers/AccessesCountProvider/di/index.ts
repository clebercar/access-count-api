import { container } from 'tsyringe'

import {
  AccessesCountProviderSym,
  IAccessesCountProvider,
} from '../interfaces/IAccessesCountProvider'
import { CountAPIProvider } from '../implementations/CountAPIProvider'

container.registerSingleton<IAccessesCountProvider>(
  AccessesCountProviderSym,
  CountAPIProvider
)
