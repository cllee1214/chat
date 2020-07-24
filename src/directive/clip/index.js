
const clipConfig = {
  bind() {

  },
  inserted(el) {
    console.log('insert')
    console.log(el.innerHTML)
    el.addEventListener('click', function(){
      console.log(el.innerHTML)
      navigator.clipboard.writeText(el.innerHTML).then(function(){
        console.log('复制成功')
      }, function() {

      })
    })
  },
  update() {

  }
}

export default clipConfig