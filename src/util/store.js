
const store = {
  set: function(key, value){
    localStorage.setItem(key, JSON.stringify(value))
    return value
  },

  get: function(key){
    var data = localStorage.getItem(key)
    return JSON.parse(data)
  },

  remove: function(key){
    localStorage.removeItem(key)
  },

  removeAll: localStorage.clear
}

export default store