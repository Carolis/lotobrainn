import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Routes from './Routes'

const App = (): JSX.Element => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://brainn-api-loterias.herokuapp.com/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
