<template>
  <div>test son</div>
</template>

<script>

export default {
  components: {},
  data() {
    return {

  };
  },
  computed: {},
  methods: {

  },
  beforeCreate() {
    console.log('son before create')
  },
  created() {
    console.log('son created')
  },
  beforeMount() {
    console.log('son before mount')
  },
  mounted() {
    console.log('son mounted')
  },
   beforeUpdate() {
    console.log('son before update')
  },
  updated() {
     console.log('son update')
  },
  beforeDestroy() {
    console.log('son before destroy')
  },
  destroyed() {
    console.log('son destroyed')
  }
}
</script>
<style lang='scss'>
//@import url(); 引入公共css类

</style>