import React from 'react'
import { useQuery } from '@apollo/client'
import { useLottery } from '../../context/Lottery'
import { LOTERIAS } from '../../graphql/Loterias'
import { themeColors } from '../../styles/themes/themes'

interface Lottery {
  nome: string
  id: string
  lotteryTheme: string
}

const ComboBox: React.FC = () => {
  const { activeLottery, setActiveLottery } = useLottery()

  const {
    data: dataLoterias,
    loading: loadingLoterias,
    error: errorLoterias
  } = useQuery(LOTERIAS)

  const handleLottery = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lotteryActiveId = e.target.children[e.target.selectedIndex].id

    let activeTheme = '#FFF'
    const normalizedValue = e.target.value.replace(/-|\s/g, '')

    if (themeColors[normalizedValue]?.length) {
      activeTheme = themeColors[normalizedValue]
    }

    setActiveLottery({
      name: e.target.value,
      id: lotteryActiveId,
      lotteryTheme: activeTheme
    })
  }

  if (loadingLoterias) {
    return <div>Loading</div> //TODO: add skeleton
  }

  if (errorLoterias) {
    throw new Error('Error loading "Loterias"')
  }

  const lotteryOptions = dataLoterias.loterias.map(
    (option: Lottery, index: number) => {
      return (
        <option key={index} value={option.nome} id={option.id}>
          {option.nome}
        </option>
      )
    }
  )

  if (dataLoterias) {
    return (
      <select value={activeLottery.name} onChange={handleLottery}>
        {lotteryOptions}
      </select>
    )
  }
  return null
}

export default ComboBox
