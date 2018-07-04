const {app, BrowserWindow} = require('electron')
const http = require('http')
  
function createWindow () {   
  // 创建浏览器窗口
  win = new BrowserWindow({width: 800, height: 600})

 // 打开开发者工具
 win.webContents.openDevTools()


  // 然后加载应用的 index.html。
  win.loadFile('./dist/index.html')
}

  
app.on('ready', createWindow)


