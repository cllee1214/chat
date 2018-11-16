
import React from 'react'
import Store from '../../util/store'
import {Redirect}  from 'react-router-dom'
import Login from '../login/index'

function HocAuthCreater(BaseComponent, hocProps){
  return class LoginAuth extends React.Component {
    constructor (props){
      super(props)
      this.state = {
        isLogin: !!Store.get('token')
      }
    }

    componentWillMount () {

    }

    render() {
      console.log(this.props)
     let isLogin = this.state.isLogin
     return isLogin ?
     <BaseComponent {...hocProps} history={this.props.history} />
     :
     <Redirect to='/login' />
    }
  }
}

export default HocAuthCreater