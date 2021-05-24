import React from 'react'
import MainWrapper from './components/MainWrapper/MainWrapper'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const App: React.FC = () => {
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
              '/mega-sena',
              '/quina',
              '/lotofacil',
              '/lotomania',
              '/timemania',
              '/dia-de-sorte'
            ]}
            component={MainWrapper}
          />
          <Route exact path={'/'}>
            <Redirect to={'/mega-sena'} />
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
