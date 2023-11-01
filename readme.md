# NodeJS API Studies

Projeto de estudos realizado na aula de API & MICROSSERVICES DEVELOPMENT do curso MBA em Mobile Development

## Rotas da API

Esse conjunto de APIs possui as seguintes rotas:


- POST /user
    - Esta rota é usada para criar um novo usuário. O corpo da solicitação deve conter as informações necessárias para criar o usuário.

- POST /user/login
    - Esta rota é usada para realizar o login. O corpo da solicitação deve conter as informações necessárias para logar o usuário.

- PUT /user/password/:id
    - Esta rota é usada para atualizar a senha de um usuário específico. O parâmetro `:id` na URL deve ser substituído pelo ID do usuário a ser atualizado. O corpo da solicitação deve conter as informações atualizadas.

- GET /client
    - Esta rota é usada para recuperar uma lista de todas os clientes.

- POST /client
    - Esta rota é usada para criar um novo cliente. O corpo da solicitação deve conter as informações necessárias para criar o cliente.

- PUT /client/:id
    - Esta rota é usada para atualizar os detalhes de um cliente específico. O parâmetro `:id` na URL deve ser substituído pelo ID do cliente a ser atualizado. O corpo da solicitação deve conter as informações atualizadas.

- DELETE /client/:id
    - Esta rota é usada para excluir um cliente específico. O parâmetro `:id` na URL deve ser substituído pelo ID do cliente a ser excluído.

- GET /bank-account
    - Esta rota é usada para recuperar uma lista de todas as contas bancárias.

- GET /bank-account/:clientId
    - Esta rota é usada para recuperar detalhes de uma conta bancária específica usando o ID do cliente.

- POST /bank-account
    - Esta rota é usada para criar uma nova conta bancária. O corpo da solicitação deve conter as informações necessárias para criar a conta.

- PUT /bank-account/:id
    - Esta rota é usada para atualizar os detalhes de uma conta bancária específica. O parâmetro `:id` na URL deve ser substituído pelo ID da conta bancária a ser atualizada. O corpo da solicitação deve conter as informações atualizadas.

- DELETE /bank-account/:id
    - Esta rota é usada para excluir uma conta bancária específica. O parâmetro `:id` na URL deve ser substituído pelo ID da conta bancária a ser excluída.

## Getting Started

Para começar consulte o readme.md de cada subpasta

## Contributing

Contribuições são bem-vindas! Se você encontrar algum problema, tiver sugestões ou quiser contribuir com o desenvolvimento, sinta-se à vontade para criar um problema ou enviar uma  pull request.

## License

Este pacote é lançado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usá-lo, modificá-lo e distribuí-lo conforme necessário.

---