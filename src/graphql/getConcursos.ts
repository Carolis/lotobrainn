import { gql } from '@apollo/client'

export const GET_CONCURSOS = gql`
  query getConcursos($id: ID!) {
    concurso(id: $id) {
      id
      loteria
      numeros
      data
    }
  }
`
