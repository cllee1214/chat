
const avatarFilter = {
  filters: {
    renderImgPath (avatarPath) {
      if(!avatarPath)return
      var rs = /\\avatar\\\d+\.\w+/.exec(avatarPath)
      if(!rs)return avatarPath
      return rs[0].replace(/\\/g,'/')
    }
  }
}

export default avatarFilter