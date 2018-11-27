import React from 'react'
import {Route} from 'react-router-dom'
import { List, InputItem, WhiteSpace,Button,Toast } from 'antd-mobile';
require('./index.css')

class Dialog extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
      return (
        <div class='dialog-box'>
          <p class='title'>与Cai聊天中...</p>
          <div class='message-list'>
              <div className='item'>
                <span>地方大幅度发辅导费</span>
              </div>
              <div className='item'>
                <span className='other'>地方大幅度发辅导费</span>
              </div>
          </div> 
          <div class='input-in'>
            <List>
              <InputItem type='text' style={{width:"50%",float:'left'}} placeholder="请输入"></InputItem>
            </List>
          </div>
        </div>
      )
  }
}

export default Dialog