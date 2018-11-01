import deper from './deper'
import observ from './observ'
/**
 * 监听者模型
 * @param {*} options 
 */
let Watcher = function(options) {
  this.data = options
  console.log(options)
  // this.key = options.key
  // this.cd = options.cd
  this.init(this.data)
}

Watcher.prototype = {
  init(data) {
    Object.keys(data).forEach((key) => {
      this.dealData(key, data[key])
    })
  },

  dealData(key, val) {
    this.watch(this.data, key, val)
  },

  watch(data, key, val) {
    let _this = this
    let dep = new deper()
    // 子对象处理
    let childObj = observ(val)
    Object.defineProperty(data, key, {
      set(newVal) {
        console.log(newVal, 'setData')
        if (typeof _this.cd === 'function') {
          _this.cd(newVal)
        }
        if (typeof newVal === 'object') {
          childObj = observ(newVal)
        }
        dep.notify(newVal) // 通知所有订阅者
      },
      get() {
        if (deper.target) {
          dep.addMoudle()
        }
        return val
      }
    })
  }
}

export default Watcher