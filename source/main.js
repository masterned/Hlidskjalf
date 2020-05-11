// source copied from https://github.com/electron/electron-quick-start
// used to bootstrap the program

import { app, BrowserWindow } from 'electron'
import { join } from 'path'

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {
      preload: join(__dirname, 'preloaders', 'primary.js')
    }
  })

  mainWindow.loadFile(join(__dirname, '..', 'public', 'views', 'primary.html'))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
