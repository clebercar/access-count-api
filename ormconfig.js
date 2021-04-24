let entities = ["./src/domain/**/infra/typeorm/schemas/*.ts"]

if(process.env.NODE_ENV === 'production')
  entities = ["./dist/domain/**/infra/typeorm/schemas/*.js"]

module.exports = {
  name: "default",
  type: "mongodb",
  url: process.env.MONGO_URL,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities
}
