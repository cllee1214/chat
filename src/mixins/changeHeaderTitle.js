
const changeHeaderTitle = function (title, isShowGoBackBtn = false) {
  this.$store.commit('changeHeadTitle', {
    title,
    isShowGoBackBtn
  })
}

const changeTitleMixin = {
  mixinInMethod: {
    methods: {
      changeHeaderTitle: changeHeaderTitle
    }
  },
  mixinInMounted: {
    mounted: function() {
      changeHeaderTitle.call(this, this.title, false)
    }
  }
}
export default changeTitleMixin