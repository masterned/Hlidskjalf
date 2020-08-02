import { mk_canvas, setSize, get2DContext } from '../functions/canvas.js'

export const createSpriteLayer = entities => context =>
  entities.forEach(entity => entity.draw(context))

export const createBackgroundLayer = tileSet => {
  const buffer = setSize(40 * tileSet.tileWidth, 29 * tileSet.tileHeight)(mk_canvas())
  const context = get2DContext(buffer)

  for (let i = 0; i < 39; ++i) for (let j = 0; j < 28; ++j)
    context.drawImage(tileSet.tiles.get('sky'), i * tileSet.tileWidth, j * tileSet.tileHeight)

  for (let i = 0; i < 39; ++i)
    context.drawImage(tileSet.tiles.get('ground'), i * tileSet.tileWidth, 27 * tileSet.tileHeight)

  return ctx => ctx.drawImage(buffer, 0, 0)
}
