
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');
const { join } = require('path');
const defaultTimeoutInterval = process.env.DEBUG ? (24 * 60 * 60 * 1000) : 60000

const apps = {
  android: 'CelsiusFahrenheitConverter_v1.0.1_apkpure.com.apk',
  ios: 'PROD6.8.2.ipa'
}

let _path = __dirname.split('/')
_path.pop()

const _rootPath = _path.join('/')

exports.config = {

  runner: 'local',

  rootPath: _rootPath,
  paths: {
    android: _rootPath + '/app/' + apps.android,
    ios: _rootPath + '/app/ ' + apps.ios
  },
  apps: apps,

  // Runner and framework Configuration

  specs: [
    './tests/features/home.feature',
    //'./tests/features/productDetail.feature'
  ],

  logLevel: 'error',
  maxInstances: 5,
  maxInstancesPerCapability: 1,
  reporters: ['spec',
  ],
  waitforTimeout: defaultTimeoutInterval,
  services: [
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
        isHybridApp: true,
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
  host: '127.0.0.1',
  port: 4723,
  path: '/wd/hub/',
  baseUrl: 'https://storefront.dev.amuse.com/',

  framework: 'cucumber',
  cucumberOpts: {
    require: ['./tests/stepDefinitions/*.js'],

    // <boolean> show full backtrace for errors
    backtrace: false,

    requireModule: [],

    // <boolean> invoke formatters without executing steps
    dryRun: false,

    // <boolean> abort the run on first failure
    failFast: true,

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
  onPrepare: function () {
    // Start the appium server with default host:localhost, port:4723
    // appiumController.startAppium();
    // appiumController.startAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  },
  before: function () {
  },
  //
  onComplete: function () {
    // Stop the appium server with default host:localhost, port:4723
    // appiumController.stopAppium();
    // appiumController.stopAppium({
    //   host: '127.0.0.1',
    //   port: '4444'
    // });
  }
}