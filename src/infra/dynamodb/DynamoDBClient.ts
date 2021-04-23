import { DynamoDB } from 'aws-sdk'

export class DynamoDBClient {
  public readonly connection: DynamoDB

  constructor() {
    this.connection = new DynamoDB({
      endpoint: 'http://localhost:4566',
      region: process.env.AWS_REGION,
    })
  }

  async listTables() {
    const tables = await this.connection.listTables().promise()

    return tables.TableNames
  }
}

export default new DynamoDBClient()
