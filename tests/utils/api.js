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

  async deleteUserFromDB(userID, token) {
    return this.client
      .delete(`rest/all/V1/customers/${userid}?XDEBUG_SESSION_START=PHPSTORM`, {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Cookie': 'AWSALB=W1auVOVwyeOPRw8qAzvx9AMgy77ZJtSbVfeFV4YbtcthuaoYtF67neQFdBYYTv+qq2V5e5yimWWkMTNh4c4YrvKIXDG2NlJ7WmrUdFBcsTRfqcRC5ovrv4qUJUYX; AWSALBCORS=W1auVOVwyeOPRw8qAzvx9AMgy77ZJtSbVfeFV4YbtcthuaoYtF67neQFdBYYTv+qq2V5e5yimWWkMTNh4c4YrvKIXDG2NlJ7WmrUdFBcsTRfqcRC5ovrv4qUJUYX; PHPSESSID=nhub7fu2lhf2c9cgon2kc8o3fp'
        }
      })
      .then((response) => {
        return response.body
      })
      .catch(err => console.log('Error in deleting User request ', err));
  }
  async getCart(token) {
    return this.client
      .get(`rest/V1/carts/mine`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        return response.body.items
      })
      .catch(err => console.log('Error in deleting User request ', err));
  }
  async deleteCartItem(itemId, token) {
    return this.client
      .delete(`rest/V1/carts/mine/items/${itemId}`, {
        headers: {
          'Authorization': 'Bearer ' + token,
          'Cookie': 'AWSALB=W1auVOVwyeOPRw8qAzvx9AMgy77ZJtSbVfeFV4YbtcthuaoYtF67neQFdBYYTv+qq2V5e5yimWWkMTNh4c4YrvKIXDG2NlJ7WmrUdFBcsTRfqcRC5ovrv4qUJUYX; AWSALBCORS=W1auVOVwyeOPRw8qAzvx9AMgy77ZJtSbVfeFV4YbtcthuaoYtF67neQFdBYYTv+qq2V5e5yimWWkMTNh4c4YrvKIXDG2NlJ7WmrUdFBcsTRfqcRC5ovrv4qUJUYX; PHPSESSID=nhub7fu2lhf2c9cgon2kc8o3fp'
        }
      })
      .then((response) => {
          console.log(response.body)
        return response.body
      })
      .catch(err => console.log('Error in deleting User request ', err));
  }

}
module.exports = Api;