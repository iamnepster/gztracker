const { contextBridge, ipcRenderer } = require("electron")

const electronApi = {
  onPause: (callback) => ipcRenderer.on("timer", (_, msg) => callback(msg)),
}

contextBridge.exposeInMainWorld("electronApi", electronApi)
