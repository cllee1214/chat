<template>
  <div id='modal' v-if="switchStatus">
    <div id='modal-mask'></div>
     <div id='modal-box' >
        <div class='content'>
          <slot></slot>
        </div>
        <div class="btns">
          <div v-if='okText' @click='handelOk' class='btn ok-btn'>{{okText}}</div>
          <div v-if='cancelText' @click='handelCancle' class='btn cancel-bnt'>{{cancelText}}</div> 
        </div>
      </div>
  </div>
  
</template>
<script>
export default {
  name:'modal',
  props: {
    okText: String,
    cancelText: String,
    switchStatus: Boolean,
  },
  model: {
    prop: 'switchStatus',
    event: 'swtich'
  },
  computed:{
   
  },
  methods: {
    swtichModel () {
      this.$emit('switch', !this.swtichModel)
    },
    handelOk () {
      this.$emit('ok')
    },
    handelCancle () {
       this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/common.scss';
#modal{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index:997
}
#modal-mask{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 998;
  opacity: 0.4;
  background: #ccc;
}
#modal-box{
  width: 70%;
  position: fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  border:1px solid #ccc;
  z-index: 999;
  background: #fff;
  .modal-mask{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 998;
  }
  .content{
    padding: px2rem(40) 0;
    font-size: 16px;
    text-align: left;
    width: 90%;
    margin: auto;
  }
  .btns{
    width: 100%;
    display: flex;
    font-size: 16px;
    border-top:1px solid #ccc;
    .btn{
      flex: 1;
      text-align: center;
      height: px2rem(80);
      line-height: px2rem(80);
      &:first-child{
        border-right: 1px solid #ccc;
        box-sizing: border-box;
      }
    }
  }
}

</style>