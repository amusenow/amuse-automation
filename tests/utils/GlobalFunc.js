const utils = require("./utils")
const Api = require("./api")

class GlobalFunctions {
  async getLocation() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/address/currentAddress')
    var location = JSON.parse(result)
    return location.streetAddress
  }
  async getLocationUnlogged() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/delivery/deliveryArea')
    var location = JSON.parse(result)
    return location.delivery_area_name
  }
  async getCart() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/cart/current-cart')
    var cart = JSON.parse(result)
    return cart
  }
  async getRecipient() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/user/current-user')
    var user = JSON.parse(result)
    return user
  }
  async getCurrentToken() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/user/current-token')
    var token = JSON.parse(result)
    return token
  }
  async getAddress() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/address/currentAddress')
    var address = JSON.parse(result)
    return address.streetAddress
  }
  async getSubtotal() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/cart/current-cart')
    var cart = JSON.parse(result)
    let subtotal = 0
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty("special_price")) {
        subtotal = parseFloat(subtotal) + parseFloat(cart[i].special_price *cart[i].qty)
      } else {
        subtotal = parseFloat(subtotal) + parseFloat(cart[i].price *cart[i].qty)
      }
    }
    utils.lastSubtotal = subtotal
    return subtotal
  }
  async promoInCart() {
    await browser.setTimeout({ script: 5000 })
    const result = await browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/cart/current-cart')
    var cart = JSON.parse(result)
    var flag = false
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty("special_price")) {
        flag = true
      }
    }
    return flag
  }
  async deleteCart() {
    await browser.setTimeout({ script: 5000 })
    var url =''
    if(process.env.BASEURL.includes('dev')){
      url = process.env.MAGENTO_DEV
    }else if(process.env.BASEURL.includes('stage')){
      url = process.env.MAGENTO_STAGE
    }else{//prod
      url = process.env.MAGENTO_PROD
    }
    const api = new Api(url);
    const cart = await api.getCart(await this.getCurrentToken())
    for(let i =  0; i < cart.length; i++){
      await api.deleteCartItem(cart[i].item_id, await this.getCurrentToken())
    }
    driver.refresh()
  }

}
module.exports = new GlobalFunctions();