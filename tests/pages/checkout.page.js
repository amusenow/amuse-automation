const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DealsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get checkoutDiv () { return $('#checkout') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkoutTitleAssertion () {
        await this.checkoutDiv.waitForDisplayed()
        expect(await this.checkoutDiv).toExist()
        
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('checkout');
    }

}

module.exports = new DealsPage();
