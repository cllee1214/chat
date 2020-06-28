
<template>
     <div id='header' class='top-title'>
        <div v-if='isShowGoBackBtn' class='goback' @click='handleClick'><</div>
        <div class='show-title'>{{title}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'headerTitle',
    data () {
        return {}
    },
    created () {},
    computed: mapState({
        isShowGoBackBtn: 'isShowGoBackBtn',
        title: 'title'
    }),
    methods: {
        handleClick () {
            this.$store.commit('hideBackBtn')
        //    Event.$emit('closeChat')
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