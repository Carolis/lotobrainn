import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
`

export default Footer
