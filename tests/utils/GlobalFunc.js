const utils = require("./utils")

class GlobalFunctions {
  async getLocation() {
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

}
module.exports = new GlobalFunctions();