import React from 'react'
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import { NavBar, Icon, TabBar } from 'antd-mobile'

import SocketIO from 'socket.io-client'

import Message from '../message/index'
import FriendsList from '../friends/index'
import Dialog from '../dialog/index'

import Store from '../../util/store'

const tabBarConfig = [
  {
    title:"Friends", 
    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
  },
  {
    title:"Message", 
    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
  },
  {
    title:"Config", 
    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
  },
  {
    title:"My", 
    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
  }
]

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSelect: 'Message',
      userList: {},
      socket: null,
      messageStore: {}
    }
  }

  changeTab (title){
    this.setState({
      currentSelect: title
    })
    console.log('changetab to' + title)
    this.props.history.push('/main/'+ title.toLowerCase())
  }

  componentWillMount(){
    let nickname = Store.get('token').nickname
    const socket =  SocketIO('http://127.0.0.1:3000/?nickname=' + nickname)
    this.setState({
      socket: socket
    })
    socket.on('userList', (data) => {
      this.setState({
        userList: data
      })
      console.log(data)
    })
    socket.on('sys', function(data){
      console.log(data)
    })
    socket.on('msg', (data) => {
      console.log('recive:',data)
      this.updateMessageStore(data)
    })
  }

  updateMessageStore(data) {
    let messageStore = this.state.messageStore
    var from = data.from
    if(!messageStore[from]){
        messageStore[from] = {
        unreadLen: 0,
        messages: []
      }
    }
    messageStore[from].messages.push({...data})
    this.setState({
      messageStore: messageStore
    })
    console.log(messageStore)
  }

  render() {
      let userList = this.state.userList
      let socket = this.state.socket
      let tabBarItemList = tabBarConfig.map((config) => {
        return <TabBar.Item 
            title={config.title} 
            selected={this.state.currentSelect === config.title}
            onPress={(e) => this.changeTab(config.title)}
            key={config.title}   
            selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: config.background }}
            />}
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />}
          ></TabBar.Item>
      })

      return (
        <div style={{height:'100%', width:'100%'}}>
          <NavBar mode="darl" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>NavBar</NavBar>
          <div style={{height:'50px',width:'100%',position:'fixed',bottom:0}}>
            <TabBar tabBarPosition='bottom'>
              {tabBarItemList}
            </TabBar>
          </div>

          {/* 路由 */}
          <div className='rt'>
              <Switch>
                <Route path='/main/message' exact  component={Message} />
                <Route path='/main/friends' exact  render={() => <FriendsList history={this.props.history} userList={userList} />}/>
                <Route path='/main/dialog' exact  render={()=> <Dialog socket={socket} updateMessageStore={this.updateMessageStore.bind(this)}/>} />
              </Switch>
          </div>
        </div>
      )
  }
}

export default Main