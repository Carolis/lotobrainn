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

## Decisões de arquitetura da aplicação

CRA com template Typescript

Styled Components

GraphQL com Apollo Client

React Router DOM

Cypress

## Comandos CLI disponíveis para rodar a aplicação


`yarn start`  Roda a aplicação em modo desenvolvimento na porta [http://localhost:3000](http://localhost:3000)

`yarn lint --fix` Corrige erros de lint

`yarn test`

`yarn build`

`yarn cypress:open` 

`yarn cypress:run` 

## Queries disponíveis na aplicação


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