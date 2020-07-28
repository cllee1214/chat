import Vue from 'vue'
const storeData = {
  state: {
    userList: null,
    friendsInfo: [],
    groupsInfoList: [],
    isChatOpen: false,
    currentChatType: '',
    currentFirend: {},
    currentGroup: {},
    unreadMsgCount:{
      single: {},
      group: {}
    },
    msgStore: {
      single: {},
      group: {}
    },
    avatarMap: null,
    groupIds: []
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
   switchChatBox(state, playload) {
    state.isChatOpen = !state.isChatOpen
    state.currentChatType = playload && playload.type
   },
   setCurrentFriend (state, playload) {
     state.currentFirend = playload
   },
   setMessageStore (state, playload) {
      console.log('playload',playload)
      let {single, group} = state.msgStore
      let type = playload.type
      if (type === 'single') {
        let key = playload.action === 'recive' ? playload.from : playload.to
        if(!single[key]){
          Vue.set(single, key, [])
        }
        single[key].push(playload)
      }else if(type === 'group') {
        let key = playload.to
        if(!group[key]){
          Vue.set(group, key, [])
        }
        group[key].push(playload)
      }
   },
   setUnreadCount(state, playload) {
     let {single: singleCount} = state.unreadMsgCount 
     let {key: friend, type, count} = playload
     if(type === 'single') {
       if(!singleCount[friend]){
        Vue.set(singleCount, friend, 0)
       }
     }
     if(count === undefined) {
      singleCount[friend]++
     }else{
      singleCount[friend] = count
     }
   },
   setAvatarMap(state, playload) {
    state.avatarMap = playload
   },
   setGroupIds(state, playload) {
     playload.forEach((id, index) => {
       Vue.set(state.groupIds, index, id)
     })
   },
   setCurrentGroup(state, playload) {
    state.currentGroup = playload
   }
  }
}

export default storeData