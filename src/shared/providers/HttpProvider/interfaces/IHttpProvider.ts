import IParamsRequestDTO from '../dtos/IParamsRequestDTO'

const HttpProvider = Symbol('HttpProvider')

interface IHttpProvider {
  get<Response>(params: IParamsRequestDTO): Promise<Response>
  post<Response>(params: IParamsRequestDTO): Promise<Response>
  put<Response>(params: IParamsRequestDTO): Promise<Response>
  patch<Response>(params: IParamsRequestDTO): Promise<Response>
  delete<Response>(params: IParamsRequestDTO): Promise<Response>
}

export { IHttpProvider, HttpProvider }
