import styled from 'styled-components'
import { device } from '../../styles/sizes'

export const ResultContainer = styled.ul`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 3rem;
  min-height: 40vh;
  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-height: 85vh;
  }
  li {
    background-color: var(--white);
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 1rem 0;
    @media ${device.desktop} {
      width: 10rem;
      height: 10rem;
      margin: 0 3.5rem 1rem 0;
    }
  }
`
