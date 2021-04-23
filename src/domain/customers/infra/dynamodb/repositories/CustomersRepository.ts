import DynamoDBClient from '@infra/dynamodb/DynamoDBClient'
import { Customer } from '@/domain/customers/entities/Customer'
import { ICreateCustomerDTO } from '@domain/customers/dtos/ICreateCustomerDTO'
import { ICustomersRepository } from '@domain/customers/infra/repositories/ICustomersRepository'

export class CustomersRepository implements ICustomersRepository {
  private database = DynamoDBClient.connection

  public async create({
    name,
    email,
    password,
  }: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer(name, email, password)

    await this.database
      .putItem({
        Item: { ...customer },
        TableName: 'customers',
      })
      .promise()

    return customer
  }

  public async findByEmail(email: string): Promise<Customer> {
    const customer = await this.database
      .getItem({
        TableName: 'customers',
        Key: {
          email: {
            S: email,
          },
        },
      })
      .promise()

    return new Customer('Jhon Doe', 'jhondoe@gmail.com', 'secret')
  }
}
