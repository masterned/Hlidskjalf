const { app, BrowserWindow } = require('electron')
const { join } = require('path')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {}
  })

  mainWindow.loadFile(join(__dirname, '..', 'public', 'views', 'primary.html'))
}

app.allowRendererProcessReuse = true

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
