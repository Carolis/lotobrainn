import { gql } from '@apollo/client'

export const GET_LOTERIAS_CONCURSOS = gql`
  query getLoteriasConcursos {
    loteriasConcursos {
      loteriaId
      concursoId
    }
  }
`
