<template>
  <div id='personal-info'>
   个人信息DD
   <Cv-button shape='circle' icon='loading'  @click="test">按钮</Cv-button>
   <cv-icon type='loading'></cv-icon>
  </div>
</template>
<script>
export default {
  name:'personal-info',
  methods: {
    test(e) {
      console.log('test event')
    }
  }
}
</script>
