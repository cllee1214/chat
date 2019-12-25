(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class='main'>\n  <!-- <app-top-bar></app-top-bar> -->\n  <app-user-list></app-user-list>\n  <div class='main-right fr'>\n    <app-message-box></app-message-box>\n  </div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/message-box/message-box.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/message-box/message-box.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='friend-info'>\n  <div class='friend-name'>测试名字</div>\n  <div class='sign'>抠脚老司机</div>\n</div>\n<div class='message-board'>\n\n</div>\n\n<div class='type-board'>\n   <input type=\"text\" placeholder=\"说点什么...\">\n   <div class='send-btn fr'>发送</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/top-bar/top-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  top-bar works!\n</p>\n<!-- <div class='top-bar'>\n  <ul>\n    <li *ngFor='let item of navItems'>\n      <a href=\"\">{{item.content}}</a>\n    </li>\n  </ul>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-list/user-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='user-list'>\n  <div class='seach-box'>\n    <i nz-icon nzType=\"search\" nzTheme=\"outline\"></i>\n    <input type=\"text\">\n  </div>\n  <ul>\n    <li>\n      <div title=\"avatar\" class='avatar fl'></div>\n      <div class=\"fl\">\n        <div class='name'>测试名字</div>\n        <div class='last-message'>测试最近一条消息</div>\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  width: 800px;\n  height: 600px;\n  background: #f2f2f0;\n}\n\n.main-right {\n  width: 600px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXGRlbW9cXHBsYXllclxcYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICB3aWR0aDogODAwcHg7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjQyLCAyNDIsIDI0MCk7XHJcbn1cclxuLm1haW4tcmlnaHR7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufSIsIi5tYWluIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYwO1xufVxuXG4ubWFpbi1yaWdodCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./message-box/message-box.component */ "./src/app/message-box/message-box.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_13__);














Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_13___default.a);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_5__["TopBarComponent"],
            _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
            _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_7__["MessageBoxComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NgZorroAntdModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_8__["zh_CN"] }],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/message-box/message-box.component.css":
/*!*******************************************************!*\
  !*** ./src/app/message-box/message-box.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".friend-info{\r\n  width: 100%;\r\n  height: 50px;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n}\r\n.friend-name{\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  margin-top: 9px;\r\n  padding-left: 25px;\r\n}\r\n.sign{\r\n  font-size: 12px;\r\n  color: #a9a4a4;\r\n  padding-left: 25px;\r\n}\r\n.message-board{\r\n  width: 100%;\r\n  height: 500px;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n  box-sizing: border-box;\r\n}\r\n.type-board{\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  box-sizing: border-box;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n  padding-left: 25px;\r\n}\r\n.type-board input{\r\n  width: 350px;\r\n  border: 0px;\r\n  height: 100%;\r\n}\r\n.type-board .send-btn{\r\n  width: 100px;\r\n  height: 30px;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  margin: 10px 25px 0 0;\r\n  font-size:14px;\r\n  border:1px solid rgb(233, 231, 231);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS1ib3gvbWVzc2FnZS1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMkNBQTJDO0VBQzNDLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztFQUMzQyxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlLWJveC9tZXNzYWdlLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZC1pbmZve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMywgMjMxLCAyMzEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uZnJpZW5kLW5hbWV7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXRvcDogOXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG4uc2lnbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNhOWE0YTQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcbi5tZXNzYWdlLWJvYXJke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzMsIDIzMSwgMjMxKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4udHlwZS1ib2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjMzLCAyMzEsIDIzMSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcbi50eXBlLWJvYXJkIGlucHV0e1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBib3JkZXI6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50eXBlLWJvYXJkIC5zZW5kLWJ0bntcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDEwcHggMjVweCAwIDA7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjMzLCAyMzEsIDIzMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message-box/message-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/message-box/message-box.component.ts ***!
  \******************************************************/
/*! exports provided: MessageBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBoxComponent", function() { return MessageBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageBoxComponent = class MessageBoxComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessageBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message-box',
        template: __webpack_require__(/*! raw-loader!./message-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/message-box/message-box.component.html"),
        styles: [__webpack_require__(/*! ./message-box.component.css */ "./src/app/message-box/message-box.component.css")]
    })
], MessageBoxComponent);



/***/ }),

/***/ "./src/app/top-bar/nav-data.ts":
/*!*************************************!*\
  !*** ./src/app/top-bar/nav-data.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const NavData = [
    {
        content: '聊天',
        url: ''
    },
    {
        content: '个人资料',
        url: ''
    },
    {
        content: '设置',
        url: ''
    }
];
/* harmony default export */ __webpack_exports__["default"] = (NavData);


/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _nav_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-data */ "./src/app/top-bar/nav-data.ts");



let TopBarComponent = class TopBarComponent {
    constructor() {
        this.navItems = _nav_data__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        console.log(this.navItems);
    }
};
TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-top-bar',
        template: __webpack_require__(/*! raw-loader!./top-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
    })
], TopBarComponent);



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.user-list {\r\n  width:200px;\r\n  height: 100%;\r\n  float: left;\r\n  border-right: 1px solid rgb(233, 231, 231);\r\n  box-sizing: border-box;\r\n}\r\n.user-list ul{\r\n  height: 500px;\r\n  overflow-y: auto;\r\n  box-sizing: border-box;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n}\r\n.user-list ul li{\r\n  width: 100%;\r\n  height: 50px;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n  overflow: hidden;\r\n}\r\n.avatar{\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 32px;\r\n  border:1px dashed #ccc;\r\n  margin-top: 9px;\r\n  margin-left: 9px;\r\n}\r\n.name{\r\n  font-size: 14px;\r\n  padding-left: 10px;\r\n  margin-top: 5px;\r\n}\r\n.last-message{\r\n  font-size: 12px;\r\n  padding-left: 10px;\r\n  color: #a9a4a4;\r\n  margin-top: 3px;\r\n}\r\n.seach-box{\r\n  width: 100%;\r\n  height: 50px;\r\n  border-bottom: 1px solid rgb(233, 231, 231);\r\n  box-sizing: border-box;\r\n  padding: 10px 0 0 10px;\r\n}\r\n.seach-box input{\r\n  border: none;\r\n  background:transparent; \r\n  border-bottom: 1px solid salmon \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLDBDQUEwQztFQUMxQyxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnVzZXItbGlzdCB7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzMsIDIzMSwgMjMxKTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi51c2VyLWxpc3QgdWx7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMzMsIDIzMSwgMjMxKTtcclxufVxyXG4udXNlci1saXN0IHVsIGxpe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMywgMjMxLCAyMzEpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hdmF0YXJ7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyOjFweCBkYXNoZWQgI2NjYztcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxufVxyXG4ubmFtZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4ubGFzdC1tZXNzYWdle1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICNhOWE0YTQ7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uc2VhY2gtYm94e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzMywgMjMxLCAyMzEpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweCAwIDAgMTBweDtcclxufVxyXG5cclxuLnNlYWNoLWJveCBpbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNhbG1vbiBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserListComponent = class UserListComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
    })
], UserListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\demo\player\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map