import Tile from './Tile.js'

export default class Animation {
  constructor(image, frames) {
    this.frames = frames.map(frame => Tile(image, frame.x, frame.y, frame.width, frame.height))
    this.curIndex = 0
  }

  get curFrame() {
    return this.frames[this.curIndex]
  }

  set curFrame(num) {
    this.curIndex = num
  }

  incCurFrame(inc = 1) {
    this.curIndex += inc
    this.curIndex %= this.frames.length
  }
}
