const {app, BrowserWindow} = require("electron")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 100,
        heiht: 30,
        maxHeight: 30,
        maxWidth: 100,
        titleBarStyle: 'hidden',
        icon: __dirname + '/buildResources/icon.png',
    })
    win.loadFile('index.html')
    win.resizable = true
    win.setIcon(__dirname +'/buildResources/icon.png')
    win.setAlwaysOnTop(true, 'screen')
    //initial setAlwaysOnTop works only until windows taskbar is focused
    //so in order to keep app on taskbar AlwaysOnTop neeeds to be constantly set
    setInterval(function(){
        try{
            win.setAlwaysOnTop(true, 'screen');
        }
        catch{
            console.log('error during setting alwaysontop')
        }
    },60);
}

app.whenReady().then(()=>{
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})