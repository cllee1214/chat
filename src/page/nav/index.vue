<template>
  <div id='nav'>
    <ul>
      <li :class='{"cur-selected": currentType == item.type}' v-for='item in list' :key="item.type"  @click='select(item.type, item.title, item.index)'>
        <Icon :type='item.type'></Icon>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from './icon.vue'
import changeTitleMixin from '../../mixins/changeHeaderTitle.js'
import '../../assets/nav/index.scss'
export default {
  name: 'navContainer',
  mixins: [changeTitleMixin.mixinInMethod],
  data () {
    return {
      currentType: 'message',
      list: [
        {
          type:'message',
          title: '消息',
          index: 0
        },
         {
          type:'user',
          title: '用户',
          index: 1
        },
         {
          type:'setting',
          title: '设置',
          index: 2
        }
      ]
    }
  },
  components: {
    Icon
  },
  methods: {
    select (type, title, index) {
      this.changeHeaderTitle(title)
      this.currentType = type
      this.$emit('switchPage', index)
    }
  },
  computed: {
    
  }
}
</script>