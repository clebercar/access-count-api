import { inject, injectable } from 'tsyringe'
import {
  IIncrementNamspaceVisits,
  INamespaceInfo,
} from '../types/CountAPITypes'
import { IAccessesCountProvider } from '../interfaces/IAccessesCountProvider'

import {
  IHttpProvider,
  HttpProvider,
} from '@shared/providers/HttpProvider/interfaces/IHttpProvider'

@injectable()
export class CountAPIProvider implements IAccessesCountProvider {
  private baseURL: string

  private namespace: string

  private secret: string

  constructor(
    @inject(HttpProvider)
    private httpRequestProvider: IHttpProvider
  ) {
    if (!process.env.COUNT_API_URL)
      throw new Error('Variable COUNT_API_URL has not been defined')

    if (!process.env.COUNT_API_NAMESPACE)
      throw new Error('Variable COUNT_API_NAMESPACE has not been defined')

    if (!process.env.COUNT_API_SECRET_KEY)
      throw new Error('Variable COUNT_API_SECRET_KEY has not been defined')

    this.baseURL = process.env.COUNT_API_URL
    this.namespace = process.env.COUNT_API_NAMESPACE
    this.secret = process.env.COUNT_API_SECRET_KEY
  }

  public async totalNumberOfAccesses(): Promise<number> {
    const { value } = await this.httpRequestProvider.get<INamespaceInfo>({
      url: `${this.baseURL}/info/${this.namespace}/${this.secret}`,
    })

    return value
  }

  public async incrementAccesses(): Promise<void> {
    await this.httpRequestProvider.get<IIncrementNamspaceVisits>({
      url: `${this.baseURL}/hit/${this.namespace}/${this.secret}`,
    })
  }
}
