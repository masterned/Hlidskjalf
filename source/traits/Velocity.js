import { Trait } from '../structures/Entity.js'

export default class Velocity extends Trait {
  constructor() {
    super('velocity')
  }

  update(entity, dt) {
    entity.pos.x += entity.vel.x
    entity.pos.y += entity.vel.y
  }
}
