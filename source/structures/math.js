export class Vec2 {
  constructor(x, y) {
    this.set(x, y)
  }

  set(x, y) {
    this.x = x
    this.y = y
  }

  inc(x, y) {
    this.x += x
    this.y += y
  }
}
