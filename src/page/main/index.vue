<template>
  <div id="chat-container">
    <Header title="主页"></Header>
    <ChatSingle></ChatSingle>
    <Modal
      v-model="isOpenModal"
      :okText="btnsText.ok"
      :cancelText="btnsText.cancel"
      @ok="okFn"
      @cancel="cancleFn"
    >{{addFriendContent}}</Modal>
    <keep-alive>
      <router-view include="chatbox"></router-view>
    </keep-alive>
    <Nav></Nav>
  </div>
</template>
<script>
import Store from "../../utils/store";
import Nav from "../nav/index.vue";
import ChatSingle from '../chat/chatSingle.vue'
import SocketIO from "socket.io-client";
import { mapState } from 'vuex'
export default {
  name: "mainContainer",
  data() {
    return {
      socket: SocketIO("http://127.0.0.1:8888/?user=" + Store.get("chat").user),
      user: Store.get("chat").user,
      isOpenModal: false,
      addFriendContent: "",
      messageFrom: "",
      option: "", //好友请求的回复的两种类型： 同意/搁置
      btnsText: {
        ok: "",
        cancel: "",
      },
    };
  },
  computed: {
    ...mapState([
      'isChatOpen',
      'currentFirend'
    ])
  },
  components: {
    Nav,
    ChatSingle
  },
  provide() {
    return {
      socket: this.socket,
      user: this.user,
    };
  },
  created() {
    this.pullFriends();
    this.handleAddFriend();
    this.initChannel()
  },
  beforeRouteEnter(to, from, next) {
    if (Store.get("chat")) {
      next();
    } else {
      console.log("没有登录，跳转到注册页");
      next("/regist");
    }
  },
  methods: {
    initChannel() {
      const socket = this.socket;
      socket.on("userList", (data) => {
        console.log(data);
        this.$store.commit("setUserList", data);
      });
      socket.on("sys", function (data) {
        console.log(data);
      });
      socket.on("msg", (data) => {
        console.log("recive:", data);

        //处理未读消息
        this.handleUnread(data);
        let friend = data.from;
        //更新为本地收到消息的时间
        data.time = new Date().getTime();
        data.action = 'recive'
        this.storeMessage(data)
      });
    },
    storeMessage(msgBody) {
      this.$store.commit('setMessageStore', msgBody)
    },
    handleUnread(data) {
      let friend = this.currentFirend.user
      let msgFromFriend = data.from
      if(friend !== msgFromFriend || !this.isChatOpen){
        this.$store.commit('setUnreadCount', {
          key: msgFromFriend,
          type: 'single'
        })
      }
    },
    pullFriends() {
      let myFriendsPromise = this.axios.get(`/pullFriends/user/${this.user}`);
      let allFriendsPromise = this.axios.get("/pullAllUser");
      let allGroupInfoPromise = this.axios.get("/getAllGroups");
      Promise.all([myFriendsPromise, allFriendsPromise, allGroupInfoPromise])
        .then((rs) => {
          console.log(rs);
          let friends = rs[0].data.data;
          let groupIds = rs[0].data.groups;
          let allUserInfo = rs[1].data.data;
          console.log('alluserinfo:', allUserInfo)
          let allGroupsInfo = rs[2].data.groups;

          let friendsMap = {};
          let groupIdMap = {};
          let avatarMap = {};

          allGroupsInfo.forEach((group) => {
            groupIdMap[group.id] = group;
          });
          let groupsInfoList = groupIds.map((id) => {
            return groupIdMap[id];
          });

          friends.forEach((f) => {
            for (let k in f) {
              friendsMap[k] = f[k];
            }
          });
          let friendsInfo = allUserInfo.filter((infoItem) => {
            avatarMap[infoItem.user] = infoItem.avatar
            return friendsMap[infoItem.user];
          });

          this.$store.commit("setGroupsInfoList", groupsInfoList);
          this.$store.commit("setFriendsInfo", friendsInfo);
          this.$store.commit('setAvatarMap', avatarMap)
          console.log(friendsInfo);
        })
        .catch((err) => {});
    },
    handleAddFriend() {
      const socket = this.socket;
      socket.on("addFriend", (data) => {
        console.log(data);
        if (data.option) {
          //收到好友请求回复
          this.btnsText.cancel = "";
        } else {
          //收到好友请求
          this.btnsText.cancel = "暂时忽略";
        }
        this.btnsText.ok = "确定";
        this.option = data.option;
        this.messageFrom = data.from;
        this.addFriendContent = data.message;
        this.isOpenModal = true;
      });
    },
    handleClickBtn() {
      let status = (this.isShowGoBackBtn = !this.isShowGoBackBtn);
      title = status ? title : this.lastTitle;
      this.changeTitle(title);
    },
    okFn() {
      if (!this.option) {
        console.log("friend add!");
        this.socket.emit("addFriend", {
          to: this.messageFrom,
          from: this.user,
          type: "response",
          option: "agree",
        });
      }
      this.isOpenModal = false;
    },
    cancleFn() {},
  },
};
</script>
<style>
@import "../../assets/common.scss";
#chat-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
