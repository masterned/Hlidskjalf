const PRESSED = 1
const RELEASED = 0

export default class KeyboardState {
  constructor() {
    this.keyStates = new Map()
    this.keyMap = new Map()
  }

  addMapping(keycode, callback) {
    this.keyMap.set(keycode, callback)
  }

  handleEvent(event) {
    const { keyCode } = event

    if (!this.keyMap.has(keyCode)) {
      return
    }

    event.preventDefault()

    const keyState = event.type === 'keydown' ? PRESSED : RELEASED

    if (this.keyStates.get(keyCode) === keyState) {
      return
    }

    this.keyStates.set(keyCode, keyState)

    this.keyMap.get(keyCode)(keyState)

    return
  }

  listenTo(window) {
    ['keydown', 'keyup'].forEach(eventName => {
      window.addEventListener(eventName, event => {
        this.handleEvent(event)
      })
    })
  }
}
