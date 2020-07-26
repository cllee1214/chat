import Vue from 'vue'
const storeData = {
  state: {
    userList: null,
    friendsInfo: [],
    groupsInfoList: [],
    isChatOpen: false,
    currentFirend: {},
    msgStore: {
      single: {},
      group: {}
    }
  },
  getters: {
   
  },
  mutations: {
   setUserList(state, playload) {
    state.userList = playload
   },
   setFriendsInfo (state, playload) {
    state.friendsInfo  = playload
   },
   setGroupsInfoList (state, playload) {
     state.groupsInfoList = playload
   },
   switchChatBox(state) {
    state.isChatOpen = !state.isChatOpen
   },
   setCurrentFriend (state, playload) {
     state.currentFirend = playload
   },
   setMessageStore (state, playload) {
      let {single, group} = state.msgStore
      let type = playload.type
      if (type === 'single') {
        let key = playload.action === 'recive' ? playload.from : playload.to
        if(!single[key]){
          Vue.set(single, key, [])
        }
        single[key].push(playload)
      }
   }
  }
}

export default storeData