# API NodeJS Auth

Este documento fornece uma visão geral das rotas disponíveis na API NodeJS.

## Rotas da API

A API utiliza as seguintes rotas:

### POST /user

Esta rota é usada para criar um novo usuário. O corpo da solicitação deve conter as informações necessárias para criar o usuário.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{ "name": "String", "email":"String", "password": "String", "age": 1, "cpf": "String", "phone": "String", "username": "String" }' http://localhost:{API_PORT}/user
```

### POST /user/login

Esta rota é usada para realizar o login. O corpo da solicitação deve conter as informações necessárias para logar o usuário.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d '{ "email": "String", "password": "String" }' http://localhost:{API_PORT}/user/login
```

### PUT /user/password/:id

Esta rota é usada para atualizar a senha de um usuário específico. O parâmetro `:id` na URL deve ser substituído pelo ID do usuário a ser atualizado. O corpo da solicitação deve conter as informações atualizadas.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -H "token: your_token" -d '{ "password": "String" }' http://localhost:{API_PORT}/user/password/{userId}
```

## Getting Started

Para começar com esta API, clone o repositório e instale as dependências necessárias usando o npm:

```bash
cd node-auth
npm install
```

Em seguida, crie um arquivo `.env` na raiz do seu projeto e adicione as seguintes variáveis de ambiente:

```bash
MONGO_URI=mongodb+srv://{username}:{password}@cluster0.wnpytkh.mongodb.net/{cluster}?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
HOST_NAME=your_host_name
PORT=3000
```

Em seguida, inicie o servidor:

```bash
npm run dev
```

O servidor será iniciado, e a API estará disponível em `http://localhost:{PORT}`.

## Testando as Rotas

Para testar as rotas, você pode usar uma ferramenta como o [Postman](https://www.postman.com/). Os exemplos acima usam curl.

Observe que a implementação real dessas rotas dependerá dos requisitos específicos da sua aplicação e da configuração do banco de dados. Os exemplos fornecidos aqui são básicos e podem precisar ser ajustados para atender às suas necessidades.

