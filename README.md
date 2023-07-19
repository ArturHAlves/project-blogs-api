# Blogs Api

## :page_with_curl: Sobre

Projeto Blogs Api, desenvolvido por [Artur Henrique](https://github.com/ArturHAlves)
no final da [Seção 6 - Node.js: ORM e Autenticação](https://github.com/ArturHAlves/trybe-exercises/tree/main/03-Modulo-Back-End/Secao-06-Node.js-ORM-E-Autenticacao)
no curso de Desenvolvimento Web da Trybe. Eu fui aprovado com 100% dos requisitos. 


## Proposta

A proposta do projeto é desenvolver uma API RESTful para um blog, utilizando as tecnologias Node.js e a ORM Sequelize. A API permite a realização das operações básicas de um CRUD (Create, Read, Update e Delete), possibilitando a criação, leitura, atualização e exclusão de posts em um banco de dados MySQL através do back-end desenvolvido em Node.js. Além disso, a aplicação adota a arquitetura de software MSC (Model, Service e Controller) para facilitar a organização e manutenção do código.


## :hammer_and_wrench: Tecnologias Utilizadas:

O projeto foi desenvolvido utilizando as seguintes tecnologias:

* Node.js
* Sequelize
* MySQL
* Express
* JWT
* Docker
* Docker-compose
* EsLint


## Pré-requisito

Antes de executar a API localmente, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js
Docker e Docker Compose
MySQL Server


## Configuração do Ambiente 


* Clone o repositório do GitHub:

`git clone https://github.com/<your-username>/project-blogs-api.git`

* Instale as dependências necessárias usando o npm:

`npm install`

* Crie um banco de dados MySQL e execute as migrações e as sementes para a aplicação:

`npm run migration && npm run seed`

* Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente necessárias, como as credenciais do banco de dados e configurações específicas da aplicação.

    `DB_HOST=localhost
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=node_store_manager`

* Substitua `suasenha` pela senha real do usuário root do MySQL.


## Uso

Para iniciar a aplicação Node Store Manager, execute o seguinte comando:

`npm run dev`

Isso iniciará o servidor em http://localhost:3001.
