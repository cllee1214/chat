import React from 'react'
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom'
import { NavBar, Icon, TabBar } from 'antd-mobile'

import Message from '../message/index'

class Main extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
      return (
        <div style={{height:'100%', width:'100%'}}>
          <NavBar mode="darl" icon={<Icon type="left" />} onLeftClick={() => console.log('onLeftClick')}>NavBar</NavBar>
          <div>main title</div>
          <Link to='/main/msg'> msg link </Link>
          <div style={{height:'50px',width:'100%',position:'fixed',bottom:0}}>
  
            <TabBar tabBarPosition='bottom'>
              <TabBar.Item 
                  title="Friend" 
                  key="Friend"   
                  selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                ></TabBar.Item>
                <TabBar.Item 
                  title="Friend" 
                  key="Friend"   
                  selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                ></TabBar.Item>
                <TabBar.Item 
                  title="Friend" 
                  key="Friend"   
                  selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                ></TabBar.Item>
                <TabBar.Item 
                  title="Friend" 
                  key="Friend"   
                  selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  icon={
                    <div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                    />
                  }
                ></TabBar.Item>
            </TabBar>
          </div>
          <div>
            <BrowserRouter>
              <Switch>
                <Route path='/main/msg' exact  component={Message} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      )
  }
}

export default Main