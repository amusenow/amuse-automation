const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ReviewCheckout extends Page {
    /**
     * define selectors using getter methods
     */
     get labelIdVerification() { return $('div > h2') }
     get labelReviewOrder () { return $('.collected-product-list') }
     get recepientName () { return $('.o-order-review__section__header > .content') }
     get recepientAddress () { return $('div:nth-of-type(2).o-order-review__section > .content') }
     get deliveryWindow () { return $('div:nth-of-type(3).o-order-review__section > .content') }
     get paymentWindow () { return $('div:nth-of-type(4).o-order-review__section > .content') }
     get subtotalLabel () { return $('div.sf-property>div.sf-price > span.sf-price__value') }
     get feesLabel () { return $('.mb-3.mt-10.sf-accordion > .sf-accordion-item > .flex.items-center > .sf-accordion-item__header') }
     get discountsLabel () { return $('div:nth-of-type(3) > .sf-accordion-item > .flex > .sf-accordion-item__header') }
     get taxesLabel () { return $('div:nth-of-type(4) > .sf-accordion-item > .flex > .sf-accordion-item__header') }
     get totalLabel () { return $('span.sf-property__value') }
     get btnPlaceOrder () { return $('.pb-safe .btn--without-padding') }
     

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async idVerificationAssertion () {
        await (await this.labelIdVerification).waitForDisplayed()
        expect(await this.labelIdVerification).toExist()
    }
    async labelReviewAssertion () {
        await (await this.labelReviewOrder).waitForDisplayed()
        expect(await this.labelReviewOrder).toExist()
    }
    async recepientAssertion () {
        const userInfo = await GlobalFunctions.getRecipient()
        await (await this.recepientName).waitForDisplayed()
        expect(await this.recepientName).toExist()
        expect(await this.recepientName).toHaveTextContaining(`${userInfo.firstname} ${userInfo.middlename} ${userInfo.lastname}`)
    }
    async checkoutDeliveryAssertion () {
        await this.recepientAddress.waitForDisplayed()
        expect(await this.recepientAddress).toExist() 
        expect(await this.recepientAddress).toHaveTextContaining(await GlobalFunctions.getAddress())
    }
    async checkoutDeliveryTimeAssertion () {
        await (await this.deliveryWindow).waitForDisplayed()
        expect(await this.deliveryWindow).toExist() 
        expect(await this.deliveryWindow).toHaveTextContaining(await utils.SelectedDate)
    }
    async checkoutPaymentAssertion () {
        await this.paymentWindow.waitForDisplayed()
        expect(await this.paymentWindow).toExist() 
        expect(await this.paymentWindow).toHaveTextContaining(await utils.SelectedPayment)
    }
    async subtotalAssertion () {
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        expect(await this.subtotalLabel).toHaveTextContaining(await GlobalFunctions.getSubtotal())
    }
    async feesAssertion () {
        await (await this.feesLabel).waitForDisplayed()
        expect(await this.feesLabel).toExist()
    }
    async discountsAssertion () {
        await (await this.discountsLabel).waitForDisplayed()
        expect(await this.discountsLabel).toExist() 
    }
    async taxesAssertion () {
        await (await this.taxesLabel).waitForDisplayed()
        expect(await this.taxesLabel).toExist() 
    }
    async totalAssertion () {
        await (await this.totalLabel).waitForDisplayed()
        expect(await this.totalLabel).toExist() 
    }
    async placeOrderButtonAssertion () {
        await (await this.btnPlaceOrder).waitForDisplayed()
        expect(await this.btnPlaceOrder).toExist() 
    }
    async placeOrderClick () {
        await (await this.btnPlaceOrder).waitForDisplayed()
        await (await this.btnPlaceOrder).click()
    }
    
    
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('reviewCheckout');
    }

}

module.exports = new ReviewCheckout();
