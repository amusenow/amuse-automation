
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
    platformName: 'Android',
    browserName: 'chrome',
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    'appium:deviceName': 'Pixel 5 API 30',
    'appium:platformVersion': '11.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:udid': 'emulator-5554',

    // 'appium:newCommandTimeout': 240,

    //To automate webview in the app this is necessary
    //https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md
    //https://sites.google.com/chromium.org/driver/
     'appium:chromedriverExecutableDir': config.rootPath + '/chromedriver',
  }
];
config.cucumberOpts.tagExpression = '@androidBrowser'; // pass tag to run tests specific to android

exports.config = config;