class GlobalFunctions {
  async getLocation() {
    await browser.setTimeout({ script: 5000 })
    const result = await  browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/delivery/deliveryArea')
    var location = JSON.parse(result)
    return location.delivery_area_name
  }
  async getCart() {
    await browser.setTimeout({ script: 5000 })
    const result = await  browser.execute((key) => {
      return this.localStorage.getItem(key)
    }, 'shop/cart/current-cart')
    var cart = JSON.parse(result)
    return cart
  }
}
module.exports = new GlobalFunctions();