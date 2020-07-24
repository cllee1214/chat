<template>

<div id='main'>
  <ChatBox :animate='animate' :friendsInfo='friendsInfo' :groupsInfoList='groupsInfoList'></ChatBox>
</div>

</template>
<script>
import ChatBox from './ChatBox.vue'
import Store from '../../utils/store'
export default {
  name:'mainContainer',
  inject: ['user'],
  data () {
    return {
      animate: {
        index: 0,
        width: parseFloat(document.documentElement.clientWidth),
        left: 0
      },
      friendsInfo: [],
      groupsInfoList: []
    }
  },
  components: {
    ChatBox,
  },
  created () {
    this.updatePosition()
    this.pullFriends()
  },
  methods: {
    switchPage (index, isRelative) {
      const navList = this.$refs.nav.list
      if(isRelative){
        index = index + this.animate.index
        if(index > navList.length - 1){
          index = navList.length - 1
        }else if(index < 0){
          index = 0
        }
      }
      this.animate.index = index
      this.updatePosition()
    },
    updatePosition () {
      let {width, index} = this.animate
      this.animate.left = -width * index
    },
    pullFriends() {
      let myFriendsPromise = this.axios.get(`/pullFriends/user/${this.user}`)
      let allFriendsPromise = this.axios.get('/pullAllUser')
      let allGroupInfoPromise = this.axios.get('/getAllGroups')
      Promise.all([myFriendsPromise, allFriendsPromise, allGroupInfoPromise]).then((rs) => {
        console.log(rs)
        let friends =  rs[0].data.data
        let groupIds = rs[0].data.groups
        let allUserInfo = rs[1].data.data
        let allGroupsInfo = rs[2].data.groups

        let friendsMap = {}
        let groupIdMap = {}

        allGroupsInfo.forEach((group) => {
          groupIdMap[group.id] = group
        })
        let groupsInfoList = groupIds.map((id) => {
          return groupIdMap[id]
        })

        friends.forEach(f => {
          for(let k in f){
            friendsMap[k] = f[k]
          }
        })
        let friendsInfo = allUserInfo.filter(infoItem => {
          return friendsMap[infoItem.user]
        })

        
        this.groupsInfoList = groupsInfoList
        this.friendsInfo = friendsInfo
        console.log(friendsInfo)
      }).catch((err) => {

      })
    }
  },
   beforeRouteEnter(to, from, next) {
    if(Store.get('chat')){
      next()
    }else{
      console.log('没有登录，跳转到注册页')
      next('/regist')
    }
  }
}
</script>
<style>
@import '../../assets/common.scss';
#main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

</style>
