import { drawImage } from '../../source/functions/canvas.js'

const canvasStub = {
  images: [],
  getContext: () => ({
    drawImage: (image, sx, sy, sw, sh, dx, dy, dw, dh) => {
      const img = { image, sx, sy, sw, sh, dx, dy, dw, dh }
      canvasStub.images.push(img)
      return img
    }
  })
}

const imageStub = {
  src: 'darkness/darkness.svg',
  width: 64,
  height: 64
}

describe('drawImage', () => {
  it('returns undefined if not enough values are passed in', () => {
    expect(drawImage(imageStub)(canvasStub))
      .toBe(undefined)
  })

  it('sets destination data to source data and source data to image data if destination data is not present', () => {
    const canvasClone = { ...canvasStub }
    canvasClone.getContext().drawImage(imageStub, 0, 0, imageStub.width, imageStub.height, 32, 32, imageStub.width, imageStub.height)

    expect(drawImage(imageStub, 32, 32)(canvasStub))
      .toStrictEqual(canvasClone)
  })
})