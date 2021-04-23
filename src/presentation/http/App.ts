import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import '@shared/di'

import cors from 'cors'
import routes from './routes'
import express, { Express, Response } from 'express'
import globalHandlingErrors from './middlewares/globalHandlingErrors'

class App {
  public readonly app: Express

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.app.use(
      cors({
        origin: '*',
        optionsSuccessStatus: 200,
      })
    )

    this.setupRoutes()
    this.setupErrors()
  }

  private setupRoutes() {
    this.app.get('/v1/status', (_, res: Response) => {
      res.json({
        timestamp: new Date(),
      })
    })

    this.app.use(routes)
  }

  private setupErrors() {
    this.app.use(globalHandlingErrors)
  }

  public listen() {
    const port = process.env.PORT || 80

    this.app.listen(port, async () => {
      console.log(`⚡ Server running on port ${port}`)
    })
  }
}

export default new App()
