
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

    'bstack:options' : {
      "osVersion" : "11.0",
      "deviceName" : "Samsung Galaxy S21",
      "realMobile" : "true",
      "local" : "false",
      "debug" : "true",
      "networkLogs" : "true",
      'consoleLogs': 'info',
      'video': 'true',
      },
      "browserName" : "Android",

  }
];
config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;