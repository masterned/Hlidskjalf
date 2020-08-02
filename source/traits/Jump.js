import { Trait } from '../structures/Entity.js'

export default class Jump extends Trait {
  constructor() {
    super('jump')

    this.dur = 0.5
    this.vel = 2
    this.engage = 0
  }

  start() {
    this.engage = this.dur
  }

  cancel() {
    this.engage = 0
  }

  update(entity, dt) {
    if (this.engage > 0) {
      entity.vel.y = -this.vel
      this.engage -= dt
    } else {
      entity.vel.y = 1
    }
  }

}