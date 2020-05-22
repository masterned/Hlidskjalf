import SpriteSheet, { def_anim, def_panel } from '../structures/SpriteSheet.js'
import Atlas from '../structures/Atlas.js'

export const loadLevel = name =>
  fetch(`../../public/data/levels/${name}.json`)
    .then(res => res.json())

export const loadImage = (name, ext) =>
  new Promise(resolve => {
    const image = new Image()
    image.addEventListener('load', () => {
      resolve(image)
    })
    image.src = `../../assets/images/${name}.${ext}`
  })

export const loadAtlas = name =>
  fetch(`../../public/data/atlases/${name}.json`)
    .then(res => res.json())
    .then(json => new Atlas(json))

export const loadSpriteSheet = (name, ext) =>
  Promise.all([
    loadImage(name, ext),
    loadAtlas(name)
  ]).then(([image, atlas]) => {
    const sheet = new SpriteSheet(image)

    if (atlas.panels) atlas.panels.forEach(def_panel(sheet))

    if (atlas.animations) atlas.animations.forEach(def_anim(sheet))

    return sheet
  })
