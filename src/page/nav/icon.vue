<template>
      <svg class="icon"  aria-hidden="true">
        <use :xlink:href="icontype"></use>
    </svg>
</template>
<script>
import '../../assets/iconfont.js'
export default {
    name: 'chat-icon',
    props: ['type'],
    computed: {
        icontype () {
            // return '#icon-icon-test'
            const typeMap = {
                message: 'test',
                search: 'test1',
                setting: 'test2',
                user: 'test3'
            }
            return `#icon-icon-${typeMap[this.type]}`
        }
    }
}
</script>
<style>
.icon {
    width: 20px;
    height: 20px;
    vertical-align: -0.15em;
    fill: red;
    overflow: hidden;
    font-size: 16px;
 }
</style>
