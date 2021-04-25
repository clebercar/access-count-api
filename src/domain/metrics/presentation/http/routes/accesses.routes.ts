import { Router } from 'express'

import { AccessesController } from '../controllers/AccessesController'

const accessesRouter = Router()
const accessesController = new AccessesController()

accessesRouter.get('/', accessesController.index)
accessesRouter.post('/', accessesController.create)

export default accessesRouter
