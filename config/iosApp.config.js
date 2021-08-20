const config = require('./wdio.conf.js').config
const IosInfo = require('./ios.info.js');

// ====================
// Capabilities IOS
// ====================
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [{

  // The defaults you need to have in your config
  platformName: 'iOS',
  maxInstances: 1,
  // For W3C the appium capabilities need to have an extension prefix
  // This is `appium:` for all Appium Capabilities which can be found here
  // http://appium.io/docs/en/writing-running-appium/caps/
  'appium:deviceName': 'iPhone 11 Pro Max',
  'appium:platformVersion': '13.2.2',
  'appium:udid': 'B624ABAA-7830-48FA-AC12-1126EAFDA4A0',
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'XCUITest',
  // The path to the app
  // 'appium:app': join(process.cwd(), './apps/iOS-Simulator-NativeDemoApp-0.4.0.app.zip'),
  'appium:app': 'com.apple.Preferences',
  // appium:app: config.paths.ios,

  // Read the reset strategies very well, they differ per platform, see
  // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
  'appium:noReset': true,
  'appium:newCommandTimeout': 240,
  'appium:wdaLaunchTimeout': 999999,
  'appium:wdaConnectionTimeout': 999999,

  // The following capabilities are needed to run tests on physical devices. Request them to your Dev Team
  // xcodeOrgId: 'YD5FNB475F',
  // xcodeSigningId: 'iPhone Developer',
  // //
  // startIWDP: true, // For the ios webkit debug real devices
  // noReset: false,
}];
config.cucumberOpts.tagExpression = '@iosApp';// pass tag to run tests specific to ios

exports.config = config