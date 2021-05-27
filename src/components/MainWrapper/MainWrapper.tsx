import React from 'react'
import Header from '../Header/Header'
import Result from '../Result/Result'
import Footer from '../Footer/Footer'
import LotteryProvider from '../../context/Lottery'
import { MainContainer, MainContentWrapper } from './styles'

const MainWrapper = (): JSX.Element => {
  return (
    <LotteryProvider>
      <MainContainer>
        <Header />
        <MainContentWrapper>
          <Result />
          <Footer />
        </MainContentWrapper>
      </MainContainer>
    </LotteryProvider>
  )
}

export default MainWrapper
