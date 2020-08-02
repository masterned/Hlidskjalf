import { createImageBuffer } from '../functions/canvas.js'

export default class Animation {
  constructor(image, { frames }) {
    this.frames = frames.map(createImageBuffer(image))
  }
}

export const createAnimation = image => animationSpec =>
  new Animation(image, animationSpec)
