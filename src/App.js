import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'

import Login from './components/login/index'
import Main from './components/main/index'
import Test from './components/test/index'

//高阶组件  判断登录
import HocAuthCreater from './components/login/auth'
let HocAuth = HocAuthCreater(Main)
HocAuth = withRouter(HocAuth)

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
        <HocAuth path='/main' />
        <Route component={Test} />
    </Switch>
  </BrowserRouter>, document.getElementById('app'));

