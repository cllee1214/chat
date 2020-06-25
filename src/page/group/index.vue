<template>
  <div id='group-chat'>
    <SearchBox :showResult='showResult' :searchResult='groupInfo' placeholder='请输入群id' type='group' @search='searchGroup' @add='addGroup'></SearchBox>
    <div class='guide'>
      <router-link to='/createGroup' >或者自己建一个群聊？</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'group',
  components: {},
  inject: ['user'],
  data() {
    return {
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
      console.log(id)
      this.axios.get(`/searchGroup/id/${id}`).then((data) => {
       var data = data.data
       if(data.code == '1') {
         this.groupInfo.name = data.name
         this.groupInfo.location = data.location
         this.groupInfo.isInGroup = data.users.indexOf(this.user) !== -1
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
      this.axios.post(`/addGroup/id/${id}/user/${this.user}`).then(() => {
        
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