const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
     get checkoutDiv () { return $('#checkout') }
     get addressLabel () { return $('.leading-snug.mb-0.tracking-normal') }
     get unitsLabel () { return $("[class] [class='flex mb-5']:nth-of-type(2) [class='w-4\/12 sm\:w-3\/12']") }
     get unitsInput () { return $('.sf-input.form__element') }
     get instructionsLabel () { return $("[class] [class='flex mb-5']:nth-of-type(3) [class='w-4\/12 sm\:w-3\/12']") }
     get instructionsInput () { return $('.sf-select--bordered') }
     get btnCart () { return $('.o-order-summary__toggle') }
     get cartGrid () { return $('.collected-product-list') }
     get subtotalLabel () { return $("[class='sf-property sf-property--full-width sf-property--price-summary property mt-10 mb-3'] .sf-price__value--special") }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkoutTitleAssertion () {
        await this.checkoutDiv.waitForDisplayed()
        expect(await this.checkoutDiv).toExist() 
    }
    async checkoutDeliveryAssertion () {
        await this.addressLabel.waitForDisplayed()
        expect(await this.addressLabel).toExist() 
        expect(await this.cartMinimumLabel).toHaveTextContaining(GlobalFunctions.getAddress())
    }
    async unitAssertion () {
        await this.unitsLabel.waitForDisplayed()
        expect(await this.unitsLabel).toExist() 
        expect(await this.unitsLabel).toHaveTextContaining('Unit #:')
        expect(await this.unitsInput).toExist() 
    }
    async instructionsAssertion () {
        await this.instructionsLabel.waitForDisplayed()
        expect(await this.instructionsLabel).toExist() 
        expect(await this.instructionsLabel).toHaveTextContaining('Instructions"')
        expect(await this.instructionsInput).toExist() 
    }
    async cartClick () {
        await this.btnCart.waitForDisplayed()
        await (await this.btnCart).click()
    }
    async cartModuleAssertion () {
        const cart = await GlobalFunctions.getCart()
        await (await this.cartGrid).waitForDisplayed()
        expect(await this.cartGrid).toExist() 
        var cards = (await this.cartGrid).$$('div.collected-product')
        for (let i = 0; i < (await cards).length; i++) {
            expect(await (await cards)[i].$$('div > div.o-order-summary-product__name')).toHaveTextContaining(cart[i].name)
            expect(await (await cards)[i].$$('div> div.a-brand > div.a-brand__link')).toHaveHref(cart[i].path)
            expect(await (await cards)[i].$$('div > div.sf-price')).toHaveTextContaining(cart[i].final_price)
        }
    }
    async subtotalAssertion () {
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        console.log(await(await this.subtotalLabel).getText())
        expect(await this.subtotalLabel).toHaveTextContaining(await GlobalFunctions.getSubtotal())
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('checkout');
    }

}

module.exports = new CheckoutPage();
