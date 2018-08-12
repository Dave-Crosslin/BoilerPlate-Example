// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from './config'
import HomePage from './component/page/home'
import Helmet from 'react-helmet'
import HOME_PAGE_ROUTE from './routes'

const App = () =>
  <div style={{ paddingTop: 54}}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
    </Switch>
  </div>


export default App
