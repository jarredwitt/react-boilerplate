require('shelljs/global');

var cmdLine = 'webpack-dev-server --history-api-fallback --progress --port 3000';
var environ = 'development';

if (process.platform === 'win32') {
  cmdLine = 'set NODE_ENV=' + environ + '&& ' + cmdLine;
} else {
  cmdLine = 'NODE_ENV=' + environ + ' ' + cmdLine;
}

exec(cmdLine);
