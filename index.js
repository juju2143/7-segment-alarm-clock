const {app, BrowserWindow, Menu, Tray} = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 536,
    height: 116,
    webPreferences: {
    },
    frame: false,
    transparent: true
  });
  win.loadURL(`file://${__dirname}/index.html`);
  
  tray = new Tray('img/icon16.png');
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Quit', role: 'quit'}
  ]);
  tray.setToolTip('7 Segment Alarm Clock');
  tray.setContextMenu(contextMenu);
});