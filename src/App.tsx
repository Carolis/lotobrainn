import React from 'react'
import Main from './components/Main'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://brainn-api-loterias.herokuapp.com/graphql'
  })

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Main />
      </ApolloProvider>
    </BrowserRouter>
  )
}

export default App
