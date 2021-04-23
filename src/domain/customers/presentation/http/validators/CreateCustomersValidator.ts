import * as Yup from 'yup'

import { Request, Response, NextFunction } from 'express'
import { AppError } from '@presentation/http/errors/AppError'

export class CreateCustomersValidator {
  public static async validate(
    request: Request,
    _response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string()
        .length(8, 'The password must be at least 8 characters.')
        .required(),
    })

    try {
      await schema.validateSync(request.body)
    } catch ({ errors }) {
      throw new AppError({
        message: errors,
        statusCode: 401,
        code: 'INVALID_PARAMETERS',
      })
    }

    next()
  }
}
