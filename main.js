const { app, BrowserWindow } = require('electron');
const Store = require('electron-store');

const config = new Store();



const schema = {
    foo: {
        type: 'number',
        maximum: 100,
        minimum: 1,
        default: 50
    },
    bar: {
        type: 'string',
        format: 'url'
    },
    cwd: app.getPath('userData') + "config",
    fileExtension: "json"
};



//config.set('unicorn', '🦄');
console.log(config.get('unicorn'));

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        x: 0,
        y: 0,
        fullscreen: true,
        //width: 800,
        //height: 1600,
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // 加载index.html文件
    win.loadFile('test.html')

    // 打开开发者工具
    //win.webContents.openDevTools()

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })
}

app.on('ready', createWindow)