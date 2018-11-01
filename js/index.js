import Watcher from './utils/watcher'
import Moudle from './utils/moudle'


let _dom = document.getElementById('dom')
_dom.addEventListener('input', function(e){
  obj.key = _dom.value
})

let obj = {
  key: 'value',
  data: 2
}
new Watcher(obj) // 监听者模型
new Moudle('key', function() { // 订阅者模型
  return obj.key
}, function(val) {
  console.log(val, 'moudle cd')
})