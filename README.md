# API de Automação Aula

Esta API foi criada para fins de aprendizado de testes e automação de APIs. Ela permite:
- Registro de usuários
- Login
- Consulta de usuários
- Transferência de valores entre usuários

## Tecnologias
- Node.js
- Express
- Swagger (documentação)

## Instalação

1. Clone o repositório ou copie os arquivos para sua máquina.
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Como rodar

- Para iniciar o servidor:
  ```bash
  node server.js
  ```
- O servidor rodará por padrão na porta 3000.

## Endpoints

- `POST /register` — Registro de usuário
- `POST /login` — Login de usuário
- `GET /users` — Lista todos os usuários
- `POST /transfer` — Realiza transferência
- `GET /transfers` — Lista todas as transferências
- `GET /api-docs` — Documentação Swagger

## Regras de Negócio

1. Login e senha são obrigatórios para login e registro.
2. Não é permitido registrar usuários duplicados.
3. Transferências para destinatários que não são "favorecidos" só podem ser realizadas se o valor for menor que R$ 5.000,00.

## Documentação

Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Observações
- O banco de dados é em memória (os dados são perdidos ao reiniciar o servidor).
- O projeto está dividido em `controller`, `service` e `model` para facilitar a organização e testes.

## Testes
- O arquivo `app.js` pode ser importado em ferramentas de teste como Supertest, pois não executa o método `listen()`.
