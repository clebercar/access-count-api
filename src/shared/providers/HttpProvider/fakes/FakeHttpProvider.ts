import IParamsRequestDTO from '../dtos/IParamsRequestDTO'
import { IHttpProvider } from '../interfaces/IHttpProvider'

export class FakeHttpProvider implements IHttpProvider {
  public async get<T>(params: IParamsRequestDTO): Promise<T> {
    return new Promise((resolve, reject) => {
      if (params.url) resolve({} as T)

      reject()
    })
  }

  public async post<T>(params: IParamsRequestDTO): Promise<T> {
    return new Promise((resolve, reject) => {
      if (params.url && params.data) resolve({} as T)

      reject()
    })
  }

  public async put<T>(params: IParamsRequestDTO): Promise<T> {
    return new Promise((resolve, reject) => {
      if (params.url && params.data) resolve({} as T)

      reject()
    })
  }

  public async patch<T>(params: IParamsRequestDTO): Promise<T> {
    return new Promise((resolve, reject) => {
      if (params.url && params.data) resolve({} as T)

      reject()
    })
  }

  public async delete<T>(params: IParamsRequestDTO): Promise<T> {
    return new Promise((resolve, reject) => {
      if (params.url) resolve({} as T)

      reject()
    })
  }
}
