interface IRequestOptions {
  headers?: {
    [key: string]: string
  }
}

export default interface IParamsRequestDTO {
  url: string
  data?: {
    [key: string]: string | string[]
  }
  options?: IRequestOptions
}
