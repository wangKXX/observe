/**
 * 订阅者处理类
 * @param {*} obj 
 */
let uid= 0
let deper = function(obj) {
  this.params = obj
  this.subs = []
  this.id = uid++
}
deper.prototype = {
  addSub(sub) {
    this.subs.push(sub)
  },
  addMoudle() {
    deper.target.addSub(this)
  },
  removeSub(sub) {
    let index = this.subs.indexOf(sub)
    if (~index) {
      this.subs.slice(index, 1)
    } 
  },
  notify(newVal) {
    console.log(this.subs, 'subs')
    this.subs.forEach((sub) => {
      sub.update(newVal)
    })
  }
}
deper.target = null

export default deper