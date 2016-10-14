require('shelljs/global');

var cmdLine = './node_modules/.bin/webpack --progress';
var environ = 'production';
var command;

if (process.platform === 'win32') {
  cmdLine = 'set NODE_ENV=' + environ + '&& ' + cmdLine;
} else {
  cmdLine = 'NODE_ENV=' + environ + ' ' + cmdLine;
}

exec(cmdLine);
