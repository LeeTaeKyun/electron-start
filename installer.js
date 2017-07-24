var electronWinstaller = require('electron-winstaller');

resultPromise = electronWinstaller.createWindowsInstaller({

    appDirectory: './dist/{앱이름}-win32-x64',

    outputDirectory: './dist/installer-win32-x64',

    exe: '{앱이름}.exe',

    setupExe: '{설치파일이름}.exe'

});


resultPromise.then(function () {

    console.log("설치파일 생성이 완료되었습니다.");

}, function (e) {

    console.log('ERROR : ' + e.message);

});