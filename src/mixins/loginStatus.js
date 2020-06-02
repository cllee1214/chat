import Store from '../utils/store'

const loginStatusMixin = {
    beforeRouteEnter(to, from, next) {
        console.log(to)
        if(Store.get('chat')){
          next(false)
        }else{
          next()
        }
    }
}

export default loginStatusMixin