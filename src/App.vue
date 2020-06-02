<template>
  <div id='container'>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './page/header/index.vue'
export default {
  name: 'app',
  data: function(){
    return {
     
    }
  },
  components: {
    Header
  },
  methods: {
   
  }
}
</script>

<style>
#container{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
body, html{
 /* background-color: rgba(74, 89, 107, 1); */
 height: 100%;
 width: 100%;
}
body,html,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div{margin:0;padding:0;border:0;} 
ul,ol{list-style-type:none;} 
select,input,img,select{vertical-align:middle;} 
a{text-decoration:none;} 
a:link{color:#009;} 
a:visited{color:#800080;} 
a:hover,a:active,a:focus{color:#c00;text-decoration:underline;}

</style>


