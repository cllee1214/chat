import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Link, hashHistory} from 'react-router-dom'

import Login from './components/login/index'
import Main from './components/main/index'
import Test from './components/test/index'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
      return (
        <div>
          <Login />
        </div>
      )
  }
}

ReactDOM.render((
  <Router>
  <Switch>
      <Route path='/' component={App} exact />
      <Route path='/test' component={Test}  />
      <Route path='/login' component={Login}  />
      <Route path='/main' component={Main}  />
  </Switch>
</Router>
),document.getElementById('app'));

