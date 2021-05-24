import React from 'react'
import ComboBox from '../ComboBox/ComboBox'
import LotteryProvider from '../../context/Lottery'

const MainWrapper: React.FC = () => {
  return (
    // ThemeProvider
    <LotteryProvider>
      <div>
        <ComboBox />
      </div>
    </LotteryProvider>
  )
}

export default MainWrapper
