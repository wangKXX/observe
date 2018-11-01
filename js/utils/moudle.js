import deper from './deper'
/**
 * 订阅者模型
 */
let Moudle = function(key, expOrFn, cd) {
  // this.obj = options.data
  this.key = key
  this.cd = cd
  this.depids = {};
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn
  }
  this.value = this.get()
}
Moudle.prototype = {
  update(newVal) {
    this.run(newVal)
  },
  run(newVal) {
    let oldVal = this.value
    console.log(oldVal, 'oldval')
    if (newVal !== oldVal) {
      console.log('done')
      this.value = newVal
      this.cd(newVal)
    }
  },
  addSub(dep) {
    if (!this.depids.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depids[dep.id] = dep
    }
    
  },
  get() {
    deper.target = this
    let val = this.getter()
    deper.target = null
    return val
  }
}

export default Moudle