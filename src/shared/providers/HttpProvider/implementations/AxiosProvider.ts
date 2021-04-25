import { IHttpProvider } from '../interfaces/IHttpProvider'
import IParamsRequestDTO from '../dtos/IParamsRequestDTO'

import axios, { AxiosInstance, AxiosResponse } from 'axios'

export class AxiosProvider implements IHttpProvider {
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      timeout: 10000,
      responseType: 'json',
    })
  }

  public get<Response>(params: IParamsRequestDTO): Promise<Response> {
    return this.http
      .get<Response>(params.url, params.options)
      .then(this.getData)
  }

  public post<Response>({
    url,
    data,
    options,
  }: IParamsRequestDTO): Promise<Response> {
    return this.http.post(url, data, options).then(this.getData)
  }

  public delete<Response>({
    url,
    options,
  }: IParamsRequestDTO): Promise<Response> {
    return this.http.delete(url, options).then(this.getData)
  }

  public put<Response>({
    url,
    data,
    options,
  }: IParamsRequestDTO): Promise<Response> {
    return this.http.put(url, data, options).then(this.getData)
  }

  public patch<Response>({
    url,
    data,
    options,
  }: IParamsRequestDTO): Promise<Response> {
    return this.http.patch(url, data, options).then(this.getData)
  }

  private getData<Response>(response: AxiosResponse<Response>): Response {
    return response.data
  }
}
