import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import '@shared/di'

import cors from 'cors'
import routes from './routes'
import express, { Express, Response } from 'express'
import rateLimiter from './middlewares/rateLimiter'
import globalHandlingErrors from './middlewares/globalHandlingErrors'
import { swaggerConfiguration } from './docs/swaggerConfiguration'

class App {
  public readonly application: Express

  constructor() {
    this.application = express()
    this.application.use(express.json())
    this.application.use(
      cors({
        origin: '*',
        optionsSuccessStatus: 200,
      })
    )

    this.application.use(rateLimiter)
    this.setupRoutes()
    this.setupErrors()
  }

  private setupRoutes() {
    swaggerConfiguration(this.application)

    this.application.get('/v1/status', (_, res: Response) => {
      res.json({
        timestamp: new Date(),
      })
    })

    this.application.use(routes)
  }

  private setupErrors() {
    this.application.use(globalHandlingErrors)
  }

  public boostrap() {
    const port = process.env.PORT || 80

    this.application.listen(port, async () => {
      console.log(`⚡ Server running on port ${port}`)
    })
  }
}

const { application, boostrap } = new App()

export { application, boostrap }
