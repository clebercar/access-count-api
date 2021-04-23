import DynamoDBClient from '../DynamoDBClient'

export class CreateCustomers {
  static async execute() {
    try {
      const tables = await DynamoDBClient.listTables()

      if (!tables?.includes('customers')) {
        await DynamoDBClient.connection
          .createTable({
            TableName: 'customers',
            KeySchema: [
              {
                AttributeName: 'id',
                KeyType: 'HASH',
              },
              {
                AttributeName: 'email',
                KeyType: 'RANGE',
              },
            ],
            AttributeDefinitions: [
              {
                AttributeName: 'id',
                AttributeType: 'S',
              },
              {
                AttributeName: 'email',
                AttributeType: 'S',
              },
            ],
            ProvisionedThroughput: {
              ReadCapacityUnits: 5,
              WriteCapacityUnits: 5,
            },
          })
          .promise()

        console.log('Table customers has been created.')
      }
    } catch (error) {
      console.error(
        'An error occurred while creating the table customers.',
        error
      )
    }
  }
}
