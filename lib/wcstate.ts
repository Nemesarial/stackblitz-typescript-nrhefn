export const state = {
  beers: [
    { name: 'castle light' },
    { name: 'castle draught' },
    { name: 'amstel' },
  ]
}



export function liveData(data, cb) {
  const x = new Proxy(data, {
    set(target, prop, value, receiver): any {
      let ov = target[prop]
      target[prop] = value
      cb(prop, ov, value)
    }
  })
}