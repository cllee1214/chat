
import React from 'react'
import Store from '../../util/store'

import Login from '../login/index'

function HocAuthCreater(BaseComponent, hocProps){
  return class LoginAuth extends React.Component {
    constructor (props){
      super(props)
      this.state = {
        isLogin: false
      }
    }

    componentWillMount () {
      let isLogin = !!Store.get('token')
      console.log(isLogin)
      this.setState({
        isLogin
      })
    }

    render() {
      console.log(hocProps)
     let isLogin = this.state.isLogin
     console.log(isLogin)
     return isLogin ?
     (<BaseComponent {...hocProps} />)
     :
     (<Login history={this.props.history} />)
    }
  }
}

export default HocAuthCreater