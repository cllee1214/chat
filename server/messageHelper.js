
class MessageHelper {
  constructor() {
    this.userMap = {}
  }

  accessUserMap (username, id) {
    if(id){
      this.userMap[username] = id
    }else{
      delete this.userMap[username]
    }
  }
  
}

module.exports = MessageHelper