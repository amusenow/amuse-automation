const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderTracking extends Page {
    /**
     * define selectors using getter methods
     */
     get orderTrackingDiv() { return $('#order-tracking') }
     get activeStatus() { return $('div.status.active > div.status-number') }
     get recipientName() { return $('h4.text-fontBase') }
     get addressLabel() { return $('.text-primary.leading-none:nth-of-type(1)') }
     get hourLabel() { return $('.text-primary.leading-none:nth-of-type(2)') }
     

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async orderTrackingDivAssertion () {
        await (await this.orderTrackingDiv).waitForDisplayed()
        expect(await this.orderTrackingDiv).toExist()
    }
    async activeStatusAssertion () {
        await (await this.activeStatus).waitForDisplayed()
        expect(await this.activeStatus).toExist()
    }
    async recipientAssertion () {
        const userInfo = await GlobalFunctions.getRecipient()
        await (await this.recipientName).waitForDisplayed()
        expect(await this.recipientName).toExist()
        expect(await this.recipientName).toHaveTextContaining(`Thanks, ${userInfo.firstname}!`)
    }
    async deliveryAddressAssertion () {
        const address = await GlobalFunctions.getAddress()
        await (await this.addressLabel).waitForDisplayed()
        expect(await this.addressLabel).toExist()
        expect(await this.addressLabel).toHaveTextContaining(address)
    }
    async hourAssertion () {
        await (await this.hourLabel).waitForDisplayed()
        expect(await this.hourLabel).toExist()
        expect(await this.hourLabel).toHaveTextContaining(utils.SelectedDate)
    }
    
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('OrderTracking');
    }

}

module.exports = new OrderTracking();
