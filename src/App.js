import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import Login from './components/login/index'

class App extends React.Component {
  render() {
      return (
        <div>
         app
         <Link to="/login">login</Link>
         <Link to="/test">test</Link>
        </div>
      )
  }
}

class Test extends React.Component {
  render() {
      return (
        <div>
          test
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
  </Switch>
</Router>
),document.getElementById('app'));
