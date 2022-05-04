const { contextBridge, ipcRenderer } = require("electron")

const electronApi = {
  onPause: (callback) => ipcRenderer.on("timer", (_, msg) => callback(msg)),
  persistData: (payload) => ipcRenderer.send("persist-data", payload),
}

contextBridge.exposeInMainWorld("electronApi", electronApi)
