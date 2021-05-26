import styled from 'styled-components'
import { device } from '../../styles/sizes'

export const ResultContainer = styled.ul`
  height: clamp(45vh, 45vh, auto);
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efefef;
  clip-path: ellipse(100vw 50%);
  margin-top: -5rem;
  flex-wrap: wrap;
  li {
    background-color: #fff;
    @media ${device.desktop} {
      width: 10rem;
      height: 10rem;
    }
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
