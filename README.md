# [products-list-app](https://mercado-facil-app.herokuapp.com/)

Este projeto contém o front-end do projeto "Mercado Fácil", desenvolvido como parte desafio de desenvolvimento front-end da TodoCartões.

Você pode encontrar o projeto contendo o código da API de back-end em Node.js [aqui](https://github.com/kacianoghelere/products-list-api).

## Como executar o projeto?
1. Clone o projeto
2. Utilize o comando `npm install` para adicionar as bibliotecas utilizadas
3. Quando finalizar, utilize o comando `npm start` para iniciar o projeto
4. Na tela de login, utilize as seguintes credênciais:
  - Email: test1@test.com
  - Senha: 123456

## Arquitetura aplicada
O projeto foi construído utilizando o Redux como ferramenta de comunicação entre componentes e fonte de dados central imutável. Basicamente, a aplicação segue os seguintes preceitos:
- ~O usuário pode criar uma conta no sistema~ (previsto, mas não implementado);
- O usuário pode entrar no sistema fornecendo suas credenciais;
- O usuário pode criar uma lista de produtos;
- Quando uma nova lista é criada, o sistema adiciona uma pré-seleção de produtos na mesma;
- O usuário pode adicionar novos produtos na lista;
- O usuário pode escolher novos produtos atráves de filtros de nome, preço mínimo e preço máximo;
- O usuário pode alterar produtos da lista;
- O usuário pode remover produtos da lista
- ~O usuário pode visualizar listas de produtos de outros usuários~ (previsto, mas não implementado);

## Tecnologias utilizadas
- Create React App (Boilerplate de criação de aplicações React)
- React (Biblioteca de renderização de componentes) e alguns plug-ins utilitários
- Redux (Gerenciador de estados imutável) e alguns plug-ins utilitários
- Bootstrap (Estilização de componentes)

## Link do projeto no Heroku
[https://mercado-facil-app.herokuapp.com/](https://mercado-facil-app.herokuapp.com/)
