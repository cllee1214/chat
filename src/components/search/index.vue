<template>
  <div>
    <div class="seach-box">
      <input :placeholder="placeholder" v-model="searchKey" maxlength="6"/>
      <div class="seach" @click="handleSearch">搜索</div>
    </div>
    <div v-if="showResult" class="result-box">
      <template v-if="searchResult.status">

				<template v-if="type == 'group'">
					<div>群名：{{searchResult.name}}</div>
					<div>群地址：{{searchResult.location}}</div>
				</template>
				<template v-else>
					<div class="avatar-box"></div>
					<div class="name">{{searchResult.nickname}}({{lastSearchKey}})</div>
					<div v-if="searchResult.declaration" class="declaration">“{{searchResult.declaration}}”</div>
				</template>
        
        <div :class="addBtnClass" class="add-friend-requst" @click="handleAdd">{{addBtnText}}</div>
      </template>

      <template v-else>{{noResultText}}不存在，请重试</template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  props: ['placeholder','showResult','searchResult', 'type'],
  components: {},
  data() {
    return {
			lastSearchKey: '',
      searchKey: ''
    };
  },
  computed: {
		addBtnText() {
			return this.type === 'group' ? '申请入群' : '好友申请'
		},
		noResultText() {
			return this.type === 'group' ? `群 '${this.lastSearchKey}' ` : `好友 ${this.lastSearchKey}`
		},
		addBtnClass () {
			return this.searchResult.isInGroup ? 'disabled': ''
		}
	},
  methods: {
    handleSearch() {
			this.lastSearchKey = this.searchKey
      this.$emit('search', this.searchKey)
    },
    handleAdd() {
			if(this.searchResult.isInGroup){
				alert('您已经在这个群里了')
				return
			}
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
			&.disabled{
				background-color: #ccc;
			}
		}
	}
</style>