webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page/chat/ChatBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendBox.vue */ \"./src/page/chat/friendBox.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatbox',\n  components: {\n    FriendBox: _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      user: '',\n      userList: null,\n      socket: null,\n      isChatOpen: false,\n      currentFirend: '',\n      msgStore: {},\n      message: '',\n      unread: {}\n    };\n  },\n  created() {\n    let user = USER.user;\n    this.user = user;\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://127.0.0.1:8888/?user=' + user);\n    this.socket = socket;\n    let msgStore = this.msgStore;\n\n    socket.on('userList', data => {\n      console.log(data);\n      this.userList = data;\n    });\n    socket.on('sys', function (data) {\n      console.log(data);\n    });\n    socket.on('msg', data => {\n      console.log('recive:', data);\n      let friend = data.from;\n      if (msgStore && !msgStore[friend]) {\n        this.$set(msgStore, friend, []);\n      }\n      //更新为本地收到消息的时间\n      data.time = new Date().getTime();\n      msgStore[friend].push(data);\n    });\n  },\n  methods: {\n    processUnread(reciveData) {\n      let friend = reciveData.from;\n      if (friend != this.currentFirend) {\n        var num = this.unread[friend] ? this.unread[friend] : 0;\n        this.$set(this.unread, friend, ++num);\n      }\n    },\n    openChat(id, friend) {\n      if (this.user == friend) {\n        return;\n      }\n      this.isChatOpen = true;\n      this.unread[friend] = 0;\n      this.currentFirend = friend;\n      console.log(id, friend);\n    },\n    sendMsg() {\n      let friend = this.currentFirend;\n      let msgStore = this.msgStore;\n      let msgBody = {\n        message: this.message,\n        time: new Date().getTime(),\n        from: USER.user,\n        to: friend\n      };\n      const socket = this.socket;\n      if (msgStore && !msgStore[friend]) {\n        this.$set(msgStore, friend, []);\n      }\n      //本地储存消息\n      msgStore[friend].push(msgBody);\n      //发送到服务器中转\n      socket.emit('msg', msgBody);\n      console.log(this.message);\n      //清空输入框\n      this.message = '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZS9jaGF0L0NoYXRCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DaGF0Qm94LnZ1ZT81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD0nY2hhdCc+XG4gICAgPEZyaWVuZEJveCA6dXNlckxpc3Q9J3VzZXJMaXN0JyA6bXNnU3RvcmU9J21zZ1N0b3JlJyA6dXNlcj0ndXNlcicgQHN0YXJ0Q2hhdD1cIm9wZW5DaGF0XCI+PC9GcmllbmRCb3g+XG4gICAgPGRpdiBjbGFzcz0nY2hhdGluZycgdi1pZj0naXNDaGF0T3Blbic+XG4gICAgICA8ZGl2IGNsYXNzPSd0aXRsZSc+5q2j5Zyo5ZKMe3tjdXJyZW50RmlyZW5kfX3ogYrlpKk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWJveFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIHYtZm9yPSdpdGVtIGluIG1zZ1N0b3JlW2N1cnJlbnRGaXJlbmRdJyA6Y2xhc3M9J1tpdGVtLmZyb20gPT0gdXNlciA/IFwic2VsZi1tZXNzYWdlXCIgOiBcImZyaWVuZC1tZXNzYWdlXCJdJyBjbGFzcz0nbWVzc2FnZS1pdGVtJz5cbiAgICAgICAgICAgIHt7aXRlbS5tZXNzYWdlfX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdpbnB1dC16b25lJz5cbiAgICAgICAgPHRleHRhcmVhIHYtbW9kZWw9XCJtZXNzYWdlXCIgQGtleXVwLmVudGVyPVwic2VuZE1zZ1wiPjwvdGV4dGFyZWE+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBTb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuaW1wb3J0IEZyaWVuZEJveCBmcm9tICcuL2ZyaWVuZEJveC52dWUnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6J2NoYXRib3gnLFxuICBjb21wb25lbnRzOiB7XG4gICAgRnJpZW5kQm94XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiAnJyxcbiAgICAgIHVzZXJMaXN0OiBudWxsLFxuICAgICAgc29ja2V0OiBudWxsLFxuICAgICAgaXNDaGF0T3BlbjogZmFsc2UsXG4gICAgICBjdXJyZW50RmlyZW5kOiAnJyxcbiAgICAgIG1zZ1N0b3JlOiB7fSxcbiAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgdW5yZWFkOiB7fVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgbGV0IHVzZXIgPSBVU0VSLnVzZXJcbiAgICB0aGlzLnVzZXIgPSB1c2VyXG4gICAgY29uc3Qgc29ja2V0ID0gIFNvY2tldElPKCdodHRwOi8vMTI3LjAuMC4xOjg4ODgvP3VzZXI9JyArIHVzZXIpXG4gICAgdGhpcy5zb2NrZXQgPSBzb2NrZXRcbiAgICBsZXQgbXNnU3RvcmUgPSB0aGlzLm1zZ1N0b3JlXG5cbiAgICBzb2NrZXQub24oJ3VzZXJMaXN0JywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB0aGlzLnVzZXJMaXN0ID0gZGF0YVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzeXMnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ21zZycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVjaXZlOicsZGF0YSlcbiAgICAgIGxldCBmcmllbmQgPSBkYXRhLmZyb21cbiAgICAgIGlmKG1zZ1N0b3JlICYmICFtc2dTdG9yZVtmcmllbmRdKXtcbiAgICAgICAgdGhpcy4kc2V0KG1zZ1N0b3JlLCBmcmllbmQsIFtdKVxuICAgICAgfVxuICAgICAgLy/mm7TmlrDkuLrmnKzlnLDmlLbliLDmtojmga/nmoTml7bpl7RcbiAgICAgIGRhdGEudGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICBtc2dTdG9yZVtmcmllbmRdLnB1c2goZGF0YSlcbiAgICB9KVxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBwcm9jZXNzVW5yZWFkIChyZWNpdmVEYXRhKSB7XG4gICAgICBsZXQgZnJpZW5kID0gcmVjaXZlRGF0YS5mcm9tXG4gICAgICBpZihmcmllbmQgIT0gdGhpcy5jdXJyZW50RmlyZW5kKXtcbiAgICAgICAgdmFyIG51bSA9IHRoaXMudW5yZWFkW2ZyaWVuZF0gPyB0aGlzLnVucmVhZFtmcmllbmRdIDogMFxuICAgICAgICB0aGlzLiRzZXQodGhpcy51bnJlYWQsIGZyaWVuZCwgKytudW0pXG4gICAgICB9XG4gICAgfSxcbiAgICBvcGVuQ2hhdCAoaWQsIGZyaWVuZCl7XG4gICAgICBpZih0aGlzLnVzZXIgPT0gZnJpZW5kKXtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB0aGlzLmlzQ2hhdE9wZW4gPSB0cnVlXG4gICAgICB0aGlzLnVucmVhZFtmcmllbmRdID0gMFxuICAgICAgdGhpcy5jdXJyZW50RmlyZW5kID0gZnJpZW5kXG4gICAgICBjb25zb2xlLmxvZyhpZCwgZnJpZW5kKVxuICAgIH0sXG4gICAgc2VuZE1zZygpIHtcbiAgICAgIGxldCBmcmllbmQgPSB0aGlzLmN1cnJlbnRGaXJlbmRcbiAgICAgIGxldCBtc2dTdG9yZSA9IHRoaXMubXNnU3RvcmVcbiAgICAgIGxldCBtc2dCb2R5ID0ge1xuICAgICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICAgIHRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBmcm9tOiBVU0VSLnVzZXIsXG4gICAgICAgIHRvOiBmcmllbmRcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuc29ja2V0XG4gICAgICBpZihtc2dTdG9yZSAmJiAhbXNnU3RvcmVbZnJpZW5kXSl7XG4gICAgICAgIHRoaXMuJHNldChtc2dTdG9yZSwgZnJpZW5kLCBbXSlcbiAgICAgIH1cbiAgICAgIC8v5pys5Zyw5YKo5a2Y5raI5oGvXG4gICAgICBtc2dTdG9yZVtmcmllbmRdLnB1c2gobXNnQm9keSlcbiAgICAgIC8v5Y+R6YCB5Yiw5pyN5Yqh5Zmo5Lit6L2sXG4gICAgICBzb2NrZXQuZW1pdCgnbXNnJywgbXNnQm9keSlcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSlcbiAgICAgIC8v5riF56m66L6T5YWl5qGGXG4gICAgICB0aGlzLm1lc3NhZ2UgPSAnJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4jY2hhdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNoYXRpbmd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6MVxufVxuLmNoYXRpbmcgLnRpdGxle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY2hhdGluZyAuZGlzcGxheS1ib3h7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdGluZyAuaW5wdXQtem9uZXtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG4uY2hhdGluZyAuaW5wdXQtem9uZSB0ZXh0YXJlYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5OCU7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHRleHQtaW5kZW50OiA1cHg7XG59XG4ubWVzc2FnZS1pdGVte1xuICB3aWR0aDogMTAwJTtcbn1cbi5zZWxmLW1lc3NhZ2V7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZyaWVuZC1tZXNzYWdle1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckNBO0FBM0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&\n");

/***/ })

})