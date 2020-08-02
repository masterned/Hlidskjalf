import SpriteSheet, { def_anim } from '../structures/SpriteSheet.js'
import TileSet from '../structures/TileSet.js'

export const loadJSONFrom = directory => name =>
  fetch(`../../public/data/${directory}/${name}.json`)
    .then(res => res.json())

export const loadLevel = name =>
  fetch(`../../public/data/levels/${name}.json`)
    .then(res => res.json())

export const loadImage = name =>
  new Promise(resolve => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = `../../assets/images/${name}`
  })

export const loadAtlas = name =>
  fetch(`../../public/data/atlases/${name}.json`)
    .then(res => res.json())

export const loadTileSet = (name, ext) =>
  Promise.all([
    loadImage(name, ext),
    loadAtlas(name)
  ]).then(([image, atlas]) => {
    const tileSet = new TileSet(image, atlas.tileWidth, atlas.tileHeight)
    atlas.tiles.forEach(tile => { tileSet.defineTile(tile) })
    return tileSet
  })

export const loadSpriteSheet = name =>
  loadAtlas(name)
    .then(atlas => Promise.all([
      atlas,
      loadImage(sheetSpec.imageURL)
    ]))
    .then(([{ tiles, animations }, image]) => {
      const sheet = new SpriteSheet(image)

      if (tiles) tiles.forEach(tileSpec => {
        const [x, y] = tileSpec.index
        return def_tile(tileSpec.name, x, y)(sheet)
      })

      if (animations) animations.forEach(def_anim(sheet))

      return sheet
    })
