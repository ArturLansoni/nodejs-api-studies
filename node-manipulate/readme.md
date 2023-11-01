# API NodeJS Manipulate

Este documento fornece uma visão geral das rotas disponíveis na API NodeJS.

## Rotas da API

A API utiliza as seguintes rotas:


### GET /client

Esta rota é usada para recuperar uma lista de todas os clientes.

Exemplo de uso:

```bash
curl -H "token: your_token" http://localhost:{API_PORT}/client
```

### POST /client

Esta rota é usada para criar um novo cliente. O corpo da solicitação deve conter as informações necessárias para criar o cliente.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -H "token: your_token" -d '{ "name": "String", "email":"String", "age": 1, "cpf": "String", "phone": "String", "username": "String" }' http://localhost:{API_PORT}/client
```

### PUT /client/:id

Esta rota é usada para atualizar os detalhes de um cliente específico. O parâmetro `:id` na URL deve ser substituído pelo ID do cliente a ser atualizado. O corpo da solicitação deve conter as informações atualizadas.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -H "token: your_token" -d '{ "name": "String", "age": 1, "phone": "String" }' http://localhost:{API_PORT}/client/{clientId}
```

### DELETE /client/:id

Esta rota é usada para excluir um cliente específico. O parâmetro `:id` na URL deve ser substituído pelo ID do cliente a ser excluído.

Exemplo de uso:

```bash
curl -X DELETE -H "token: your_token" http://localhost:{API_PORT}/client/{clientId}
```

## Getting Started

Para começar com esta API, clone o repositório e instale as dependências necessárias usando o npm:

```bash
cd node-manipulate
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

