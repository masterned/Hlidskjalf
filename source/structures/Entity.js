import { Vec2 } from './math.js'

export default class Entity {
  constructor() {
    this.pos = new Vec2(0, 0)
    this.vel = new Vec2(0, 0)
    this.acc = new Vec2(0, 0)
    this.spd = new Vec2(0, 0)
  }
}
