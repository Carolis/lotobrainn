import React from 'react'
import MainWrapper from './components/MainWrapper/MainWrapper'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const App = (): JSX.Element => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://brainn-api-loterias.herokuapp.com/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route
            path={[
              '/megasena',
              '/quina',
              '/lotofacil',
              '/lotomania',
              '/timemania',
              '/diadesorte'
            ]}
            component={MainWrapper}
          />
          <Route exact path={'/'}>
            <Redirect to={'/megasena'} />
          </Route>
          <Route>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
