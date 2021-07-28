import React from 'react'
import { Router, Route, Switch } from 'react-router'
import Main from './pages/Main'
import UserInfo from './pages/UserInfo'
import NotFound from './pages/NotFound'

const BrowserRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user-info" component={UserInfo} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default BrowserRouter
