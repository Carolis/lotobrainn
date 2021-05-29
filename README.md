<p align="center">
  <h2 align="center">LotoBrainn</h2>

  <h1 align="center"><img src="./public/favicon.ico" alt="Logo do Typescript" width="32"></h1>

  <p align="center">    
    <br />
    <a href="https://github.com/brainnco-exs/challenge-carolis/issues">Report Bug</a>
    ·
    <a href="https://github.com/brainnco-exs/challenge-carolis/issues">Request Feature</a>
  </p>
</p>

<h2 align="center"><img src=".github/assets/DXQQuSBLut.gif" alt="Gif mostrando a responsividade da aplicação" width="100%"></h2>

# Lotobrainn

Link para acessar o projeto online: https://lotobrainn.vercel.app/

Repositório oficial do desafio: https://github.com/brainnco-exs/challenge-carolis

Repositório pessoal com o histórico do desafio: https://github.com/Carolis/lotobrainn

## Do que eu preciso para rodar essa aplicação?

[Node](https://github.com/nodejs/node) e [Yarn](https://classic.yarnpkg.com/en/)

Ao acessar a aplicação pela primeira vez garanta que você irá rodar `yarn install` antes de executar a aplicação com `yarn start` no modo desenvolvimento 

## Decisões de arquitetura da aplicação

CRA com template Typescript

Styled Components

GraphQL com Apollo Client

React Router DOM

LocalStorage

Cypress

## Comandos CLI disponíveis para rodar na aplicação

`yarn start` Para rodar a aplicação em modo desenvolvimento na porta [http://localhost:3000](http://localhost:3000)

`yarn lint --fix` Para corrigir erros de lint

`yarn test`

`yarn build`

`yarn cypress:open`

`yarn cypress:run`

## Queries usadas na aplicação

`LOTERIAS:` Retorna se o tipo é megasena, quina, lotofacil, lotomania, timemania ou dia de sorte.

```
query LOTERIAS {
    loterias {
      id
      nome
    }
}
```

`CONCURSOS_LOTERIAS:` Retorna os ids de concursos correspondentes ao tipo de loteria.

```
query CONCURSOS_LOTERIAS {
  loteriasConcursos {
    loteriaId
    concursoId
  }
}

```

`CONCURSOS:` Retorna dados sobre determinado concurso, recebe como argumento obrigatorio o id de um concurso feito em uma loteria.

```
query CONCURSOS ($id: ID!) {
  concurso(id: $id) {
    id
    loteria
    numeros
    data
  }
}
```

## Informações Extra

Última atualização feita em 29/05/2021

Feito por [Carolis](https://github.com/Carolis)

Para mais informações acesse o [enunciado do teste](https://github.com/brainnco-exs/readme-frontend)

Caso seja necessário alguma permissão para o repositório ou quaisquer dúvidas basta me acionar no e-mail `carolinaalecontato@gmail.com`

Obrigada!
