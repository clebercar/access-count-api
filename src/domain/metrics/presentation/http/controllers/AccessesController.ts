import { container } from 'tsyringe'
import { Request, Response } from 'express'
import { IncrementAccessesService } from '@domain/metrics/services/IncrementAccessesService'
import { TotalNumberOfAccessesService } from '@domain/metrics/services/TotalNumberOfAccessesService'

export class AccessesController {
  public async create(request: Request, response: Response) {
    const incrementAccessesService = container.resolve(IncrementAccessesService)

    await incrementAccessesService.execute()

    return response.sendStatus(201)
  }

  public async index(request: Request, response: Response) {
    const totalNumberOfAccessesService = container.resolve(
      TotalNumberOfAccessesService
    )

    const total = await totalNumberOfAccessesService.execute()

    return response.json({ total })
  }
}
