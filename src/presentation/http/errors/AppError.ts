export enum ECode {
  NOT_FOUND,
  UNAUTHORIZED,
  ALREADY_EXISTS,
  APPLICATION_ERROR,
  INVALID_PARAMETERS,
}

interface IAppError {
  message: string
  statusCode?: number
  code?: keyof typeof ECode
}

export class AppError {
  public readonly code: string

  public readonly message: string

  public readonly statusCode: number

  constructor({
    message,
    statusCode = 400,
    code = 'APPLICATION_ERROR',
  }: IAppError) {
    this.code = code
    this.message = message
    this.statusCode = statusCode
  }
}
