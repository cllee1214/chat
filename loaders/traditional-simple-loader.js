const map = {
  name: {
    s: '名字',
    t: '繁体的名字'
  }
}
module.exports = function(content) {
  // console.log('loader:',content)
  var result = content.replace(/\<%\s*(\w+)\s*%\>/, function(match, p1){
    return map[p1].t
  })
  return result
}