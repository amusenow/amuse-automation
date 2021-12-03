const got = require('got')
let utils = require('./utils')
let GlobalFunc = require('./GlobalFunc.js')


class Api {
   constructor(prefixUrl) {
    this.client = got.extend({
      prefixUrl,
      responseType: 'json',
    })
  }

  async deleteUserFromDB(userid, token) {
    return this.client
      .delete(`rest/all/V1/customers/${userid}?XDEBUG_SESSION_START=PHPSTORM`,{
        headers: {
          'Authorization': 'Bearer ' + Buffer.from(token).toString("base64"),
        }
      })
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in deleting User request ', err));
  }
  async getCart(token) {
    return this.client
      .get(`rest/V1/carts/mine`,{
        headers: {
          'Authorization': 'Bearer ' + token,
          
        }
      })
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in geting Users cart request ', err));
  }
  async deleteCartItem(itemId, token) {
    return this.client
      .delete(`rest/V1/carts/mine/items/${itemId}`,{
        headers: {
          'Authorization': 'Bearer ' + token,
          
        }
      })
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in deleting Users cart request ', err));
  }

}
module.exports = Api;