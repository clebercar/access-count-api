import { Router } from 'express'
import customersRouter from '@domain/customers/presentation/http/routes/customers.routes'

const routes = Router()

routes.use('/v1/customers', customersRouter)

export default routes
