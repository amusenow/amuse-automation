
const config = require('./wdio.conf.js').config;
//const AndroidInfo = require('./android.info.js');

// ====================
// Capabilities Android
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config

    'browserstack:device': 'Google Pixel 4',
    'browserstack:os_version': '11.0',
    'browserstack:realMobile': 'true',
    'browserstack:video': 'true',
    'browserstack:local': 'false',
    "browserstack:acceptSslCerts" : "true",
    'browserstack:automationName': 'Appium',
    'browserName': 'Android',
    "browserstack:browserstack.networkLogs":"true",
    "browserstack:browserstack.console":"errors"

  }
];
config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;