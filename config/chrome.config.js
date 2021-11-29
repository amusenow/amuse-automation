const config = require('./wdio.conf.js').config
// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  //The defaults you need to have in your config
  'browserName': 'Chrome',
    'bstack:options': {
        'os': 'Windows',
        'osVersion': '10',
        'debug': 'true',
        'consoleLogs': 'info',
        'networkLogs': 'true',
        'video': 'true',
        'resolution': '1920x1080',
        
      },
  //-----------------
  // 'browserstack:browser_version': 'latest',
  // 'browserName': 'Chrome',
  // 'browserstack:os': 'Windows',
  // 'browserstack:os_version': '10',
  // 'browserstack:video': 'true',
  // "browserstack:acceptSslCerts" : "true",
  // "browserstack:local" : "false",
  // 'browserstack:resolution': '1920x1080',
  // "browserstack:networkLogs":"true",
  // "browserstack:console":"errors"

//   browserName: 'chrome',
//   platformName: "linux"

}];
config.cucumberOpts.tagExpression = '@web'; // pass tag to run tests specific to ios

exports.config = config