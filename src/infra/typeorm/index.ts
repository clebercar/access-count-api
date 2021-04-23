import { createConnection } from 'typeorm'

createConnection()
  .then(async () => {
    console.log('💾 Database connected.')
  })
  .catch((error) => console.log(error))
