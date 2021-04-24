import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import '@shared/di'

import cors from 'cors'
import routes from './routes'
import express, { Express, Response } from 'express'
import globalHandlingErrors from './middlewares/globalHandlingErrors'

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

    this.setupRoutes()
    this.setupErrors()
  }

  private setupRoutes() {
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
