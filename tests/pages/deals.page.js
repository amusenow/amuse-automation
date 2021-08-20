const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DealsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get locationBox () { return $('.a-address-search') }
     get locationDiv () { return $('.m-select-location') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async locationBoxAssertion () {
        await expect(await this.locationBox).toExist()
        await expect(await this.locationBox).waitForDisplayed()
        await expect(await this.locationDiv).toExist()
        await expect(await this.locationDiv).waitForDisplayed()
    }
    async locationBoxAssertion (page) {
            await (await this.locationBox).waitForDisplayed() 
            await expect(await this.locationBox).toExist()
            await (await this.locationDiv).waitForDisplayed()
            await expect(await this.locationDiv).toExist()
            //await expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocation())
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('deals');
    }

}

module.exports = new DealsPage();
