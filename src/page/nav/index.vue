<template>
  <div id='nav'>
    <ul>
      <li>聊天</li>
      <li>个人资料</li>
      <li>设置</li>
      <li>
        <a href="/logout">退出</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'navContainer',

}
</script>

<style>
#nav{
  width: 100%;
  border-bottom:1px dashed cadetblue;
  height: 30px;
}
#nav ul li{
  float: left;
  padding: 0 15px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
#nav ul li:hover{
  background: cadetblue;
   color: white;
}
</style>
