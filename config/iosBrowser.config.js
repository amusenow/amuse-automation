const config = require('./wdio.conf.js').config
// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  "os_version" : "13",
  "device" : "iPhone 11",
  "real_mobile" : "true",
  "browserstack.appium_version" : "1.22.0",
  "browserstack.local" : "false",
  "browserstack.debug" : "true",
  "browserstack.networkLogs" : "true",
  "browserName" : "iPhone"
}];
config.cucumberOpts.tagExpression = '@iosBrowser'; // pass tag to run tests specific to ios

exports.config = config