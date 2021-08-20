let utils = require('./utils.js');

class GlobalFunc {
  
  async getLocation() {
    var deliveryObject = await browser.execute(async (key) => (
        await this.localStorage.getItem(key)
    ), 'shop/delivery/deliveryArea')
    var location = JSON.parse(deliveryObject)
    return location.delivery_area_name
}

  AppContext(ContextValue) {
    let browserContexts = browser.contexts();
    let result = Object.keys(browserContexts).map(function (key) {
      return [key, browserContexts[key]]
    });

    let ContextEnum = {
      Native: result[0][1][0],
      Webview: result[0][1][1]
    }

    switch (ContextValue) {
      case "Native":
        return ContextEnum.Native
      case "Webview":
        return ContextEnum.Webview
      default:
        return ContextEnum.Native
    }
  }

  ResetApp() {
    if (browser.isAndroid) {
      browser.reset()
    } else {
      browser.removeApp(utils.bundleId)
      browser.launch()
    }
  }

  // For TVOS
  changeToContainerViewTVOS(direction) {
    browser.execute('mobile: pressButton', {name: `${direction}`})
  }

   // For TVOS
   TVOSControllerAction(action) {
    browser.execute(`mobile: ${action}`, {x: 800, y:400})
  }

  // For Android TV
  clickOnAndroidTVElement(selector) {
    browser.touchPerform([{
      action: 'tap',
      options: {
        element: selector.value.ELEMENT, // json web element was queried before
        // x: 768, // x offset
        // y: 835, // y offset
        count: 2 // number of touches
      }
    }])
  }


}

module.exports = new GlobalFunc();