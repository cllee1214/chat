webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/page/chat/ChatBox.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/lib/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./friendBox.vue */ \"./src/page/chat/friendBox.vue\");\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'chatbox',\n  components: {\n    FriendBox: _friendBox_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  created() {\n    console.log(socket_io_client__WEBPACK_IMPORTED_MODULE_0___default.a);\n    let user = USER.user;\n    const socket = SocketIO('http://127.0.0.1:8888/?user=' + user);\n\n    socket.on('userList', data => {\n      console.log(data);\n    });\n    socket.on('sys', function (data) {\n      console.log(data);\n    });\n    socket.on('msg', data => {\n      console.log('recive:', data);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9zcmMvcGFnZS9jaGF0L0NoYXRCb3gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DaGF0Qm94LnZ1ZT81YzcwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD0nY2hhdCc+XG4gICAg6IGK5aSpXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcbmltcG9ydCBGcmllbmRCb3ggZnJvbSAnLi9mcmllbmRCb3gudnVlJ1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOidjaGF0Ym94JyxcbiAgY29tcG9uZW50czoge1xuICAgIEZyaWVuZEJveFxuICB9LFxuICBjcmVhdGVkICgpIHtcbiAgICBjb25zb2xlLmxvZyhzb2NrZXRJTylcbiAgICBsZXQgdXNlciA9IFVTRVIudXNlclxuICAgIGNvbnN0IHNvY2tldCA9ICBTb2NrZXRJTygnaHR0cDovLzEyNy4wLjAuMTo4ODg4Lz91c2VyPScgKyB1c2VyKVxuXG4gICAgc29ja2V0Lm9uKCd1c2VyTGlzdCcsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIH0pXG4gICAgc29ja2V0Lm9uKCdzeXMnLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgfSlcbiAgICBzb2NrZXQub24oJ21zZycsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVjaXZlOicsZGF0YSlcbiAgICB9KVxuXG4gIH1cbn1cbjwvc2NyaXB0PlxuPHN0eWxlPlxuI2NoYXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NzBweFxufVxuPC9zdHlsZT5cblxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/page/chat/ChatBox.vue?vue&type=script&lang=js&\n");

/***/ })

})