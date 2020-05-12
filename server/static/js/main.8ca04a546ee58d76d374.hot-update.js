webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page/chat/ChatBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendBox.vue */ \"./src/page/chat/friendBox.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatbox',\n  components: {\n    FriendBox: _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  data() {\n    return {\n      userList: null,\n      socket: null,\n      isChatOpen: false,\n      currentUser: '',\n      msgStore: {},\n      message: ''\n    };\n  },\n  created() {\n    let user = USER.user;\n    const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()('http://127.0.0.1:8888/?user=' + user);\n    this.socket = socket;\n\n    socket.on('userList', data => {\n      console.log(data);\n      this.userList = data;\n    });\n    socket.on('sys', function (data) {\n      console.log(data);\n    });\n    socket.on('msg', data => {\n      console.log('recive:', data);\n    });\n  },\n  methods: {\n    openChat(id, user) {\n      this.isChatOpen = true;\n      this.currentUser = user;\n      console.log(id, user);\n    },\n    sendMsg() {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZS9jaGF0L0NoYXRCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DaGF0Qm94LnZ1ZT81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD0nY2hhdCc+XG4gICAgPEZyaWVuZEJveCA6dXNlckxpc3Q9J3VzZXJMaXN0JyBAc3RhcnRDaGF0PVwib3BlbkNoYXRcIj48L0ZyaWVuZEJveD5cbiAgICA8ZGl2IGNsYXNzPSdjaGF0aW5nJyB2LWlmPSdpc0NoYXRPcGVuJz5cbiAgICAgIDxkaXYgY2xhc3M9J3RpdGxlJz7mraPlnKjlkox7e2N1cnJlbnRVc2VyfX3ogYrlpKk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5LWJveFwiPlxuXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9J2lucHV0LXpvbmUnPlxuICAgICAgICA8dGV4dGFyZWEgdi1tb2RlbD1cIm1lc3NhZ2VcIiBAa2V5dXAuZW50ZXI9XCJzZW5kTXNnXCI+PC90ZXh0YXJlYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IFNvY2tldElPIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5pbXBvcnQgRnJpZW5kQm94IGZyb20gJy4vZnJpZW5kQm94LnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTonY2hhdGJveCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBGcmllbmRCb3hcbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJMaXN0OiBudWxsLFxuICAgICAgc29ja2V0OiBudWxsLFxuICAgICAgaXNDaGF0T3BlbjogZmFsc2UsXG4gICAgICBjdXJyZW50VXNlcjogJycsXG4gICAgICBtc2dTdG9yZToge30sXG4gICAgICBtZXNzYWdlOiAnJ1xuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgbGV0IHVzZXIgPSBVU0VSLnVzZXJcbiAgICBjb25zdCBzb2NrZXQgPSAgU29ja2V0SU8oJ2h0dHA6Ly8xMjcuMC4wLjE6ODg4OC8/dXNlcj0nICsgdXNlcilcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldFxuXG4gICAgc29ja2V0Lm9uKCd1c2VyTGlzdCcsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgdGhpcy51c2VyTGlzdCA9IGRhdGFcbiAgICB9KVxuICAgIHNvY2tldC5vbignc3lzJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdtc2cnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3JlY2l2ZTonLGRhdGEpXG4gICAgfSlcblxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgb3BlbkNoYXQgKGlkLCB1c2VyKXtcbiAgICAgIHRoaXMuaXNDaGF0T3BlbiA9IHRydWVcbiAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICBjb25zb2xlLmxvZyhpZCwgdXNlcilcbiAgICB9LFxuICAgIHNlbmRNc2coKSB7XG5cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuI2NoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0aW5ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OjFcbn1cbi5jaGF0aW5nIC50aXRsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmNoYXRpbmcgLmRpc3BsYXktYm94e1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNoYXRpbmcgLmlucHV0LXpvbmV7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLmNoYXRpbmcgLmlucHV0LXpvbmUgdGV4dGFyZWF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTglO1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICB0ZXh0LWluZGVudDogNXB4O1xufVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBaENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&\n");

/***/ })

})