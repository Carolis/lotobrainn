import React from 'react'
import styled from 'styled-components'

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
  color: #000;
  position: fixed;
  bottom: 0;
  padding: 2rem;
  width: 100%;
  background-color: #efefef;
  @media (min-width: 1200px) {
    font-size: 1.6rem;
    position: unset;
    padding: 0;
  }
  p {
    text-align: center;
  }
`

export default Footer
