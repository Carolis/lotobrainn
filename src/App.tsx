import React from 'react'
import Main from './components/Main'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const App: React.FC = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://brainn-api-loterias.herokuapp.com/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  )
}

export default App
