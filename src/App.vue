<template>
  <div id='container'>
    <Nav />
    <ChatBox />
  </div>
</template>

<script>
import Nav from './components/nav/index.vue'
import ChatBox from './components/chat/chatBox.vue'
import Personal from './components/personal/data.vue'

export default {
  name: 'app',
  data: function(){
    return {
  
    }
  },
  components: {
    Nav,
    ChatBox,
    Personal
  }
}
</script>

<style>
#container{
  width: 770px;
  height: 500px;
  margin: auto;
  border:1px dashed cadetblue;
  background: white;
  margin-top: 60px;
}
body{
  background: cadetblue;
}
body,html,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;} 
ul,ol{list-style-type:none;} 
select,input,img,select{vertical-align:middle;} 
a{text-decoration:none;} 
a:link{color:#009;} 
a:visited{color:#800080;} 
a:hover,a:active,a:focus{color:#c00;text-decoration:underline;}
</style>


