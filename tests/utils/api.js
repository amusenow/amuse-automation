const got = require('got')
let utils = require('./utils')
let GlobalFunc = require('./GlobalFunc.js')


class Api {
   constructor(prefixUrl, token) {
    this.client = got.extend({
      prefixUrl,
      responseType: 'json',
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
  }

  async deleteUserFromDB(userid) {
    return this.client
      .delete(`rest/all/V1/customers/${userid}?XDEBUG_SESSION_START=PHPSTORM`)
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in deleting User request ', err));
  }
  async getCart() {
    return this.client
      .get(`rest/V1/carts/mine`)
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in geting Users cart request ', err.response.headers));
  }
  async deleteCartItem(itemId) {
    return this.client
      .delete(`rest/V1/carts/mine/items/${itemId}`)
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in deleting Users cart request ', err.response));
  }

}
module.exports = Api;