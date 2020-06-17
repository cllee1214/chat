<template>
  <div>
    <div class="seach-box">
      <input :placeholder="placeholder" v-model="searchKey" />
      <div class="seach" @click="handleSearch">搜索</div>
    </div>
    <div v-if="showResult" class="result-box">
      <template v-if="searchResult">
        <div class="avatar-box"></div>
        <div class="name">{{searchResult.nickname}}({{searchKey}})</div>
        <div v-if="searchResult.declaration" class="declaration">“{{searchResult.declaration}}”</div>
        <div class="add-friend-requst" @click="handleAdd">好友申请</div>
      </template>
      <template v-else>{{searchKey}}不存在，请重试</template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  props: ['placeholder','showResult','searchResult'],
  components: {},
  data() {
    return {
      searchKey: ''
    };
  },
  computed: {},
  methods: {
    handleSearch() {
      this.$emit('search', this.searchKey)
    },
    handleAdd() {
      this.$emit('add', this.searchKey)
    }
  },
  created() {}
};
</script>
<style lang='scss'>
@import '../../assets/common.scss';
.seach-box{
	width: 90%;
	margin: auto;
	display: flex;
	height: px2rem(120);
	padding-top:px2rem(120);
	 
	input{
		flex: 8;
		text-indent: px2rem(10);
	}
	.seach{
		background-color:  rgba(74, 89, 107, 1);
		color: #fff;
		flex: 2;
		text-align: center;
		font-size: 16px;
		line-height: px2rem(120);
	}
	
}
.result-box{
		width: 90%;
		margin: auto;
		border: 1px solid #ccc;
		padding-bottom: px2rem(40);
		padding-top: px2rem(40);
		font-size: 16px;
		text-align: center;
		.add-friend-requst{
			width: 50%;
			margin: auto;
			height: px2rem(80);
			line-height: px2rem(80);
			background-color:  rgba(74, 89, 107, 1);
			color: #fff;
			text-align: center;
			margin-top: px2rem(20);
			font-size: 16px;
		}
	}
</style>