import Heap from '../../source/structures/Heap.js'

const heap = new Heap()
const maxHeap = new Heap((a, b) => a > b)
const aHeap = new Heap((a, b) => a.a < b.a)

describe('insert', () => {
  it('inserts a value into the correct location in the heap', () => {
    heap.insertList([5, 7, 20, 16, 9, 7, 15, 3, 1])
    expect(heap.heap)
      .toStrictEqual([1, 3, 7, 5, 9, 20, 15, 16, 7])
  })

  it('takes a comparator and heaps values accordingly', () => {
    maxHeap.insertList([3, 6, 5, 1])
    expect(maxHeap.heap)
      .toStrictEqual([6, 3, 5, 1])

    aHeap.insertList([{ a: 3 }, { a: 6 }, { a: 5 }, { a: 1 }])
    expect(aHeap.heap)
      .toStrictEqual([{ a: 1 }, { a: 3 }, { a: 5 }, { a: 6 }])
  })
})

describe('remove', () => {
  it('returns the top value in the heap and trickles the final value into place', () => {
    expect(heap.remove())
      .toBe(1)
    expect(heap.heap)
      .toStrictEqual([3, 5, 7, 7, 9, 20, 15, 16])

    expect(heap.remove())
      .toBe(3)
    expect(heap.heap)
      .toStrictEqual([5, 7, 7, 16, 9, 20, 15])
  })
})
