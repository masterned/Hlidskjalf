const parent = index => Math.trunc((index - 1) / 2)
const left = index => index * 2 + 1
const right = index => index * 2 + 2

export default class Heap {
  constructor(comparator = (a, b) => a < b) {
    this.comparator = comparator
    this.heap = []
  }

  get min() {
    return this.heap[0]
  }

  insert(node) {
    let cur = this.heap.push(node) - 1

    if (this.heap.length > 1) {
      let parentIndex = parent(cur)

      for (; cur > 0; cur = parentIndex) {
        parentIndex = parent(cur)

        if (this.comparator(this.heap[cur], this.heap[parentIndex])) {
          const temp = this.heap[cur]
          this.heap[cur] = this.heap[parentIndex]
          this.heap[parentIndex] = temp
        }
      }
    }
  }

  insertList(list) {
    list.forEach(value => this.insert(value))
  }

  remove() {
    if (this.heap.length === 0) return null

    const value = this.min

    if (this.heap.length === 1) {
      this.heap = []
    } else {
      this.heap[0] = this.heap.pop()

      let cur = 0
      let leftIndex = left(cur)
      let rightIndex = right(cur)

      let leftCanTrickle = this.comparator(this.heap[leftIndex], this.heap[cur])
      let rightCanTrickle = this.comparator(this.heap[rightIndex], this.heap[cur])
      let leftShouldTrickle = this.comparator(this.heap[leftIndex], this.heap[rightIndex])

      while (leftCanTrickle || rightCanTrickle) {
        const temp = this.heap[cur]

        if (leftCanTrickle && rightCanTrickle) {
          if (leftShouldTrickle) {
            this.heap[cur] = this.heap[leftIndex]
            this.heap[leftIndex] = temp
            cur = leftIndex
          } else {
            this.heap[cur] = this.heap[rightIndex]
            this.heap[rightIndex] = temp
            cur = rightIndex
          }
        } else if (leftCanTrickle) {
          this.heap[cur] = this.heap[leftIndex]
          this.heap[leftIndex] = temp
          cur = leftIndex
        } else {
          this.heap[cur] = this.heap[rightIndex]
          this.heap[rightIndex] = temp
          cur = right
        }

        leftIndex = left(cur)
        rightIndex = right(cur)

        leftCanTrickle = this.comparator(this.heap[leftIndex], this.heap[cur])
        rightCanTrickle = this.comparator(this.heap[rightIndex], this.heap[cur])
        leftShouldTrickle = this.comparator(this.heap[leftIndex], this.heap[rightIndex])
      }
    }

    return value
  }
}
