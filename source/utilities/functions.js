export const head = array => array[0]

export const tail = array => array.slice(1)

export const last = array => array[array.length - 1]

export const init = array => array.slice(0, -1)

export const length = array => array.length

export const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : curry(fn.bind(null, ...args))

export const factorial = num => {
  const go = (iterator, accumulator) =>
    iterator <= 1
      ? accumulator
      : go(iterator - 1, iterator * accumulator)
  return go(num, 1)
}

export const ifElse = curry((condition, then, otherwise, value) => condition(value) ? then(value) : otherwise(value))

export const apply = curry((f, args) => f.apply(null, args))

export const applyTo = curry((value, fn) => fn(value))

export const gte = curry((other, maybeGreater) => maybeGreater >= other)

export const prop = curry((key, object) => object[key])

export const push = curry((value, array) => [...array, value])

export const repeat = curry((times, fn) => {
  for (let i = 0; i < times; ++i) fn(i)

  return
})

export const map = curry((fn, functor) => functor.map(fn))

export const reduce = (f, i) => a => i == null ? a.reduce(f) : a.reduce(f, i)

export const reduceRight = (f, i) => a => i == null ? a.reduceRight(f) : a.reduceRight(f, i)

export const pipe = (...[head, ...tail]) => (...args) =>
  tail.reduce((arg, fn) => fn(arg), head(...args))

export const compose = (...fns) => (...args) =>
  pipe(...fns.reverse())(...args)

export const lift2 = curry((f, g, h, x) => f(g(x), h(x)))

export const toString = x => x.toString()

export const join = x => x.join()

export const chain = curry((fn, x) => x.chain(fn))

export const ap = curry((wrappedFn, x) => x.ap(wrappedFn))

export const find = curry((fn, array) => array.find(fn))

export const not = value => !value

export const when = curry((predicate, fn, value) => predicate(value) ? fn(value) : value)

export const unless = curry((predicate, fn, value) => predicate(value) ? value : fn(value))

export const isNil = value => value === null || value === undefined

export const cond = curry((cases, value) => {
  const found = find(c => c[0](value), cases)
  if (isNil(found)) return undefined
  return found[1](value)
})
