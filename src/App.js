import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './components/login/index'
import Main from './components/main/index'
import Test from './components/test/index'

import './util/init.css'
import 'antd-mobile/dist/antd-mobile.css'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
      return (
        <div>
          <Login  history={this.props.history} />
        </div>
      )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path='/' exact component={App} />
        <Route path='/test' component={Test} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/main' component={Main} />
        <Route component={Test}/>
    </Switch>
  </BrowserRouter>, document.getElementById('app'));

