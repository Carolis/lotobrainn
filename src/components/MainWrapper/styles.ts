import styled from 'styled-components'
import { device } from '../../styles/sizes'

export const MainContainer = styled.div`
  height: 100vh;
  display: block;
  @media ${device.desktop} {
    display: flex;
  }
`
export const MainContentWrapper = styled.div`
  @media ${device.desktop} {
    width: 70vw;
    height: 100vh;
    border-top-left-radius: 15% 50%;
    border-bottom-left-radius: 15% 50%;
  }
`
