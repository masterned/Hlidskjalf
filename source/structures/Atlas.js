export default class Atlas {
  constructor(json) {
    if (json.animations) this.animations = json.animations
    if (json.panels) this.panels = json.panels
    if (json.tiles) this.tiles = json.tiles
  }
}