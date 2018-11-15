
import React from 'react'
import Store from '../../util/store'

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
     let isLogin = this.state.isLogin
     console.log(isLogin)
     return isLogin ?
     (<BaseComponent {...hocProps} />)
     :
     (<div>请登录</div>)
    }
  }
}

export default HocAuthCreater