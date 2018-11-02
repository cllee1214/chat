import React from 'react'
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import { NavBar, Icon, TabBar } from 'antd-mobile'

import Message from '../message/index'
import FriendsList from '../friends/index'

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
      currentSelect: 'Message'
    }
  }

  changeTab (e){
    console.log(222)
    console.log(e)
  }

  render() {

      let tabBarItemList = tabBarConfig.map((config) => {
        return <TabBar.Item 
            title={config.title} 
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
            <TabBar tabBarPosition='bottom' onPress={(e) => this.changeTab(e)}>
              {tabBarItemList}
            </TabBar>
          </div>

          {/* 路由 */}
          <div className='rt'>
            <BrowserRouter>
              <Switch>
                <Route path='/main/' exact  component={Message} />
                <Route path='/main/msg' exact  component={Message} />
                <Route path='/main/friends' exact  component={FriendsList} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      )
  }
}

export default Main