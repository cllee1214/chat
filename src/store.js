const storeData = {
  state: {
    userList: null,
    friendsInfo: [],
    groupsInfoList: []
  },
  getters: {
   
  },
  mutations: {
   setUserList(state, playload) {
    console.log(playload)
    state.userList = playload
   },
   setFriendsInfo (state, playload) {
    state.friendsInfo  = playload
   },
   setGroupsInfoList (state, playload) {
     state.groupsInfoList = playload
   }
  }
}

export default storeData