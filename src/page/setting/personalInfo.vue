<template>
 <div id='set-info' class='set-info'>
     <Header title="个人信息设置"></Header>
     <div class='set-avatar' :style="{'background-image': `url(${renderImgPath})`}">
        <div class='avatar-mask'></div> 
        <div class='cur-avatar' @click='handleClick' >
            <img :src="renderImgPath" alt="">
            <input style="display:none" @change='setAvatar' type="file" ref="input">
        </div>
     </div>
     <ul>
         <li>
             <input placeholder="昵称" v-model="nickname" type="text">
         </li>
          <li>
             <input placeholder="个性宣言" v-model="declaration" type="text">
         </li>
     </ul>
      <div class='sure' @click='submit'>确定</div>
 </div>
</template>


<script>

export default {
    name: 'info',
    data () {
        return {
            user: '',
            nickname: '',
            declaration: '',
            avatarPath: '',
            avatar: null,
            title: '个人资料设置'
        }
    },
    created () {
        this.user = this.$route.query.user
        this.pullInfo()
    },
    computed: {
        renderImgPath () {
            let avatarPath = this.avatarPath
            if(!avatarPath)return
            var rs = /\\avatar\\\d+\.\w+/.exec(avatarPath)
            if(!rs)return avatarPath
            return rs[0].replace(/\\/g,'/')
        }
    },
    methods:{
        setAvatar (e) {
            console.log(e)
            let file = this.avatar = e.target.files[0]
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.addEventListener('load', () => {
                 this.avatarPath = fileReader.result
            })
        },
        handleClick() {
            this.$refs.input.click()
        },
        pullInfo () {
            this.axios.get(`/info/user/${this.user}`).then((res) => {
               let data = res.data
               this.renderInfo(data)
            })
        },
        renderInfo(data) {
            this.user = data.user
            this.nickname = data.nickname
            this.declaration = data.declaration
            this.avatarPath = data.avatar
        },
        submit() {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': this.token
                }
            }
            let formData = new FormData()
            let data = JSON.parse(JSON.stringify(this.$data))
        
            formData.append('nickname',this.nickname)
            formData.append('declaration',this.declaration)
            formData.append('avatar',this.avatar)
            formData.append('user',this.user)
        
            this.axios.post('/info', formData, config).then(() => {

            })
        }
    }
}
</script>  

<style lang='scss'>
@import '../../assets/common.scss';
    .set-info{
        width: 100%;
        height: 100%;
        margin: auto;
        .set-avatar{
            height: 40%;
            background-color:rgba(0,0,0,0.3);
            background-position: center;
            display: flex;
            position: relative;
            .avatar-mask{
                width: 100%;
                height: 100%;
                position: absolute;
                opacity: 0.8;
                background: #fff;
            }
            .cur-avatar{
                width: px2rem(200);
                height: px2rem(200);
                overflow: hidden;
                margin:auto;
                align-items: center;
                background:#4a596b;
                border:1px solid #4a596b;
                border-radius:px2rem(200) ;
                position: relative;
                z-index: 1;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
      
        ul{
            width: 90%;
            margin: auto;
            li{
                font-size: 16px;
                display: flex;
                 height: px2rem(100);
                 line-height: px2rem(100);
                 padding-top: 5%;
                 border-bottom:1px solid #ccc;
                 input{
                     width: 100%;
                     border:none;
                     outline: none;
                     text-indent: 5px;
                 }
            }
        }
        .sure{
            width: px2rem(550);
            height: px2rem(120);
            margin: auto;
            font-size: 16px;
            text-align: center;
            line-height: px2rem(120);
            color:#fff;
            background: #4a596b;
            margin-top:  px2rem(50);
        }
    }
</style>