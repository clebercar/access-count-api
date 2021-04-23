let entities = ["./src/domain/**/infra/typeorm/schemas/*.ts"]

if(process.env.NODE_ENV === 'production')
  entities = ["./dist/domain/**/infra/typeorm/schemas/*.js"]

module.exports = {
  name: "default",
  type: "mongodb",
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  useUnifiedTopology: true,
  entities
}
