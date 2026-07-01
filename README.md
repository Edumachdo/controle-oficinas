# Controle de Oficinas - Full Stack

Projeto Full Stack para gerenciamento de oficinas (minicursos) utilizando React + Vite no front-end e Node.js + Express no back-end, com persistência de dados em MongoDB.

## Como rodar

### Back-end

```bash
cd backend
npm install
docker compose up -d
npm run seed
npm run dev
```

API: http://localhost:3000

### Front-end

```bash
cd frontend
npm install
npm run dev
```

Aplicação: http://localhost:5173

## Login de teste

Utilize um usuário previamente cadastrado no banco de dados. Exemplo:

```
admin@escola.edu.br
123456
```

## Funcionalidades

- Autenticação de usuários
- Dashboard
- CRUD de oficinas
- Gestão de usuários
- Controle de presença
- API REST com Node.js e Express
- Persistência de dados em MongoDB
- Senhas criptografadas com bcrypt

## Tecnologias

- React
- Vite
- Node.js
- Express
- MongoDB
- Mongoose
- Docker Compose
- bcrypt
