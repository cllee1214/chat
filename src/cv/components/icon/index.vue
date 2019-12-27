<template>
  <i type='type' :class='classes' :style="styles"></i>
</template>

<script>
import { isIn } from '../../utils';
const prefix = 'cv-icon'
const types = ['refresh','home', 'message', 'search','tongzhi', 'goback', 'email', 'loading']
export default {
  name: 'Icon',
  props: {
    type: {
      validator: function(value){
        return isIn(value, types)
      }
    },
    size: {
      default: 16,
      validator: function(value){
        var reg = /\d+/
        return reg.test(value)
      }
    },
    color: {

    }
  },
  computed: {
    classes: function(){
      return [
        'cv-iconfont',
        `${prefix}-${this.type}`
      ]
    },
    styles: function(){
      return {
        'font-sise': this.size + 'px',
        'color': this.color
      }
    }
  }
}
</script>
