import Animation from "./Animation.js"
import Tile from "./Tile.js"

export default class SpriteSheet {
  constructor(image) {
    this.image = image
  }
}

export const defineTile = (sheet, name, x, y, width, height) => {
  if (!sheet.tiles) sheet.tiles = new Map()

  const buffer = bufferImage(sheet.image, x, y, width, height)
  sheet.tiles.set(name, buffer)

  return sheet
}

export const def_panel = sheet => ({ name, x, y, width, height }) => {
  if (!sheet.panels) sheet.panels = new Map()

  sheet.panels.set(name, Tile(sheet.image, x, y, width, height))

  return sheet
}

export const def_anim = sheet => ({ name, frames }) => {
  if (!sheet.animations) sheet.animations = new Map()

  sheet.animations.set(name, new Animation(sheet.image, frames))

  return sheet
}

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

export const draw = (context, sheet, sprite, x, y) => {
  if (!sheet.sprites.has(sprite)) {
    throw new Error('sprite not in sheet')
  }
  const buffer = sheet.sprites.get(sprite)
  context.drawImage(buffer, x, y)
}
