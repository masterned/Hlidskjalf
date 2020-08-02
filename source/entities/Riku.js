import { drawOn } from '../structures/SpriteSheet.js'
import { loadSpriteSheet } from '../loaders/loaders.js'
import Entity from '../structures/Entity.js'
import Movement from '../traits/Movement.js'
import Jump from '../traits/Jump.js'

export const createRiku = () =>
  loadSpriteSheet('riku', 'png')
    .then(sheet => {
      const riku = new Entity()
      riku.addTrait(new Movement())
      riku.addTrait(new Jump())

      riku.draw = ctx => {
        drawOn(ctx)(sheet, 'walk-down', riku.pos.x, riku.pos.y)
      }

      return riku
    })
