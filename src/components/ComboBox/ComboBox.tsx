import React from 'react'
import { useQuery } from '@apollo/client'
import { useLottery } from '../../context/Lottery'
import { useHistory } from 'react-router-dom'

import { LOTERIAS } from '../../graphql/Loterias'
import { CONCURSOS_LOTERIAS } from '../../graphql/ConcursosLoterias'

import { themeColors } from '../../styles/themes/themes'

interface Lottery {
  nome: string
  id: string
  lotteryTheme: string
}

const ComboBox: React.FC = () => {
  const { activeLottery, setActiveLottery } = useLottery()
  const history = useHistory()

  const {
    data: dataLoterias,
    loading: loadingLoterias,
    error: errorLoterias
  } = useQuery(LOTERIAS)

  const {
    data: dataLoteriasConcursos,
    loading: loadingLoteriasConcursos,
    error: errorLoteriasConcursos
  } = useQuery(CONCURSOS_LOTERIAS)

  const handleLottery = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lotteryActiveId = e.target.children[e.target.selectedIndex].id

    let activeTheme = ''
    const normalizedValue = e.target.value
      .normalize('NFD')
      .replace(/-|\s|[^a-zA-Zs]/g, '')

    if (themeColors[normalizedValue]?.length) {
      activeTheme = themeColors[normalizedValue]
    }

    if (dataLoterias && dataLoteriasConcursos) {
      setActiveLottery({
        name: e.target.value,
        id: lotteryActiveId,
        lotteryTheme: activeTheme,
        activeBet:
          dataLoteriasConcursos?.loteriasConcursos[lotteryActiveId]?.concursoId
      })
    }

    history.push(`/${normalizedValue}`)
  }

  if (loadingLoterias || loadingLoteriasConcursos) {
    return <div>Loading</div> //TODO: add skeleton
  }

  if (errorLoterias || errorLoteriasConcursos) {
    throw new Error('Error loading "Loterias"')
  }

  if (dataLoterias && dataLoteriasConcursos) {
    const lotteryOptions = dataLoterias.loterias.map(
      (option: Lottery, index: number) => {
        return (
          <option key={index} value={option.nome} id={option.id}>
            {option.nome}
          </option>
        )
      }
    )
    return (
      <select value={activeLottery.name} onChange={handleLottery}>
        {lotteryOptions}
      </select>
    )
  }
  return null
}

export default ComboBox
