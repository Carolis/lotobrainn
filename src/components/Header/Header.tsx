import React from 'react'
import ComboBox from '../ComboBox/ComboBox'
import LotteryDate from '../LotteryDate/LotteryDate'
import GlobalStyles from '../../styles/global'
import { useLottery } from '../../context/Lottery'
import { ThemeProvider } from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize'
import {
  HeaderTitle,
  HeaderSidebar,
  StyledLogo,
  LogoWrapper,
  DateTimeWrapper,
  DateTime
} from './styles'
import { size } from '../../styles/sizes'

const Header = (): JSX.Element => {
  const { width } = useWindowSize()
  const { activeLottery } = useLottery()
  const theme = {
    colors: {
      primary: activeLottery.lotteryTheme
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HeaderSidebar>
        <ComboBox />
        <LogoWrapper>
          <StyledLogo />
          <HeaderTitle>{activeLottery.name}</HeaderTitle>
        </LogoWrapper>
        {width >= size.desktop ? (
          <DateTimeWrapper>
            <span>Concurso</span>
            <DateTime>
              {activeLottery.activeBet} - <LotteryDate />
            </DateTime>
          </DateTimeWrapper>
        ) : (
          <span>Concurso Nº {activeLottery.activeBet}</span>
        )}
      </HeaderSidebar>
    </ThemeProvider>
  )
}

export default Header
