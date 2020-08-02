import Animation from './Animation.js'
// import { mkImageBuffer, setSize, get2DContext } from '../functions/canvas.js'
import { curry } from '../utilities/functions.js'

export default class SpriteSheet {
  constructor(image) {
    this.image = image
    this.sprites = new Map()
    this.animations = new Map()
  }

  defineSprite(name, x, y, width, height) {
    // const buffer = setSize(width, height, mkImageBuffer())
    const context = get2DContext(buffer)

    context.drawImage(this.image, x, y, width, height, 0, 0, width, height)

    this.sprites.set(name, buffer)
  }

  defineAnimation(name, animation) {
    this.animations.set(name, animation)
  }

  draw() {

  }
}

export const defineSprite = (sheet, { name, x, y, width, height }) => {
  // sheet.sprites.set(name, mkImageBuffer(sheet.image, x, y, width, height))
}

export const def_anim = sheet => ({ name, frames }) => {
  if (!sheet.animations) sheet.animations = new Map()

  sheet.animations.set(name, new Animation(sheet.image, frames))

  return sheet
}

export const draw = curry((context, sheet, name, x, y, width, height) => {

})

export const drawOn = context => (sheet, name, x, y, width, height) => {
  if (sheet.panels && sheet.panels.has(name)) {
    context.drawImage(sheet.panels.get(name), x, y, width, height)

    return true
  } else if (sheet.animations && sheet.animations.has(name)) {
    const curFrame = sheet.animations.get(name).curFrame
    if (width && height) context.drawImage(curFrame, x, y, width, height)
    else context.drawImage(curFrame, x, y)

    return true
  }

  return false
}
