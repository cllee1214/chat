webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page/chat/ChatBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendBox.vue */ \"./src/page/chat/friendBox.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatbox',\n  components: {\n    FriendBox: _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      userList: null,\n      socket: null,\n      isChatOpen: false,\n      currentFirend: '',\n      msgStore: {},\n      message: ''\n    };\n  },\n  created() {\n    let user = USER.user;\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://127.0.0.1:8888/?user=' + user);\n    this.socket = socket;\n\n    socket.on('userList', data => {\n      console.log(data);\n      this.userList = data;\n    });\n    socket.on('sys', function (data) {\n      console.log(data);\n    });\n    socket.on('msg', data => {\n      console.log('recive:', data);\n    });\n  },\n  methods: {\n    openChat(id, user) {\n      this.isChatOpen = true;\n      this.currentFirend = user;\n      console.log(id, user);\n    },\n    sendMsg() {\n      let friend = this.currentFirend;\n      let msgStore = this.msgStore;\n      let msgBody = {\n        message: this.message,\n        time: new Date().getTime(),\n        from: USER.user,\n        to: friend\n      };\n      const socket = this.socket;\n      if (msgStore && !msgStore[friend]) {\n        this.$set(msgStore, friend, []);\n      }\n      //本地储存消息\n      msgStore[friend].push(msgBody);\n      //发送到服务器中转\n      socket.emit('msg', msgBody);\n      console.log(this.message);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZS9jaGF0L0NoYXRCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DaGF0Qm94LnZ1ZT81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD0nY2hhdCc+XG4gICAgPEZyaWVuZEJveCA6dXNlckxpc3Q9J3VzZXJMaXN0JyBAc3RhcnRDaGF0PVwib3BlbkNoYXRcIj48L0ZyaWVuZEJveD5cbiAgICA8ZGl2IGNsYXNzPSdjaGF0aW5nJyB2LWlmPSdpc0NoYXRPcGVuJz5cbiAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz7mraPlnKjlkox7e2N1cnJlbnRGaXJlbmR9feiBiuWkqTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRpc3BsYXktYm94XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgdi1mb3I9J2l0ZW0gaW4gbXNnU3RvcmVbY3VycmVudEZpcmVuZF0nPlxuICAgICAgICAgICAge3tpdGVtLm1lc3NhZ2V9fVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXpvbmUnPlxuICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIm1lc3NhZ2VcIiBAa2V5dXAuZW50ZXI9XCJzZW5kTXNnXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgRnJpZW5kQm94IGZyb20gJy4vZnJpZW5kQm94LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTonY2hhdGJveCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBGcmllbmRCb3hcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJMaXN0OiBudWxsLFxuICAgICAgc29ja2V0OiBudWxsLFxuICAgICAgaXNDaGF0T3BlbjogZmFsc2UsXG4gICAgICBjdXJyZW50RmlyZW5kOiAnJyxcbiAgICAgIG1zZ1N0b3JlOiB7fSxcbiAgICAgIG1lc3NhZ2U6ICcnXG4gICAgfVxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICBsZXQgdXNlciA9IFVTRVIudXNlclxuICAgIGNvbnN0IHNvY2tldCA9ICBTb2NrZXRJTygnaHR0cDovLzEyNy4wLjAuMTo4ODg4Lz91c2VyPScgKyB1c2VyKVxuICAgIHRoaXMuc29ja2V0ID0gc29ja2V0XG5cbiAgICBzb2NrZXQub24oJ3VzZXJMaXN0JywgKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB0aGlzLnVzZXJMaXN0ID0gZGF0YVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzeXMnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ21zZycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVjaXZlOicsZGF0YSlcbiAgICB9KVxuXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuQ2hhdCAoaWQsIHVzZXIpe1xuICAgICAgdGhpcy5pc0NoYXRPcGVuID0gdHJ1ZVxuICAgICAgdGhpcy5jdXJyZW50RmlyZW5kID0gdXNlclxuICAgICAgY29uc29sZS5sb2coaWQsIHVzZXIpXG4gICAgfSxcbiAgICBzZW5kTXNnKCkge1xuICAgICAgbGV0IGZyaWVuZCA9IHRoaXMuY3VycmVudEZpcmVuZFxuICAgICAgbGV0IG1zZ1N0b3JlID0gdGhpcy5tc2dTdG9yZVxuICAgICAgbGV0IG1zZ0JvZHkgPSB7XG4gICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGZyb206IFVTRVIudXNlcixcbiAgICAgICAgdG86IGZyaWVuZFxuICAgICAgfVxuICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zb2NrZXRcbiAgICAgIGlmKG1zZ1N0b3JlICYmICFtc2dTdG9yZVtmcmllbmRdKXtcbiAgICAgICAgdGhpcy4kc2V0KG1zZ1N0b3JlLCBmcmllbmQsIFtdKVxuICAgICAgfVxuICAgICAgLy/mnKzlnLDlgqjlrZjmtojmga9cbiAgICAgIG1zZ1N0b3JlW2ZyaWVuZF0ucHVzaChtc2dCb2R5KVxuICAgICAgLy/lj5HpgIHliLDmnI3liqHlmajkuK3ovaxcbiAgICAgIHNvY2tldC5lbWl0KCdtc2cnLCBtc2dCb2R5KVxuICAgICAgY29uc29sZS5sb2codGhpcy5tZXNzYWdlKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4jY2hhdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNoYXRpbmd7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6MVxufVxuLmNoYXRpbmcgLnRpdGxle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uY2hhdGluZyAuZGlzcGxheS1ib3h7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdGluZyAuaW5wdXQtem9uZXtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG4uY2hhdGluZyAuaW5wdXQtem9uZSB0ZXh0YXJlYXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5OCU7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIHRleHQtaW5kZW50OiA1cHg7XG59XG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUFoQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&\n");

/***/ })

})