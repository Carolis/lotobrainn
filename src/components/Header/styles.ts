import styled from 'styled-components'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import { device } from '../../styles/sizes'

export const HeaderTitle = styled.h1``

export const HeaderSidebar = styled.aside`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const StyledLogo = styled(Logo)`
  width: 6rem;
  margin: 0 0 1rem 0;
  @media ${device.desktop} {
    margin: 0 2rem 0 0;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media ${device.desktop} {
    flex-direction: row;
  }
`
