import { v4 } from 'uuid'
import bcrypt from 'bcrypt'

export class Customer {
  private readonly id: string

  constructor(
    private readonly name: string,

    private readonly email: string,

    private readonly password: string
  ) {
    this.id = v4()
    this.password = bcrypt.hashSync(password, 8)
  }
}
