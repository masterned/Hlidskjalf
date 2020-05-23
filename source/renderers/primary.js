import { loadSpriteSheet } from '../utilities/loaders.js'
import { drawOn } from '../structures/SpriteSheet.js'
import Timer from '../structures/Timer.js'
import { Riku } from '../entities/Riku.js'

const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

const context = canvas.getContext('2d')

context.fillStyle = '#555555'
context.fillRect(0, 0, canvas.width, canvas.height)

const createSpriteLayer = entity => {
  return ctx => {
    entity.draw(ctx)
  }
}

Promise.all([
  loadSpriteSheet('TabletopKnightsCover', 'jpg'),
  loadSpriteSheet('riku', 'png')
]).then(([coverSheet, rikuSheet]) => {

  const riku = Riku(rikuSheet)

  const drawOnContext = drawOn(context)

  const t0 = new Timer()

  t0.update = secondsPerFrame => {
    drawOnContext(coverSheet, 'cover', 0, 0, canvas.width, canvas.height)
    riku.update(secondsPerFrame)
    riku.draw(context)
  }

  t0.start()
})
