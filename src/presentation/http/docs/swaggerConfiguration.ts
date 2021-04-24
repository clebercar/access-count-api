import YAML from 'yamljs'
import { join } from 'path'
import { Express } from 'express'
import SwaggerUI from 'swagger-ui-express'

export function swaggerConfiguration(application: Express) {
  if (process.env.ENABLE_DOCS) {
    application.use('/v1/docs', SwaggerUI.serve)

    application.get(
      '/v1/docs',
      SwaggerUI.setup(YAML.load(join(__dirname, 'index.yaml')))
    )
  }
}
