const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const utils = require('../utils/utils');
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
     get subtotalLabel () { return $(".o-order-summary__toggle > div.sf-price > span.sf-price__value") }
     get btnContinue () { return $(".pb-safe .btn--without-padding") }
     get btnRadioDelivery () { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__checkmark") }
     get labelDeliveryHour () { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__content") }
     get btnRadioPayment () { return $(".o-payment > div> .form__radio-group") }
     get promoDiscount () { return $('.tracking-tighter .items-center') }
     get inputPromoCode () { return $("input[name='promoCode']") }
     get labelPromoCode () { return $(".a-promo-code.a-promo-code--font-light.mt-10.w-full > .font-bold.leading-none.mb-0") }
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
        console.log(await (await this.addressLabel).getText())
        expect(await this.addressLabel).toHaveTextContaining(await GlobalFunctions.getAddress())
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
        expect(await this.instructionsLabel).toHaveTextContaining('Instructions:')
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
            expect(await (await cards)[i].$$('div > div.sf-price')).toHaveTextContaining(cart[i].final_price)
        }
    }
    async subtotalAssertion () {
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        console.log(await(await this.subtotalLabel).getText())
        expect(await this.subtotalLabel).toHaveTextContaining(await GlobalFunctions.getSubtotal())
    }
    async selectDate () {
        await (await this.labelDeliveryHour).waitForDisplayed()
        expect(await this.labelDeliveryHour).toExist() 
        utils.SelectedDate = await (await this.labelDeliveryHour).getText()
        console.log(utils.SelectedDate)
        await (await this.labelDeliveryHour).click()
    }
    async selectPayment () {
        await (await this.btnRadioPayment).waitForDisplayed()
        expect(await this.btnRadioPayment).toExist() 
        var radioButtons = (await this.btnRadioPayment).$$('div.sf-radio > label.sf-radio__container')
        var optionNumber = await this.getOption(await this.getRandom())
        utils.SelectedPayment = await (await radioButtons)[optionNumber].getText()
        await (await radioButtons)[optionNumber].click()
    }
    async getRandom () {
        return parseInt((Math.random() * (3 - 1 )))
    }
    async getOption (option) {
        if(option == 'debit'){
            return 0
        }else if(option == 'aeropay'){
            return 1
        }else{
            return 2
        }
    }
    async checkContinueButton (flag) {
        await (await this.btnContinue).waitForDisplayed()
        if(flag==true){
            expect(await this.btnContinue).toBeEnabled()
        }else{
            expect(await this.btnContinue).toBeDisabled()
        }
    }
    async clickContinueButton () {
        await (await this.btnContinue).click()
    }
    async promoDiscountAssertion () {
        await (await this.promoDiscount).waitForDisplayed()
        expect(await this.promoDiscount).toExist() 
    }
    async promoCodeAssertion () {
        await (await this.inputPromoCode).waitForDisplayed()
        expect(await this.inputPromoCode).toExist() 
        var code = (await (await this.inputPromoCode).getValue()).length
        expect(code).toHaveValue({gte : 1 })
        expect(await this.labelPromoCode).toExist() 
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('checkout');
    }

}

module.exports = new CheckoutPage();
