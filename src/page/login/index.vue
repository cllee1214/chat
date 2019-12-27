<template>
 
  <div style="width:200px">
     {{aaa}}
    <Cv-input v-model="aaa" prefix='search' suffix='refresh'  maxlength='5' placeholder='输入。。'></Cv-input>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      aaa: 'xxx'
    }
  }
}
</script>
