<template>
  <div>
    test
    <% name %>
    <div v-clip>aaa</div>
    <TestSon></TestSon>
  </div>


</template>

<script>
import TestSon from './test_son.vue'
export default {
  components: {
    TestSon
  },
  data() {
    return {

  };
  },
  computed: {},
  methods: {

  },
  beforeCreate() {
    console.log('index before create')
  },
  created() {
    console.log('index created')
  },
  beforeMount() {
    console.log('index before mount')
  },
  mounted() {
    console.log('index mounted')
  },
  beforeUpdate() {
    console.log('index before update')
  },
  updated() {
     console.log('index update')
  },
   beforeDestroy() {
    console.log('index before destroy')
  },
  destroyed() {
    console.log('index destroyed')
  }
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类

</style>