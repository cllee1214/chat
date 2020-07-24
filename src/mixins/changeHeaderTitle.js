
const changeHeaderTitle = function (title) {
  this.$store.commit('changeHeadTitle', {
    title
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