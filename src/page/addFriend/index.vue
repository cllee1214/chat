<template>
	<div id='add-friend'>
		<div class='seach-box'>
			<input type="输入好友Id" v-model="friend">
			<div class='seach' @click='searchFriend'>搜索</div>
		</div>
		<div v-if='showResult' class='friend-result'>
				<template v-if="friendInfo">
					<div class='avatar-box'></div>
					<div class='name'>{{friendInfo.nickname}}({{friend}})</div>
					<div v-if='friendInfo.declaration' class='declaration'>“{{friendInfo.declaration}}”</div>
					<div class='add-friend-requst' @click="addFriend">好友申请</div>
				</template>
				<template v-else>
						{{friend}}不存在，请重试
				</template>
			</div>
	</div>
</template>

<script>

export default {
	name: 'addFriend',
	components: {},
	data() {
		return {
			showResult: false,
			friend: '',
			friendInfo: {}
		};
	},
	inject: ['socket','user'],
	computed: {},
	methods: {

	},
	created() {
		 
	},
	methods: {
		searchFriend () {
			this.axios.get(`/info/user/${this.friend}`).then((res) => {
					let data = res.data
					if(data.code === '1'){
							this.showSearchResult(data)
					}else{
						this.showSearchResult(null)
					}
				
      }).catch((err) => {
				this.showSearchResult(null)
				console.log(err)
			})
		},
		showSearchResult (data) {
			if(data){
				for(let k in data){
						this.$set(this.friendInfo, k, data[k])
				}
				this.friendInfo = data
			}
			this.showResult = !!data		
			console.log(data)
		},
		addFriend (){
			const socket = this.socket
			socket.emit('addFriend', {
				from: this.user,
				to: this.friend,
				type: 'requst'
			})
		}
	}
}
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
.friend-result{
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