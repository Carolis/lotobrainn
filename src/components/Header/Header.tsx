import React from 'react'
import ComboBox from '../ComboBox/ComboBox'
import { Container } from './styles'
import GlobalStyles from '../../styles/global'
import { useLottery } from '../../context/Lottery'
import { ThemeProvider } from 'styled-components'

const Header: React.FC = () => {
  const { activeLottery } = useLottery()
  const theme = {
    colors: {
      primary: activeLottery.lotteryTheme
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <ComboBox />
      </Container>
    </ThemeProvider>
  )
}

export default Header
