import React from 'react'

class UserList extends React.Component {
  constructor (props) {
    super(props)
  }
  render() {
    let userList = this.props.userList
    let userKeys = Object.keys(userList)
    let items = userKeys.map((key) =>{
      console.log('dfd',userList[key])
      return <li key={key}>{userList[key]}</li>
    })
    return (
      <div>
        <ul>
          userlist
          {items}
        </ul>
      </div>
    )
  }
}

export default UserList