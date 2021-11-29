
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
const SlackReporter = require('@moroo/wdio-slack-reporter').default;
const { join } = require('path');
require('dotenv').config()
const GlobalFunc = require("../tests/utils/GlobalFunc")
const Api = require("../tests/utils/api")

const defaultTimeoutInterval = process.env.DEBUG ? (24 * 60 * 60 * 1000) : 60000

const apps = {
  android: 'CelsiusFahrenheitConverter_v1.0.1_apkpure.com.apk',
  ios: 'PROD6.8.2.ipa'
}

let _path = __dirname.split('/')
_path.pop()

const _rootPath = _path.join('/')

exports.config = {
  user: process.env.BS_USER,
  key: process.env.BS_KEY,
  //runner: 'local',

  rootPath: _rootPath,
  paths: {
    android: _rootPath + '/app/' + apps.android,
    ios: _rootPath + '/app/ ' + apps.ios
  },
  apps: apps,

  // Runner and framework Configuration

  specs: [
    './tests/features/home.feature',
    './tests/features/login.feature',
    './tests/features/locationBox.feature',
    './tests/features/shopPage.feature',
    './tests/features/brands.feature',
    './tests/features/deals.feature',
    './tests/features/search.feature',
    //'./tests/features/profile.feature',
    './tests/features/resetPassword.feature',
    './tests/features/dailyAllowance.feature',
    //'./tests/features/checkout.feature',
    './tests/features/productDetail.feature',
    './tests/features/cart.feature',
    './tests/features/cartMinimum.feature',
  ],

  logLevel: 'error',
  maxInstances: 5,
  maxInstancesPerCapability: 1,
  reporters: ['spec',
    ['timeline', {
      outputDir: './reports',
      embedImages: true,
      screenshotStrategy: 'on:error'
    }],
    [
      SlackReporter,
      {
        slackOptions: {
          type: 'web-api',
          channel: 'U69UC3B5X',
          slackBotToken: process.env.SLACK_TOKEN,
          uploadScreenshotOfFailedCase: true,
          notifyFailedCase: true,
          title: 'Slack Reporter Test',
        },
      }
    ],
  ],
  waitforTimeout: defaultTimeoutInterval,
  services: [[TimelineService],
  //uncomment for browserstack runs
  ['browserstack'],
  ['appium',
    {
      // This will use the globally installed version of Appium
      command: 'appium',
      args: {
        // This is needed to tell Appium that we can execute local ADB commands
        // and to automatically download the latest version of ChromeDriver
        relaxedSecurity: true,
      },
    },
  ],
  ['image-comparison',
    // The options
    {
      // Some options, see the docs for more
      baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
      formatImageName: '{tag}',
      screenshotPath: join(process.cwd(), '.tmp/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      // NOTE: When you are testing a hybrid app please use this setting
      isHybridApp: false,
      // Options for the tabbing image
      tabbableOptions: {
        circle: {
          size: 18,
          fontSize: 18,
          // ...
        },
        line: {
          color: '#ff221a', // hex-code or for example words like `red|black|green`
          width: 3,
        },
      }
      // ... more options
    }],
  ],
  // For browserstack:
  host: 'hub.browserstack.com',
  //For simulator running:
  //host: '127.0.0.1',
  //port: 4723,
  path: '/wd/hub/',
  baseUrl: process.env.BASEURL,
  deprecationWarnings: false,

  framework: 'cucumber',
  cucumberOpts: {
    require: ['./tests/stepDefinitions/*.js'],

    // <boolean> show full backtrace for errors
    backtrace: false,

    requireModule: [],

    // <boolean> invoke formatters without executing steps
    dryRun: false,

    // <boolean> abort the run on first failure
    failFast: false,

    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],

    // <boolean> disable colors in formatter output
    colors: true,

    // <boolean> hide step definition snippets for pending steps
    snippets: true,

    // <boolean> hide source uris
    source: true,

    // <string[]> (name) specify the profile to use
    profile: [],

    // <boolean> fail if there are any undefined or pending steps
    strict: false,

    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: 'not @Pending',

    // <number> timeout for step definitions
    timeout: defaultTimeoutInterval,

    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,

    // Enable this to make webdriver.io behave as if scenarios and not steps were the tests.
    scenarioLevelReporter: false
  },

  // =====
  // Hooks
  // =====
  // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  onPrepare: async function () {
    // Start the appium server with default host:localhost, port:4723
    // appiumController.startAppium();
    // appiumController.startAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  },
  before: async function () {
    require('expect-webdriverio');
  },
  beforeFeature: async function () {
    if (driver.capabilities.platformName == 'windows') {
      driver.setWindowSize(1920, 1080)
    }
  },
  //
  onComplete: async function () {
    // Stop the appium server with default host:localhost, port:4723
    // appiumController.stopAppium();
    // appiumController.stopAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  },
  afterScenario: async function (result) {
    if (result.result.status == 'FAILED') {
      const screenshot = await (await driver).takeScreenshot();
      await SlackReporter.uploadFailedTestScreenshot(screenshot);
    }
  },
  afterFeature: async function (feature) {
    if (feature.includes('signUp')) {
      var url = ''
      if (process.env.BASEURL.includes('dev')) {
        url = process.env.MAGENTO_DEV
      } else if (process.env.BASEURL.includes('stage')) {
        url = process.env.MAGENTO_STAGE
      } else {//prod
        url = process.env.MAGENTO_PROD
      }
      const userID = await GlobalFunc.getRecipient().id;
      const api = await new Api(url);
      await api.deleteUserFromDB(userID, await GlobalFunc.getCurrentToken());
    }else if(feature.includes('shopPage') || feature.includes('dailyAllowance') || feature.includes('cart') || feature.includes('profile') 
    || feature.includes('checkout') || feature.includes('productDetail') || feature.includes('cartMinimum') || feature.includes('login')){
        await GlobalFunc.deleteCart()
    }
  }
}
