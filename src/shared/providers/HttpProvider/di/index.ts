import { container } from 'tsyringe'

import { IHttpProvider, HttpProvider } from '../interfaces/IHttpProvider'
import { AxiosProvider } from '../implementations/AxiosProvider'

container.registerSingleton<IHttpProvider>(HttpProvider, AxiosProvider)
