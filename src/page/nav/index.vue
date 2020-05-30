<template>
  <div id='nav'>
    <ul>
      <li>
        <Icon type='message'></Icon>
      </li>
      <li>
        <Icon type='user'></Icon>
      </li>
      <li>
        <Icon type='setting'></Icon>
      </li>
      <li>
        <a href="/logout">退出</a>
      </li>
    </ul>
  </div>
</template>
<script>
import Icon from './icon.vue'
export default {
  name: 'navContainer',
  components: {
    Icon
  }
}
</script>

<style>
#nav{
  width: 50px;
  height: 100%;
  background-color: rgba(47, 57, 66, 1);
}
#nav ul li{
  float: left;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
#nav ul li:hover{
  background: cadetblue;
   color: white;
}
</style>
