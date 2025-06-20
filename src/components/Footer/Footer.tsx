import React from 'react'
import styled from 'styled-components'
import { device } from '../../styles/sizes'

const Footer = (): JSX.Element => {
  return (
    <FooterContainer>
      <p>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--black);
  padding: 2rem;
  background-color: var(--less-white);
  @media ${device.desktop} {
    font-size: 1.6rem;
    padding: 0;
  }
  p {
    text-align: center;
  }
`

export default Footer
