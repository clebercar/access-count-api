import { Router } from 'express'

import { CustomersController } from '../controllers/CustomersController'
import { CreateCustomersValidator } from '../validators/CreateCustomersValidator'

const customersRouter = Router()
const customersController = new CustomersController()

customersRouter.post(
  '/',
  CreateCustomersValidator.validate,
  customersController.create
)

customersRouter.get('/:id', customersController.show)

export default customersRouter
