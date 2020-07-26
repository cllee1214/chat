<template>
	<div id='add-friend'>
			<Header title="添加好友"></Header>
			<SearchBox :showResult='showResult' :searchResult='friendInfo' placeholder='请输入好友id' @search='searchFriend' @add='addFriend'></SearchBox>
	</div>
</template>

<script>

export default {
	name: 'addFriend',
	components: {},

	data() {
		return {
			title: '添加好友',
			showResult: false,
			friend: '',
			friendInfo: {
				nickname: '',
				declaration: '',
				status: false
			}
		};
	},
	inject: ['socket','user'],
	computed: {},
	methods: {

	},
	created() {
		 
	},
	methods: {
		searchFriend (friendId) {
			this.axios.get(`/info/user/${friendId}`).then((res) => {
					let data = res.data
					if(data.code === '1'){
							this.showSearchResult(data)
					}else{
						this.showSearchResult(null)
					}
				
      }).catch((err) => {
				this.showResult = false
				console.log(err)
			})
		},
		showSearchResult (data) {
			console.log(data)
			if(data){
				let keys = Object.keys(JSON.parse(JSON.stringify(this.friendInfo)))
				keys.forEach(key => {
					this.friendInfo[key] = data[key]
				})
				this.friendInfo.status = true
			}else{
				this.friendInfo.status = false
			}
			this.showResult = true
		},
		addFriend (friend){
			const socket = this.socket
			socket.emit('addFriend', {
				from: this.user,
				to: friend,
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