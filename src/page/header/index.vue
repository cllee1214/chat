
<template>
     <div id='header' class='top-title'>
        <div v-if='isShowGoBackBtn' class='goback' @click='handleClick'><</div>
        <div class='show-title'>{{title}}</div>
    </div>
</template>

<script>
import Event from '../../eventBus.js'
export default {
    name: 'headerTitle',
    data () {
        return {
            isShowGoBackBtn: false,
            title: '消息',
            lastTitle: '',
        }
    },
    created () {
        Event.$on('switchHeader', (title, showStatus=false) => {
            this.lastTitle = this.title
            this.title = title
            this.isShowGoBackBtn = showStatus
        })
    },
    methods: {
        handleClick () {
           this.isShowGoBackBtn = false
           Event.$emit('closeChat')
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/common.scss';
.top-title{
   text-align: center;
   height: px2rem(100);
   border-bottom: 1px solid #ccc;
   position: relative;
}
.show-title{
  font-size: 16px;
  line-height: px2rem(100);
}
.goback{
  height: 100%;
  width: px2rem(100);
  line-height:px2rem(100);
  color: #ccc;
  position: absolute;
  left: 0;
}

</style>