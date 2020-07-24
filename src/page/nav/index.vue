<template>
  <div id='nav'>
    <ul>
      <li :class='{"cur-selected": currentType == item.type}' v-for='item in list' :key="item.url"  @click='select(item.url, item.type)'>
        <Icon :type='item.type'></Icon>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from './icon.vue'
import '../../assets/nav/index.scss'
export default {
  name: 'navContainer',
  data () {
    return {
      currentType: 'message',
      list: [
        {
          type: 'message',
          url: '/',
          title: '消息',
        },
         {
          type: 'user',
          url: '/friends',
          title: '用户',
        },
         {
          type: 'setting',
          url: '/settings',
          title: '设置',
        }
      ]
    }
  },
  components: {
    Icon
  },
  methods: {
    select (url, type) {
      this.currentType = type
      this.$router.push(url)
    }
  },
  computed: {
    
  }
}
</script>