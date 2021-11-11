const config = require('./wdio.conf.js').config
// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  //The defaults you need to have in your config
  
  'browserstack:browser_version': 'latest',
  'browserName': 'chrome',
  'browserstack:os': 'Windows',
  'browserstack:os_version': '10',
  'browserstack:video': 'true',
  "browserstack:acceptSslCerts" : "true",
  "browserstack:goog:chromeOptions" : {
    "args" : [ "window-size=1920x1080" ]  // ChromeOption to start chrome in incognito mode
  },
  'browserstack:resolution': '1920x1080',

//   browserName: 'chrome',
//   platformName: "linux"

}];
config.cucumberOpts.tagExpression = '@web'; // pass tag to run tests specific to ios

exports.config = config