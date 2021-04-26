import RateLimit from 'express-rate-limit'
import MongoStore from 'rate-limit-mongo'

let configs: Partial<RateLimit.Options> = {
  max: 1000,
}

if (process.env.NODE_ENV !== 'test') {
  configs = {
    store: new MongoStore({
      uri: process.env.MONGO_URL,
      expireTimeMs: 60000,
      errorHandler: console.error.bind(null, 'rate-limit-mongo'),
    }),
    max: 10,
    windowMs: 60000,
    message:
      'Too many requests created from this IP, please try again after an minute',
  }
}

export default RateLimit(configs)
