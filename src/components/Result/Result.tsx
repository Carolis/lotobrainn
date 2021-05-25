import React from 'react'
import { useLottery } from '../../context/Lottery'
import { useQuery } from '@apollo/client'
import { CONCURSOS_LOTERIAS } from '../../graphql/ConcursosLoterias'
import { CONCURSOS } from '../../graphql/Concursos'

const Result: React.FC = () => {
  const { activeLottery, setActiveLottery } = useLottery()

  const {
    data: dataLoteriasConcursos,
    loading: loadingLoteriasConcursos,
    error: errorLoteriasConcursos
  } = useQuery(CONCURSOS_LOTERIAS)


  const { loading: loadingConcurso, data: concursoData } = useQuery(CONCURSOS, {
    variables: {
      id: //add o concursoId
    },
    skip: dataLoteriasConcursos == null
  })

  console.log('datassssss', dataLoteriasConcursos, concursoData)

  return (
    <>
      <ul>
        {concursoData?.concurso.numeros?.map(
          (numero: number, index: number) => (
            <li key={index}>{numero}</li>
          )
        )}
      </ul>
    </>
  )
}

export default Result
