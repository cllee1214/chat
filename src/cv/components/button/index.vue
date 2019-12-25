<template>
  <component :is='tagName' :class='classes' @click="handleClick">
     <cv-icon v-if="isShowIcon"  :type='icon'></cv-icon>
    <span class="btn-content">
      <slot></slot>
    </span>
  </component>
 
</template>
<script>
import {isIn} from '../../utils/index'
const prefix = 'cv-btn'
const types = ['default', 'dashed', 'text']
const shapes = ['default', 'circle']
const tagets = ['']
export default {
  name:'Button',
  props: {
    target: {
      default: '__self',
    },
    type: {
      default: 'default',
      validator: function(value){
        return isIn(value, types)
      }
    },
    shape: {
      default: 'default',
      validator: function(value){
        return isIn(value, shapes)
      }
    },
    to: String,
    ghost: Boolean,
    long: Boolean,
    icon: String,
  },
  
  computed: {
    isShowIcon: function() {
      console.log(this.icon)
      return !!this.icon
    },
    tagName: function(){
      return this.to ? 'a' : 'button'
    },
    classes () {
      return [
        `${prefix}`,
        `${prefix}-${this.type}`,
        `${prefix}-${this.shape}`,
        this.ghost ? `${prefix}-ghost`: '',
        this.long ? `${prefix}-long` : ''
      ]
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
}
</script>
