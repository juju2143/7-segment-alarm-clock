const {app, BrowserWindow, Menu, Tray} = require('electron');

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 536,
    height: 116,
    title: "7 Segment Alarm Clock",
    icon: "img/icon.png",
    frame: false,
    transparent: true,
    backgroundColor: "#1e1e24",
    skipTaskbar: true,
    alwaysOnTop: true
  });
  let optwin = null;
  win.loadURL(`file://${__dirname}/index.html`);
  
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Hide', type: 'checkbox', click: (item) => {
      if(win.isVisible())
      {
        win.hide();
      }
      else
      {
        win.show();
      }
    }},
    {label: 'Options', click: () => {
      if(optwin === null || optwin.isDestroyed())
      {
        optwin = new BrowserWindow({
          width: 800,
          height: 600,
          title: "Options",
          icon: "img/icon.png",
          backgroundColor: "#1e1e24"
        });
        optwin.loadURL(`file://${__dirname}/options.html`);
      }
      else
        optwin.focus();
    }},
    {label: 'Always On Top', type: 'checkbox', checked: win.isAlwaysOnTop(), click: (item) => {
      win.setAlwaysOnTop(item.checked)
    }},
    {label: 'Quit', role: 'quit'}
  ]);

  tray = new Tray('img/icon16.png');
  tray.setToolTip('7 Segment Alarm Clock');
  tray.setContextMenu(contextMenu);
});