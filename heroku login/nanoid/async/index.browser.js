let random = bytes =>
  Promise.resolve(crypto.getRandomValues(new Uint8Array(bytes)))
let customAlphabet = (alphabet, size) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = crypto.getRandomValues(new Uint8Array(step))
      let i = step
      while (i--) {
        id += alphabet[bytes[i] & mask] || ''
        if (id.length === size) return Promise.resolve(id)
      }
    }
  }
}
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return Promise.resolve(id)
}
export { nanoid, customAlphabet, random }
