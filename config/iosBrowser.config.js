const config = require('./wdio.conf.js').config
// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{
  //The defaults you need to have in your config
    'bstack:options' : {
      "osVersion" : "14",
      "deviceName" : "iPhone 12",
      "realMobile" : "true",
      "local" : "false",
      "debug" : "true",
      "networkLogs" : "true",
      'consoleLogs': 'info',
      'video': 'true',
    },
    "browserName" : "iPhone",
  
  

  /*browserName: 'safari',
  platformName: 'iOS',
  maxInstances: 1,
  //For W3C the appium capabilities need to have an extension prefix
  //This is `appium:` for all Appium Capabilities which can be found here
  //http://appium.io/docs/en/writing-running-appium/caps/
  
  'appium:deviceName': 'iPhone 12 Pro',
  'appium:platformVersion': '15.2',
  //// 'appium:udid': '586EFE98-9998-4BFA-AC75-BABF034D06BB',
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'XCUITest',
  'appium:newCommandTimeout': 240,
  'appium:wdaLaunchTimeout': 999999,
  'appium:wdaConnectionTimeout': 999999,*/
  
  // The following capabilities are needed to run tests on physical devices. Request them to your Dev Team
  // xcodeOrgId: 'YD5FNB475F',
  // xcodeSigningId: 'iPhone Developer',
  // //
  // startIWDP: true, // For the ios webkit debug real devices
  // noReset: false,
  // wdaLaunchTimeout: 999999,
  // wdaConnectionTimeout: 999999,
}];
config.cucumberOpts.tagExpression = '@iosBrowser'; // pass tag to run tests specific to ios

exports.config = config