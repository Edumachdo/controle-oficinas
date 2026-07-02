# Controle de Oficinas - Full Stack

## Objetivo do Sistema

O projeto é um sistema web Full Stack para o gerenciamento de oficinas (minicursos). A plataforma permite que administradores cadastrem e gerenciem oficinas, usuários (alunos, professores, tutores), e controlem a frequência dos participantes de forma centralizada.

## Como rodar

### 1. Configuração do Back-end

```bash
cd backend
npm install
docker compose up -d
npm run seed
npm run dev
```

API: http://localhost:3000

### 3. Front-end

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

### Ferramentas de Desenvolvimento e Execução

| Ferramenta  | Versão Sugerida   | Link para Download/Instalação                                 |
| ----------- | ----------------- | ------------------------------------------------------------- |
| **Node.js** | 20.x ou LTS       | [nodejs.org](https://nodejs.org/)                             |
| **Docker**  | 26.x ou recente   | [docker.com](https://www.docker.com/products/docker-desktop/) |
| **VS Code** | 1.90.x ou recente | [code.visualstudio.com](https://code.visualstudio.com/)       |

### Tecnologias do Back-end

| Tecnologia/Biblioteca | Versão no Projeto | Propósito                              |
| --------------------- | ----------------- | -------------------------------------- |
| **Express**           | ~4.19.2           | Framework para a criação da API REST   |
| **MongoDB**           | 7.0 (via Docker)  | Banco de dados NoSQL para persistência |
| **Mongoose**          | ~8.4.1            | Modelagem de dados para o MongoDB      |
| **bcrypt**            | ~5.1.1            | Criptografia de senhas dos usuários    |
| **jsonwebtoken**      | ~9.0.2            | Geração de tokens para autenticação    |
| **dotenv**            | ~16.4.5           | Gerenciamento de variáveis de ambiente |

### Tecnologias do Front-end

| Tecnologia/Biblioteca | Versão no Projeto | Propósito                              |
| --------------------- | ----------------- | -------------------------------------- |
| **React**             | ~18.2.0           | Biblioteca para a interface do usuário |
| **Vite**              | ~5.2.0            | Ferramenta de build e desenvolvimento  |
| **react-router-dom**  | ~6.23.1           | Roteamento de páginas na aplicação     |
