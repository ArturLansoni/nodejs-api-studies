# API NodeJS Bank

Este documento fornece uma visão geral das rotas disponíveis na API NodeJS.

## Rotas da API

A API utiliza as seguintes rotas:


### GET /bank-account

Esta rota é usada para recuperar uma lista de todas as contas bancárias.

Exemplo de uso:

```bash
curl -H "token: your_token" http://localhost:{API_PORT}/bank-account
```

### GET /bank-account/:clientId

Esta rota é usada para recuperar detalhes de uma conta bancária específica usando o ID do cliente.

Exemplo de uso:

```bash
curl -H "token: your_token" http://localhost:{API_PORT}/bank-account/{clientId}
```

### POST /bank-account

Esta rota é usada para criar uma nova conta bancária. O corpo da solicitação deve conter as informações necessárias para criar a conta.

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -H "token: your_token" -d '{ "clientId": "String", "bank": "String", "type": "String", "username": "String", "limit": 1 }' http://localhost:{API_PORT}/bank-account
```

### PUT /bank-account/:id

Esta rota é usada para atualizar os detalhes de uma conta bancária específica. O parâmetro `:id` na URL deve ser substituído pelo ID da conta bancária a ser atualizada. O corpo da solicitação deve conter as informações atualizadas.

Exemplo de uso:

```bash
curl -X PUT -H "Content-Type: application/json" -H "token: your_token" -d '{ "bank": "String", "type": "String", "limit": 1 }' http://localhost:{API_PORT}/bank-account/{bankAccountId}
```

### DELETE /bank-account/:id

Esta rota é usada para excluir uma conta bancária específica. O parâmetro `:id` na URL deve ser substituído pelo ID da conta bancária a ser excluída.

Exemplo de uso:

```bash
curl -X DELETE -H "token: your_token" http://localhost:{API_PORT}/bank-account/{bankAccountId}
```

## Getting Started

Para começar com esta API, clone o repositório e instale as dependências necessárias usando o npm:

```bash
cd node-bank
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