import React from 'react'
import MainWrapper from './components/MainWrapper/MainWrapper'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

const Routes = (): JSX.Element => {
  return (
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
  )
}

export default Routes
