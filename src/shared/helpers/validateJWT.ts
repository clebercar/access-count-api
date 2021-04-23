import { TokenExpiredError, JsonWebTokenError, verify } from 'jsonwebtoken'

import authConfig from '@config/jwt'
import { AppError } from '@presentation/http/errors/AppError'

interface TokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function validateJWT(token: string): TokenPayload {
  try {
    const decoded = verify(token, authConfig.jwt.secret)
    const { exp, iat, sub } = decoded as TokenPayload

    return {
      exp,
      iat,
      sub,
    }
  } catch (error) {
    if (error instanceof TokenExpiredError)
      throw new AppError({ message: 'Ops! Token expirado.', statusCode: 401 })

    if (error instanceof JsonWebTokenError)
      throw new AppError({ message: 'Ops! Token inválido.', statusCode: 401 })

    throw new Error(error)
  }
}
