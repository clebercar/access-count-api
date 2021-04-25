import { Router } from 'express'
import customersRouter from '@domain/customers/presentation/http/routes/customers.routes'
import accessesRouter from '@domain/metrics/presentation/http/routes/accesses.routes'

const routes = Router()

routes.use('/v1/customers', customersRouter)
routes.use('/v1/accesses', accessesRouter)

export default routes
