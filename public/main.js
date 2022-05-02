const { app, globalShortcut, BrowserWindow, ipcMain } = require("electron")
const path = require("path")

function createWindow() {
  const win = new BrowserWindow({
    title: "GzTracker",
    width: 950,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
    },
  })

  win.loadURL("http://localhost:3000")
  win.show()
  win.webContents.openDevTools({ mode: "detach" })

  globalShortcut.register("Super+L", () => {
    win.webContents.send("timer", "pause")
  })
}

app.whenReady().then(() => createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.on("will-quit", () => {
  globalShortcut.unregisterAll()
})
