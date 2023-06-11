# 💗 Happy Encounter 💗

<img width="960" alt="Main foto" src="https://github.com/JonatasMSS/Happy-Encounter/assets/74430293/1838ed97-4053-4e43-9256-272c56ebf56f">

## Descrição do Projeto

Desenvolvi o projeto com o objetivo de compreender o processo de animação em websites. Considerando a proximidade do dia dos namorados, busquei criar algo que pudesse relacionar meu foco de aprendizado a uma funcionalidade temática para essa ocasião. Surgiu então a ideia do Happy Encounter. Esta aplicação tem como propósito a criação de cartões para auxiliar na escolha de atividades a serem realizadas no dia dos namorados. Os cartões apresentarão uma imagem e um texto na parte frontal, enquanto na parte traseira indicarão o que a pessoa irá receber nesse dia especial.

### Linguagens de Programação

- JavaScript
- TypeScript


### Frameworks e Bibliotecas

- React
- Next.js

### Banco de Dados

- Prisma ORM

### Plataforma em Nuvem

- AWS (Amazon Web Services)

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
2. Acesse a pasta `web`: `cd web`
3. Instale as dependências da pasta `web`: `npm install` ou `yarn install`
4. Volte à pasta raiz do projeto: `cd ..`
5. Acesse a pasta `server`: `cd server`
6. Instale as dependências da pasta `server`: `npm install` ou `yarn install`

## Configuração

### Variáveis de ambiente - Server

Crie um `.env`

~~~shell script

DATABASE_URL="file:./dev.db"
SECRET_KEY_JWT = [Chave de assinatura JWT]
COGNITO_USER_POOL_URL = [Url de acesso ao user pool do cognito]

SECRET_ID_CLIENT = [O Secret ID Configurado no Cognito - É preciso habilitar essa função na criação do user pool]
PUBLIC_ID_CLIENT = [O Public ID do Cognito User Pool]
REDIRECT_URL = "localhost:3000/api/auth/callback" [A url de redirecionamento - De preferência mantenha semelhantemente assim - Se alterar no cognito altere-a aqui]

~~~

### Variáveis de Ambiente - Web

Crie um `.env.local`

~~~~shell script
NEXT_PUBLIC_CONGNITO_USERS_URL = [Url de access ao user pool do cognito]
NEXT_PUBLIC_CLIENT_ID = [O Public ID do Cognito ]
NEXT_PUBLIC_REDIRECT_URI = "http://localhost:3000/api/auth/callback"
~~~~

## Execução

Agora basta abrir a pasta `web` e executar `npm run dev`. Execute o mesmo dentro da pasta `server`

## Contato

Gostou? Me segue no linkedIn 😉😉
https://www.linkedin.com/in/jonatasmss/

