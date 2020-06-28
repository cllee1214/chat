
let storeData = {
  state: {
    isShowGoBackBtn: false, // 是否显示返回按钮
    title: '消息', // 头部title
    lastTitle: '', // 上一次的title
  },
  mutations: {
    changeHeadTitle (state, playload) {
      let { title, isShowGoBackBtn } = playload
      state.title = title
      state.lastTitle = title
      state.isShowGoBackBtn = isShowGoBackBtn
    },
    hideBackBtn (state) {
      state.isShowGoBackBtn = false
      state.title = state.lastTitle
    }
  }
}

export default storeData