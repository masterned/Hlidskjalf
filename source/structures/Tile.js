const Tile = (image, x, y, width, height) => {
  const buffer = document.createElement('canvas')
  buffer.width = width
  buffer.height = height

  const context = buffer.getContext('2d')

  context.drawImage(
    image,
    x,
    y,
    width,
    height,
    0,
    0,
    width,
    height
  )

  return buffer
}

export default Tile
