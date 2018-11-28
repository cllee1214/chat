import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';

import Store from '../../util/store'

require('./index.css')

class Dialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      message: ''
    }
  }

  componentWillMount() {
    this.setState({
      user: this.props.location.query
    })
  }

  handleMessage(value) {
    this.setState({
      message: value
    })
  }

  addSelfMessage(data) {
    let updateMessageStoreFn = this.props.updateMessageStore
    updateMessageStoreFn(data)
  }

  submit() {
    let message = this.state.message
    let socket = this.props.socket
    let user = this.state.user
    this.addSelfMessage({
      message,
      from: user.name
    })
    socket.emit('msg', {
      id: user.id,
      message,
      from: Store.get('token').nickname
    })
  }

  render() {
      return (
        <div className='dialog-box'>
          <p className='title'>与{this.state.user.name}聊天中...</p>
          <div className='message-list'>
              <div className='item'>
                <span>地方大幅度发辅导费</span>
              </div>
              <div className='item'>
                <span className='other'>地方大幅度发辅导费</span>
              </div>
          </div> 
          <div className='input-in'>
            <div className='input'>
              <List>
                <InputItem onChange={(value)=> this.handleMessage(value)} type='text' placeholder="请输入"></InputItem>
              </List>
            </div>
            <div className='btn'>
              <Button type='primary' size='small' onClick={()=>this.submit()}>Go</Button>
            </div>
          </div>
        </div>
      )
  }
}

export default withRouter(Dialog) 