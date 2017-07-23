const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

export function isVNode (node) {
  return typeof node === 'object' && hasOwn(node, 'componentOptions')
}
