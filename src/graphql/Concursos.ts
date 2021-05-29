import { gql } from '@apollo/client'

export const CONCURSOS = gql`
  query Concursos($id: ID!) {
    concurso(id: $id) {
      id
      loteria
      numeros
      data
    }
  }
`
