const config = require('./wdio.conf.js').config
// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  'bstack:options' : {
    "osVersion" : "14",
    "deviceName" : "iPhone 12",
    "realMobile" : "true",
    "appiumVersion" : "1.22.0",
    "local" : "false",
    "debug" : "true"
  },
  "browserName" : "iPhone",
}];
config.cucumberOpts.tagExpression = '@iosBrowser'; // pass tag to run tests specific to ios

exports.config = config