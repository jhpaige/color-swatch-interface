// Logs console to application.log
const serverConsoleLog = () => {
  const fs = require('fs');
  const logStream = fs.createWriteStream('application.log', { flags: 'a' });

  console.log = function () {
      logStream.write([...arguments].join(' ') + '\n');
      process.stdout.write([...arguments].join(' ') + '\n');
  };

  console.error = function () {
      logStream.write('[ERROR] ' + [...arguments].join(' ') + '\n');
      process.stderr.write('[ERROR] ' + [...arguments].join(' ') + '\n');
  };
};

module.exports = { serverConsoleLog };