<template>
  <div id='container'>
      <Nav></Nav>
      <router-view></router-view>
  </div>
</template>

<script>
import Nav from './page/nav/index.vue'

export default {
  name: 'app',
  data: function(){
    return {
  
    }
  },
  components: {
   Nav
  }
}
</script>

<style>
#container{
  width: 770px;
  height: 500px;
  margin: auto;
  border-radius: 8px;
  background: white;
  margin-top: 60px;
  display: flex;
  overflow: hidden;
}
body{
 background-color: rgba(74, 89, 107, 1);
}
body,html,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;} 
ul,ol{list-style-type:none;} 
select,input,img,select{vertical-align:middle;} 
a{text-decoration:none;} 
a:link{color:#009;} 
a:visited{color:#800080;} 
a:hover,a:active,a:focus{color:#c00;text-decoration:underline;}

</style>


