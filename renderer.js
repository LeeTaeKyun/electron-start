// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const {remote} = require('electron');
const {Menu} = remote;


var onPrefsClicked1 = function() {
	alert('electron 1 메뉴');
}

var onPrefsClicked2 = function() {
	alert('electron 2-1 메뉴');
	
}
var onPrefsClicked3 = function() {
	alert('electron 2-2 메뉴');
	
}
var onConsoleOpen = function() {

remote.getCurrentWindow().openDevTools();
 
}

var onPageReload = function() {
	location.reload();
	
}


const template = [
	{
		label:'균메뉴1',
		submenu:[
			{
			label: '균 환경설정',
			click: function() {
				location.href = './index2.html';
			},
			accelerator: process.platform === 'darwin' ? 'alt+Command+I' : 'ctrl+shift+I'
		}
		]
	},
	{
		label: '균메뉴2',
	submenu: 
	[
		{
			label: 'Dev conosle open',
			click: function() {
				onConsoleOpen();
			}
		},
		{
			label: 'page reload',
			click: function() {
				onPageReload();
			}
		}
	]
	}
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);