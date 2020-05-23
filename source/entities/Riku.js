import Entity from '../structures/Entity.js'
import { drawOn } from '../structures/SpriteSheet.js'

export const Riku = sheet => {
  const riku = new Entity()
  riku.pos.set(600, 16)
  riku.acc.set(-0.3, 0.3)
  riku.spd.set(-6, 3)

  riku.update = function () {
    this.pos.inc(this.vel.x, this.vel.y)
    this.vel.inc(this.acc.x, this.acc.y)
    if (this.vel.x < this.spd.x) this.vel.x = this.spd.x
    if (this.vel.y > this.spd.y) this.vel.y = this.spd.y
    console.log(this.pos)
  }

  riku.draw = function (ctx) {
    drawOn(ctx)(sheet, 'walk-down', this.pos.x, this.pos.y)
  }

  return riku
}
