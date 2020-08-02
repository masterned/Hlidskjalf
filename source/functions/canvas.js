export const drawImageBuffer = canvas => imageBuffer => (...dimensions) => canvas.getContext('2d').drawImage(imageBuffer, ...dimensions)

export const createImageBuffer = image => ({ x, y, width, height }, { flip } = {}) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  if (flip) {
    ctx.scale(-1, 1)
    ctx.translate(-canvas.width, 0)
  }

  ctx.drawImage(image, x, y, width, height, 0, 0, width, height)

  return canvas
}
