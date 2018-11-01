import Watcher from './watcher'

export default function observ(obj) {
  if (obj && typeof obj === 'object'){
    return new Watcher(obj)
  }
}