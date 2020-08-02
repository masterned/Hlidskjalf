export default class Maybe {
  constructor(val) {
    this.__val = val
  }

  static of(val) {
    return new Maybe(val)
  }

  isNothing() {
    return (this.__val === null || this.__val === undefined)
  }

  map(f) {
    return this.isNothing()
      ? Maybe.of(null)
      : Maybe.of(f(this.__val))
  }

  join() {
    return this.__val
  }

  chain(f) {
    return this.map(f).join()
  }

  orElse(otherwise) {
    return this.isNothing()
      ? Maybe.of(otherwise)
      : this
  }

  ap(anotherMaybe) {
    return anotherMaybe.map(this.__val)
  }
}

export const liftA2 = (fn, m1, m2) =>
  m1.map(fn).ap(m2)

export const chain = (fn, m) => m.chain(fn)

export const ap = (mf, m) => mf.ap(m)

export const orElse = (val, m) => m.orElse(val)
