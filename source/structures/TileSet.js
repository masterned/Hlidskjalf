// import { mkImageBuffer } from '../functions/canvas.js'
import { curry } from '../utilities/functions.js'

export default class TileSet {
  constructor(baseImage, tileWidth, tileHeight) {
    this.baseImage = baseImage
    this.tileWidth = tileWidth
    this.tileHeight = tileHeight
    this.tiles = new Map()
  }

  defineTile({ name, index, options }) {
    const [x, y] = index

    // const tile = mkImageBuffer(this.baseImage, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight, options)

    this.tiles.set(name, tile)

    if (options && options.mirror) {
      // this.tiles.set(`${name}-mirrored`, mkImageBuffer(this.baseImage, x * this.tileWidth, y * this.tileHeight, this.tileWidth, this.tileHeight, { flip: true }))
    }

    return tile
  }

  static of(baseImage, tileWidth, tileHeight) {
    return new TileSet(baseImage, tileWidth, tileHeight)
  }
}

// createTileSet :: Image -> Number -> Number -> TileSet
export const createTileSet = curry((baseImage, tileWidth, tileHeight) =>
  TileSet.of(baseImage, tileWidth, tileHeight))

// defineTile :: TileSet -> {String, Number, Number} -> TileSet
export const defineTileOn = curry((tileSet, tileSpec) => tileSet.defineTile(tileSpec))
