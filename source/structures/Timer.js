export default class Timer {
  constructor(secondsPerFrame = 1 / 60) {
    let accumulatedTime = 0
    let lastTime = 0

    this.updateProxy = time => {
      accumulatedTime += (time - lastTime) / 1000

      while (accumulatedTime > secondsPerFrame) {
        this.update(secondsPerFrame)
        accumulatedTime -= secondsPerFrame
      }

      lastTime = time

      this.enqueue()
    }

  }

  enqueue() {
    requestAnimationFrame(this.updateProxy)
  }

  start() {
    this.enqueue()
  }
}
