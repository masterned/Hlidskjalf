import Compositor from './Compositor.js'

export default class Level {
  constructor() {
    this.comp = new Compositor()
    this.entities = new Set()
  }

  addLayer(layer) {
    this.comp.push(layer)
    return this
  }

  draw(ctx) {
    this.comp.draw(ctx)
  }
}
