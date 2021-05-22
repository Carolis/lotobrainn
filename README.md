# LotoBrainn

## Decisões de arquitetura

CRA com template Typescript

Styled Components

GraphQL com Apollo

Cypress

## Comandos CLI disponíveis na aplicação

`yarn start`  Roda a aplicação em modo desenvolvimento na porta [http://localhost:3000](http://localhost:3000)

`yarn lint --fix` Corrige erros de lint

`yarn test`

`yarn build`

`yarn cypress:open` 

`yarn cypress:run` 

## Queries disponíveis na aplicação

`GET_LOTERIAS:` Retorna se o tipo é megasena, quina, lotofacil, lotomania, timemania ou dia de sorte.

```
query GET_LOTERIAS {
    loterias {
      id
      nome
    }
}
```

`GET_LOTERIAS_CONCURSOS:` Retorna os ids de concursos correspondentes ao tipo de loteria.

```
query GET_LOTERIAS_CONCURSOS {
  loteriasConcursos {
    loteriaId
    concursoId
  }
}

```

`GET_CONCURSO:` Retorna dados sobre determinado concurso, recebe como argumento obrigatorio o id de um concurso feito em uma loteria.

```
query GET_CONCURSO ($id: ID!) {
  concurso(id: $id) {
    id
    loteria
    numeros
    data
  }
}
```