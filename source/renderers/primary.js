import { loadSpriteSheet } from '../utilities/loaders.js'
import { drawOn } from '../structures/SpriteSheet.js'

const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

const context = canvas.getContext('2d')

context.fillStyle = '#555555'
context.fillRect(0, 0, canvas.width, canvas.height)

Promise.all([
  loadSpriteSheet('TabletopKnightsCover', 'jpg'),
  loadSpriteSheet('riku', 'png')
]).then(([coverSheet, rikuSheet]) => {
  const drawOnContext = drawOn(context)

  drawOnContext(coverSheet, 'cover', 0, 0, canvas.width, canvas.height)


  for (let i = 1; i < 5; ++i) {
    drawOnContext(rikuSheet, 'walk-down', i * 32, 32)
    rikuSheet.animations.get('walk-down').incCurFrame()
  }

})
