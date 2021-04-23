import bcrypt from 'bcrypt'
import {
  ObjectID,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ObjectIdColumn,
  BeforeInsert,
} from 'typeorm'

@Entity('customer')
export class Customer {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  create_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @BeforeInsert()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}
