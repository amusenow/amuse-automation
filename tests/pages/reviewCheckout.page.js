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
     get subtotalLabel () { return $('div.sf-property>div.sf-price >.sf-price__value--special') }
     get feesLabel () { return $('.mb-3.mt-10.sf-accordion.sf-accordion--has-chevron.sf-accordion--header-purple-deep.sf-accordion--price-summary > .sf-accordion-item > .flex.items-center.justify-between > .font-medium.text-xs') }
     get discountsLabel () { return $('div:nth-of-type(4) > .sf-accordion-item > .flex.items-center.justify-between > .font-medium.text-xs') }
     get taxesLabel () { return $('div:nth-of-type(5) > .sf-accordion-item > .flex.items-center.justify-between > .font-medium.text-xs') }
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
        await (await this.recepientAddress).waitForDisplayed()
        expect(await this.recepientAddress).toExist() 
        expect(await this.recepientAddress).toHaveTextContaining(await GlobalFunctions.getAddress())
    }
    async checkoutDeliveryTimeAssertion () {
        await (await this.deliveryWindow).waitForDisplayed()
        expect(await this.deliveryWindow).toExist() 
        expect(await this.deliveryWindow).toHaveTextContaining(await utils.SelectedDeliverHour)
    }
    async checkoutPaymentAssertion () {
        await (await this.paymentWindow).waitForDisplayed()
        expect(await this.paymentWindow).toExist() 
        expect(await this.paymentWindow).toHaveTextContaining(await utils.SelectedPayment)
    }
    async subtotalAssertion () {
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        expect(await this.subtotalLabel).toHaveTextContaining(await GlobalFunctions.getSubtotal())
    }
    async feesAssertion () {
        await (await this.feesLabel).waitForDisplayed({ timeoutMsg: 'There were no fees displayed' })
        expect(await this.feesLabel).toExist()
        var fees = await (await this.feesLabel).getText()
        utils.fees = fees.match(/^$[0-9]+.[0-9]+/)
    }
    async discountsAssertion () {
        await (await this.discountsLabel).waitForDisplayed({ timeoutMsg: 'There were no fees displayed' })
        expect(await this.discountsLabel).toExist() 
        var discounts = await (await this.discountsLabel).getText()
        utils.disconuts = discounts.match(/^$[0-9]+.[0-9]+/)
    }
    async taxesAssertion () {
        await (await this.taxesLabel).waitForDisplayed({ timeoutMsg: 'There were no fees displayed' })
        expect(await this.taxesLabel).toExist() 
        var taxes = await (await this.taxesLabel).getText()
        utils.taxes = taxes.match(/^$[0-9]+.[0-9]+/)
    }
    async totalAssertion () {
        await (await this.totalLabel).waitForDisplayed()
        expect(await this.totalLabel).toExist() 
        utils.lastTotal =  await (await this.totalLabel).getText()
        var totalSum = utils.taxes + utils.fees + await GlobalFunctions.getSubtotal() - utils.disconuts
        console.log(totalSum)
        expect(await this.subtotalLabel).toHaveTextContaining(totalSum)
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
