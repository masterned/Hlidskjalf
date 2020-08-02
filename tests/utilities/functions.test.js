import { reduce, pipe, compose, curry, cond, factorial } from "../../source/utilities/functions"

describe('reduce', () => {
  it('reduces left from first value', () => {
    expect(reduce((a, b) => a + b)([1, 2, 3, 4, 5]))
      .toBe(15)
  })

  it('can take an initial start value', () => {
    expect(reduce((a, b) => a + b, 3)([1, 2, 4, 5]))
      .toBe(15)
  })

  it('handles arrays as initial values properly', () => {
    expect(reduce((acc, val) => [...acc, val * 2], [])([1, 2, 3, 4, 5]))
      .toStrictEqual([2, 4, 6, 8, 10])
  })
})

describe('pipe', () => {
  it('calls a list of functions on an argument', () => {
    expect(pipe(
      n => n * 6,
      n => n.toString(),
      s => s.split(''),
      a => a.reverse(),
      a => a.join('')
    )(5)
    ).toBe('03')
  })

  it('allows the first value argument to be any arity', () => {
    expect(pipe((a, b) => a * b, a => a - 1)(3, 5)).toBe(14)
  })
})

describe('compose', () => {
  it('calls a list of functions in reverse order on an argument', () => {
    expect(compose(
      a => a.join(''),
      a => a.reverse(),
      a => a.split(''),
      a => a.toString(),
      a => a - 1,
      a => a * 2
    )(7)).toBe('31')
  })
})

describe('curry', () => {
  it('curries a function allowing for complete partial application', () => {
    const add4Num = curry((a, b, c, d) => a + b + c + d)

    expect(add4Num(1)(2)(3)(4)).toBe(10)

    expect(add4Num(1, 2, 3, 4)).toBe(10)

    expect(add4Num(1, 2)(3, 4)).toBe(10)
  })
})

describe('cond', () => {
  it('takes a 2d array (kv: predicates & actions) and a value', () => {

  })

  const justHappy = cond([[val => val === 'happy', () => 'happy happy']])

  it('checks the value against the predicate, and it returns the result of the function called on the value if true', () => {
    expect(justHappy('happy')).toBe('happy happy')
  })

  it('returns undefined if none of the predicates match', () => {
    expect(justHappy('sad')).toBe(undefined)
  })

  const ageDescribe = cond([
    [age => age <= 3, () => 'just a tot'],
    [age => age <= 12, () => 'should be in elementary'],
    [age => age <= 16, () => 'highschool time'],
    [() => true, () => 'more schooling is still a thing']
  ])

  it('takes an array of predicate fn pairs', () => {
    expect(ageDescribe(13)).toBe('highschool time')
  })
})

describe('factorial', () => {
  it('returns 1 for numbers less than or equal to 1', () => {
    expect(factorial(1)).toBe(1)
    expect(factorial(0)).toBe(1)
    expect(factorial(-1)).toBe(1)
  })

  it('returns the factorial of the number', () => {
    expect(factorial(5)).toBe(120)
  })
})
