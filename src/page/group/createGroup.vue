<template>
  <div>
    <input v-model="name" type="text" placeholder="群名称">
    <input v-model="location" type="text" placeholder="群地点">
    加群验证：<input v-model='validate' type="checkbox">
    <button @click="submit">确认</button>
  </div>
</template>

<script>
import changeTitleMixin from '../../mixins/changeHeaderTitle.js'
export default {
  name: 'add-group',
  components: {},
  mixins: [changeTitleMixin.mixinInMounted],
  data() {
    return {
      title: '新建群聊',
      name: '',
      location: '',
      validate: false
    }
  },
  inject: ['user'],
  computed: {},
  methods: {
    submit () {
      this.axios.post('createGroup', {
        name: this.name,
        location: this.location,
        validate: this.validate,
        user: this.user
      }).then(() => {

      }, (err) => {

      })
    }
  },
  mounted() {
  },
  created() {
   
  },
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类

</style>