(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,r){var s=r(146);"string"==typeof s&&(s=[[e.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(2)(s,n);s.locals&&(e.exports=s.locals)},145:function(e,t,r){"use strict";var s=r(142);r.n(s).a},146:function(e,t,r){(e.exports=r(1)(!1)).push([e.i,"#message-list{width:100%;height:100%;background:#fff}#message-list ul{clear:both}.last-msg{font-size:12px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:#aaa;padding-right:20px}.unread-count{position:absolute;right:10px;top:10px;font-size:12px;color:red;width:15px;height:15px;border:1px solid red;line-height:15px;text-align:center;border-radius:15px;font-style:normal}\n",""])},151:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"message-list"}},[e.userList?r("ul",e._l(e.friendsInfo,(function(t){return r("li",{key:t.user,staticClass:"user-item",on:{click:function(r){return e.clickUser(t.user)}}},[r("span",{staticClass:"avatar"},[r("img",{attrs:{src:e._f("renderImgPath")(t.avatar),alt:""}})]),e._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"nickname"},[e._v(e._s(t.user))]),e._v(" "),r("div",{staticClass:"last-msg"},[e._v("最后一句话")])]),e._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:e.unreadMsgCount.single[t.user]>0,expression:"unreadMsgCount.single[friend.user] > 0"}],staticClass:"unread-count"},[e._v(e._s(e.unreadMsgCount.single[t.user]))])])})),0):r("div",[e._v("\n   当前无消息\n  ")])])};s._withStripped=!0;var n=r(6);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={name:"messages-list",mixins:[r(38).a],created(){},computed:o(o({},Object(n.b)(["unreadMsgCount","friendsInfo"])),{},{userList(){return this.$store.state.userList}}),methods:{clickUser(e){let t=this.userList[e];this.$store.commit("switchChatBox"),this.$store.commit("setCurrentFriend",{id:t,user:e}),this.$store.commit("setUnreadCount",{type:"single",key:e,count:0})}}},u=(r(145),r(0)),l=Object(u.a)(c,s,[],!1,null,null,null);l.options.__file="src/page/message/index.vue";t.default=l.exports}}]);