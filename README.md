<h1 align="center">
    <img alt="access count api" src="https://res.cloudinary.com/clebercarvalho-dev/image/upload/v1619403511/imagens%20de%20resposit%C3%B3rios/abacus_kqgwlq.png" />
    <br>
    ACCESS COUNT API
</h1>


## :rocket: Tecnologias

Este projeto foi construído utilizando as seguintes tecnologias:

-  [NodeJS](https://nodejs.org/en/)
-  [Typscript](https://www.typescriptlang.org/)
-  [Express](https://expressjs.com/pt-br/)
-  [Docker](https://docs.docker.com/get-docker/)
-  [Docker Compose](https://docs.docker.com/compose/gettingstarted/)

## :information_source: Como utilizar

Para executar essa aplicação, você irá precisar do NodeJS em sua versão 14 ou superior.
Caso queira utilizar o banco de dados(MongoDB) de forma local será necessário ter o [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/) instalados em seu computador.

- ### 📦 Instalando pacotes
  - Este projeto utiliza o `npm` como gerenciador de pacotes, sendo assim, para instalar suas depêncidas basta executar o comando `npm install`.

- ### 📃 Utilizando o MongoDB localmente
  - Este projeto possibilita rodar um banco de dados mongodb atráves do arquivo docker-compose.yml, para isso execute o comando `docker-compose up`
- ### 🧱 Inicializando a aplicação em modo de desenvolvimento
  - `npm run dev`
  > Antes de executar o comando acima, renomeie o arquivo .`env.sample` para `.env`. Nele se encontram todas as configurações necessárias para executar o projeto, porém lembre-se de antes iniciar o serviço do MongoDB que se encontra no docker-compose.yml.

- ### 🃏 Executando os testes
  - `npm run test`

- ### 📝 Documentação de endpoints
  - Uma vez que a variável ambiente `ENABLE_DOCS` tem seu valor como sendo `TRUE` é possível ter acesso a uma documetação em Swagger na rota `/v1/docs`

- ### 🏗️ Gerando build de produção
  - `npm run build`

- ### 🚆 Executando o build de produção localmente
  - `npm start`

## 🔑 Variáveis de ambiente

| Variable            | Description                                 | Default value |
| --------            | -----------                                 | ------------- |
| `PORT`              | HTTP port                                   | `8080`        |
| `APP_SECRET`        | Secret to generate tokens                   | -             |
|`MONGO_URL`          | MongoDB string connection                   | `mongodb://localhost:27017/access-count-api`
|`COUNT_API_URL`       | API to count accesses                       | `https://api.countapi.xyz`
|`COUNT_API_NAMESPACE` | Targe site to count acceses                 | `ton.com.br`
|`COUNT_API_SECRET_KEY`| secret key to isolate data from a namespace | -
|`ENABLE_DOCS`         | Enable Swagger visualization                |  `TRUE`

---

Feito por [Cleber Carvalho](https://www.linkedin.com/in/cleber-carvalho/)
