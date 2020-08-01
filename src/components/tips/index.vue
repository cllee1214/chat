<template>
  <div class='tips' v-show='isShow' v-cloak>
    {{content}}
  </div>
</template>

<script>

export default {
  name: 'tips',
  components: {},
  data() {
    return {
      isShow: true,
      content: ''
    };
  },
  computed: {},
  methods: {
    show(content) {
      this.content = content
      this.isShow = true
    },
    hide() {
      this.isShow = false
      this.isShow = ''
    }
  },
  created() {

  },
  mounted() {
    const timer = setTimeout(() => {
      this.isShow = false
    }, 2000)
  }
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类
// @import "../../assets/common.scss";
.tips{
  width: 60%;
  height: 30px;
  border: 1px solid #ccc;
  position: fixed;
  top: 20%;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #4a596b;
  color: #fff;
  font-size: 14px;
}
</style>