import React from 'react'
import Header from '../Header/Header'
import LotteryProvider from '../../context/Lottery'

const MainWrapper: React.FC = () => {
  return (
    <LotteryProvider>
      <div>
        <Header />
      </div>
    </LotteryProvider>
  )
}

export default MainWrapper
