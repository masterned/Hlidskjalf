import { Trait } from '../structures/Entity.js'

export default class Movement extends Trait {
  constructor() {
    super('movement')
  }

  update(entity, dt) {
    entity.pos.x += entity.vel.x
    entity.pos.y += entity.vel.y
  }
}
