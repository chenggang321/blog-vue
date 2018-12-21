export default {
  set(key,value){
    window.localStorage[key] = value
  },
  get(key,defaultValue){
    return window.localStorage[key] || defaultValue
  },
  // 存储对象
  setObject(key,value){
    window.localStorage[key] = JSON.stringify(value)
  },
  getObject(key){
    return JSON.parse(window.localStorage[key]||'{}')
  },
  remove(key){
    window.localStorage.removeItem(key)
  },
  removeAll(){
    window.localStorage.clear()
  }
}
