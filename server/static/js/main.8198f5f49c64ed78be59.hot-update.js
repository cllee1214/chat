webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page/chat/ChatBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendBox.vue */ \"./src/page/chat/friendBox.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatbox',\n  components: {\n    FriendBox: _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      user: '',\n      userList: null,\n      socket: null,\n      isChatOpen: false,\n      currentFirend: '',\n      msgStore: {},\n      message: ''\n    };\n  },\n  created() {\n    let user = USER.user;\n    this.user = user;\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://127.0.0.1:8888/?user=' + user);\n    this.socket = socket;\n    let msgStore = this.msgStore;\n\n    socket.on('userList', data => {\n      console.log(data);\n      this.userList = data;\n    });\n    socket.on('sys', function (data) {\n      console.log(data);\n    });\n    socket.on('msg', data => {\n      console.log('recive:', data);\n      let friend = data.from;\n      if (msgStore && !msgStore[friend]) {\n        this.$set(msgStore, friend, []);\n      }\n      //更新为本地收到消息的时间\n      data.time = new Date().getTime();\n      msgStore[friend].push(data);\n    });\n  },\n  methods: {\n    openChat(id, friend) {\n      if (user == friend) {\n        return;\n      }\n      this.isChatOpen = true;\n      this.currentFirend = friend;\n      console.log(id, friend);\n    },\n    sendMsg() {\n      let friend = this.currentFirend;\n      let msgStore = this.msgStore;\n      let msgBody = {\n        message: this.message,\n        time: new Date().getTime(),\n        from: USER.user,\n        to: friend\n      };\n      const socket = this.socket;\n      if (msgStore && !msgStore[friend]) {\n        this.$set(msgStore, friend, []);\n      }\n      //本地储存消息\n      msgStore[friend].push(msgBody);\n      //发送到服务器中转\n      socket.emit('msg', msgBody);\n      console.log(this.message);\n      //清空输入框\n      this.message = '';\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZS9jaGF0L0NoYXRCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DaGF0Qm94LnZ1ZT81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD0nY2hhdCc+XG4gICAgPEZyaWVuZEJveCA6dXNlckxpc3Q9J3VzZXJMaXN0JyBAc3RhcnRDaGF0PVwib3BlbkNoYXRcIj48L0ZyaWVuZEJveD5cbiAgICA8ZGl2IGNsYXNzPSdjaGF0aW5nJyB2LWlmPSdpc0NoYXRPcGVuJz5cbiAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz7mraPlnKjlkox7e2N1cnJlbnRGaXJlbmR9feiBiuWkqTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktYm94XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgdi1mb3I9J2l0ZW0gaW4gbXNnU3RvcmVbY3VycmVudEZpcmVuZF0nIDpjbGFzcz0nW2l0ZW0uZnJvbSA9PSB1c2VyID8gXCJzZWxmLW1lc3NhZ2VcIiA6IFwiZnJpZW5kLW1lc3NhZ2VcIl0nIGNsYXNzPSdtZXNzYWdlLWl0ZW0nPlxuICAgICAgICAgICAge3tpdGVtLm1lc3NhZ2V9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXpvbmUnPlxuICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIm1lc3NhZ2VcIiBAa2V5dXAuZW50ZXI9XCJzZW5kTXNnXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgRnJpZW5kQm94IGZyb20gJy4vZnJpZW5kQm94LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTonY2hhdGJveCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBGcmllbmRCb3hcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6ICcnLFxuICAgICAgdXNlckxpc3Q6IG51bGwsXG4gICAgICBzb2NrZXQ6IG51bGwsXG4gICAgICBpc0NoYXRPcGVuOiBmYWxzZSxcbiAgICAgIGN1cnJlbnRGaXJlbmQ6ICcnLFxuICAgICAgbXNnU3RvcmU6IHt9LFxuICAgICAgbWVzc2FnZTogJydcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIGxldCB1c2VyID0gVVNFUi51c2VyXG4gICAgdGhpcy51c2VyID0gdXNlclxuICAgIGNvbnN0IHNvY2tldCA9ICBTb2NrZXRJTygnaHR0cDovLzEyNy4wLjAuMTo4ODg4Lz91c2VyPScgKyB1c2VyKVxuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG4gICAgbGV0IG1zZ1N0b3JlID0gdGhpcy5tc2dTdG9yZVxuXG4gICAgc29ja2V0Lm9uKCd1c2VyTGlzdCcsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgdGhpcy51c2VyTGlzdCA9IGRhdGFcbiAgICB9KVxuICAgIHNvY2tldC5vbignc3lzJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdtc2cnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3JlY2l2ZTonLGRhdGEpXG4gICAgICBsZXQgZnJpZW5kID0gZGF0YS5mcm9tXG4gICAgICBpZihtc2dTdG9yZSAmJiAhbXNnU3RvcmVbZnJpZW5kXSl7XG4gICAgICAgIHRoaXMuJHNldChtc2dTdG9yZSwgZnJpZW5kLCBbXSlcbiAgICAgIH1cbiAgICAgIC8v5pu05paw5Li65pys5Zyw5pS25Yiw5raI5oGv55qE5pe26Ze0XG4gICAgICBkYXRhLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgbXNnU3RvcmVbZnJpZW5kXS5wdXNoKGRhdGEpXG4gICAgfSlcblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbkNoYXQgKGlkLCBmcmllbmQpe1xuICAgICAgaWYodXNlciA9PSBmcmllbmQpe1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuaXNDaGF0T3BlbiA9IHRydWVcbiAgICAgIHRoaXMuY3VycmVudEZpcmVuZCA9IGZyaWVuZFxuICAgICAgY29uc29sZS5sb2coaWQsIGZyaWVuZClcbiAgICB9LFxuICAgIHNlbmRNc2coKSB7XG4gICAgICBsZXQgZnJpZW5kID0gdGhpcy5jdXJyZW50RmlyZW5kXG4gICAgICBsZXQgbXNnU3RvcmUgPSB0aGlzLm1zZ1N0b3JlXG4gICAgICBsZXQgbXNnQm9keSA9IHtcbiAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgZnJvbTogVVNFUi51c2VyLFxuICAgICAgICB0bzogZnJpZW5kXG4gICAgICB9XG4gICAgICBjb25zdCBzb2NrZXQgPSB0aGlzLnNvY2tldFxuICAgICAgaWYobXNnU3RvcmUgJiYgIW1zZ1N0b3JlW2ZyaWVuZF0pe1xuICAgICAgICB0aGlzLiRzZXQobXNnU3RvcmUsIGZyaWVuZCwgW10pXG4gICAgICB9XG4gICAgICAvL+acrOWcsOWCqOWtmOa2iOaBr1xuICAgICAgbXNnU3RvcmVbZnJpZW5kXS5wdXNoKG1zZ0JvZHkpXG4gICAgICAvL+WPkemAgeWIsOacjeWKoeWZqOS4rei9rFxuICAgICAgc29ja2V0LmVtaXQoJ21zZycsIG1zZ0JvZHkpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2UpXG4gICAgICAvL+a4heepuui+k+WFpeahhlxuICAgICAgdGhpcy5tZXNzYWdlID0gJydcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuI2NoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0aW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OjFcbn1cbi5jaGF0aW5nIC50aXRsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNoYXRpbmcgLmRpc3BsYXktYm94e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXRpbmcgLmlucHV0LXpvbmV7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLmNoYXRpbmcgLmlucHV0LXpvbmUgdGV4dGFyZWF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTglO1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuLm1lc3NhZ2UtaXRlbXtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VsZi1tZXNzYWdle1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mcmllbmQtbWVzc2FnZXtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQTFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&\n");

/***/ })

})