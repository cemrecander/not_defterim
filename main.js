const { app, BrowserWindow, ipcMain, Menu, Tray } = require('electron')

let win;
let tray = null;

//Ana pencereyi oluşturuyorum.
function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 650,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        show: false,
        autoHideMenuBar: true,
    });
    //win.webContents.openDevTools();

    win.loadFile(__dirname + "/notlarim/index.html");

    win.addListener("ready-to-show", () => {
        win.show();
    });

    win.on('minimize', function (event) {
        event.preventDefault();
        win.hide();

    });

    win.on('close', function (event) {
        if (!app.isQuiting) {
            event.preventDefault();
            win.hide();
        }
        return false;
    });

    ipcMain.on("SilerkenSayfaYenile", () => {
        win.reload();
    })

    ipcMain.on("EklerkenSayfaYenile", () => {
        win.reload();
    })
}

app.whenReady().then(() => {
    createWindow();

    //Görev çubuğu simgesi oluşturuyorum.
    tray = new Tray("resimler/simge.png")
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Kapat',
            type: 'normal',
            click: function () {
                app.exit();
            }
        },
        {
            label: 'Not Ekle',
            type: 'normal',
            click: function () {
                notEklePenceresiniOlustur();
            }
        }
    ])
    tray.setToolTip('Not defterim')
    tray.setContextMenu(contextMenu)

    tray.on('double-click', function (e) {
        win.show();
    });

    //Not ekle penceresini oluşturuyorum.
    function notEklePenceresiniOlustur() {
        notEklePenceresi = new BrowserWindow({
            width: 500,
            height: 500,
            modal: true,
            show: false,
            parent: win,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
            },
            autoHideMenuBar: true,
        });
        //notEklePenceresi.webContents.openDevTools();

        // İkinci pencere index.html dosyasını gösteriyor.
        notEklePenceresi.loadFile(__dirname + "/not_ekle/index.html");

        notEklePenceresi.once("ready-to-show", () => {
            notEklePenceresi.show();
        });
    }
    ipcMain.on("notEklePenceresiniAc", () => {
        notEklePenceresiniOlustur();
    });
});