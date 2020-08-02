import { loadLevel, loadImage, loadAtlas, loadJSONFrom } from '../loaders/loaders.js'
import { drawImageBuffer } from '../functions/canvas.js'
import { createAnimation } from '../structures/Animation.js'

const { log } = console

const canvas = document.createElement('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)

const context = canvas.getContext('2d')

context.fillStyle = '#555555'
context.fillRect(0, 0, canvas.width, canvas.height)

const loadAnimations = ({ image, costumes }) => animationsSpec =>
  animationsSpec.forEach(animationSpec => costumes.set(animationSpec.name, createAnimation(image)(animationSpec)))

class Actor {
  constructor(image, { costumes: costumeSpec }) {
    if (image) {
      this.image = image
      this.costumes = new Map()
      loadAnimations(this, costumeSpec)
    }
  }
}

const loadActor = name =>
  loadJSONFrom('actors')(name)
    .then(description => {
      const { imageURL } = description
      if (imageURL) loadImage(imageURL).then(image => log(new Actor(image, description))).catch(e => log('image load error:', e))
    })

loadLevel('demo')
  .then(({ actors }) => {
    Promise.all(actors.map(({ name }) => loadActor(name)))
      .catch(e => log('actor description load error:', e))
  })
