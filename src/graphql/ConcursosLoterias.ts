import { gql } from '@apollo/client'

export const CONCURSOS_LOTERIAS = gql`
  query ConcursosLoterias {
    loteriasConcursos {
      loteriaId
      concursoId
    }
  }
`
