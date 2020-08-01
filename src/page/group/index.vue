<template>
  <div id='group-chat'>
    <Header title="加入群聊"></Header>
    <SearchBox :showResult='showResult' :searchResult='groupInfo' placeholder='请输入群id' type='group' @search='searchGroup' @add='addGroup'></SearchBox>
    <div class='guide'>
      <router-link :to="{path:'/createGroup', query: {user: this.$route.query.user}}" >或者自己建一个群聊？</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'group',
  components: {},
  data() {
    return {
      title: '加入群聊',
      showResult: false,
      groupInfo: {
        name: '',
        location: '',
        isInGroup: false,
        status: false
      }
    };
  },
  computed: {},
  methods: {
    searchGroup (id) {
      const user = this.$route.query.user
      this.axios.get(`/searchGroup/id/${id}`).then((data) => {
       var data = data.data
       if(data.code == '1') {
         this.groupInfo.name = data.name
         this.groupInfo.location = data.location
         this.groupInfo.isInGroup = data.users.indexOf(user) !== -1
         this.groupInfo.status = true
       }else{
          this.groupInfo.status = false
          console.log(data)
       }
        this.showResult = true
      }, (err) => {
          this.showResult = false
      })
    },
    addGroup (id) {
      this.axios.post(`/addGroup/id/${id}/user/${this.$route.query.user}`).then(() => {
        
      })
    }
  },
  created() {

  },
}
</script>
<style lang='scss'>

@import '../../assets/common.scss';
.guide{
  width: 90%;
  font-size: 16px;
  margin: auto;
  padding-top:20px
}

</style>