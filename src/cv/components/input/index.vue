<template>
    <div :class='classes' class='cv-input-container'>
      <div v-if='isShowPrefix' class="cv-input-prefix-container">
        <Cv-icon :type='prefix'></Cv-icon>
      </div>
      <input :value='value' v-on:input="$emit('input',$event.target.value)"  type="text"  :placeholder="placeholder" :maxlength='maxlength'>
      <div v-if='isShowSuffix' class="cv-input-suffix-container">
         <Cv-icon :type='suffix'></Cv-icon>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Input',
  // 自定义组件 v-model
  // https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: String,
    placeholder: String,
    maxlength: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    prefix: String,
    suffix: String,
    'v-model': String
  },
  computed: {
    disabledState () {
      console.log(111)
      console.log(typeof this.disabled)
      if(this.disabled){
        return ''
      }else{
         return 'disabled'
      }
    },
    isShowPrefix () {
      return !!this.prefix
    },
    isShowSuffix () {
      return !!this.suffix
    },
    classes () {
      var classes = []
      if(this.prefix){
        classes.push('prefix-padding')
      }
      if(this.suffix){
        classes.push('suffix-padding')
      }
      return classes
    }
  }
}
</script>