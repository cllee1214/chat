import React from 'react'

import Input  from 'antd/lib/input'
import 'antd/lib/input/style/css'
import './index.css'

const Search = Input.Search
class Header extends React.Component {
  render() {
      return <div class='header'>
        <Search
          placeholder="搜索音乐"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
  }
}

export default Header