# project-node-api

Projeto criado para estudos. Neste exemplo, utilizei as seguintes linguagens/frameworks/libs:

		Node.js
		Typescript
		TypeORM
		Docker
		Postgresql
		Nodemailer
		Handlebars
		Jest

Atualmente, o projeto consiste no CRUD de usuários, com informações básicas (nome, email e senha). Existe a possibilidade também de alterar a senha do usuário através de envio de emails.

### Docker

		docker run --name nodeapi_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

### Migrations
		CreateUser
		CreateUserTokens
		CreateCar
		AlterColumnNameCars

### Scripts
		dev:server = iniciar servidor
		typeorm = utilizar cli do typeorm
		test = iniciar testes automatizados existentes

### Rotas disponíveis

#### Users
| Rota  | Tipo/URL  | Parâmetros  | Status code esperado  | Resposta esperada |
| ------------ | ------------ | ------------ | ------------ | ----------------- |
| Create User  | POST http://localhost:3333/users | name: string, email: string, password: string  | 200  | user: { name: "xxx", email: "xxx", id: "xxx", created_at: "xxx", updated_at: "xxx" } |
| Create Session  | POST http://localhost:3333/sessions  | email: string, password: string  | 200  | user: { name: "xxx", email: "xxx", id: "xxx", created_at: "xxx", updated_at: "xxx" }, token: "xxx" |
|  Show profile | GET http://localhost:3333/profile  | -  | 200  | id: "xxx", name: "xxx", email: "xxx", created_at: "xxx", updated_at: "xxx" |
|  Update profile | PUT http://localhost:3333/profile  | Pode-se inserir name: string, email: string e password: string (para alterar password, informar a senha anterior: old_password: string)  | 200  | id: "xxx", name: "xxx", email: "xxx", created_at: "xxx", updated_at: "xxx" |
| Forgot password  | POST http://localhost:3333/password/forgot  | email: string  | 204  | - |
| Reset password  | POST http://localhost:3333/password/reset | password: string, token: string  | 204  | - |

### Observações:
- Show profile: necessita do token gerado pela rota Create Session. Inserir como Bearer
- Update profile: necessita do token gerado pela rota Create Session. Inserir como Bearer
- Forgot password: acessando a rota, será gerado uma URL no terminal para acessar uma página do Ethereal
- Reset password: necessita do token gerado pela rota Forgot password. Acessando a página do Ethereal, existirá uma âncora. Clique nela e será redirecionado para uma página em branco. Na URL desta página conterá o token a ser capturado e ser anexado no JSON para a rota Reset password

#### Cars
| Rota  | Tipo/URL  | Parâmetros  | Status code esperado  | Resposta esperada |
| ------------ | ------------ | ------------ | ------------ | ----------------- |
| Create Car  | POST http://localhost:3333/cars | plate: string, user_id: uuid, model: string, brand: string, year: number  | 200  | { plate: "xxx1234", user_id: "xxx", model: "xxx", brand: "xxx", year: 1234, created_at: "xxx", updated_at: "xxx" } |

### Observações:
- Create Car: user_id deve receber o id (uuid) de um usuário já criado.

### Contato
Estou aberto a críticas construtivas, dicas e/ou conselhos.
Linkedin: https://www.linkedin.com/in/leonardo-mendes-furtado/
