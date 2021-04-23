import { AppError } from '../errors/AppError'
import { Request, Response, NextFunction } from 'express'

export default async function globalHandlingErrors(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      code: error.code,
      message: error.message,
    })
  }

  console.error('Internal server error:', error)

  return res.status(500).json({
    code: 'APPLICATION_ERROR',
    message: 'Internal server error.',
  })
}
