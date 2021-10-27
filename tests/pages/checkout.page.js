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
     get subtotalLabel () { return $(".o-order-summary__toggle > div.sf-price") }
     get btnContinue () { return $(".pb-safe .btn--without-padding") }
     get btnRadioDelivery () { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__checkmark") }
     get labelDeliveryHour () { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__content") }
     get btnRadioPayment () { return $(".o-payment > div> .form__radio-group") }
     get promoDiscount () { return $('.tracking-tighter .items-center') }
     get inputPromoCode () { return $("input[name='promoCode']") }
     get labelPromoCode () { return $(".a-promo-code.a-promo-code--font-light.mt-10.w-full > .font-bold.leading-none.mb-0") }
     get headerLogo () { return $("a[title='Amuse']") }
     get btnDeliveryAddress () { return $(".checkout__order-details .btn-icon.duration-150.ease-in-out.font-normal.transition") }
     get dateCarausel () { return $(".slick-track") }
     get hourRadioButtonGroup () { return $(".form__radio-group > .flex > div") }
     get btnPromoCode () { return $(".a-promo-code__toggle") }
     get btnEditCart () { return $(".o-order-summary .btn-icon.duration-150.ease-in-out.font-normal.px-1.py-1.transition") }
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
    async logoAssertion () {
        await this.headerLogo.waitForDisplayed()
        expect(await this.headerLogo).toExist() 
    }
    async clickDeliveryAddress () {
        await this.btnDeliveryAddress.waitForDisplayed()
        await (await this.btnDeliveryAddress).click()
    }
    async clickEditCart () {
        await this.btnEditCart.waitForDisplayed()
        await (await this.btnEditCart).click()
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
            if(cart[i].hasOwnProperty("special_price")){
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value--old')).toHaveTextContaining(cart[i].price * cart[i].qty)
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value--special')).toHaveTextContaining(cart[i].special_price * cart[i].qty)
            }else{
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value')).toHaveTextContaining(cart[i].price * cart[i].qty)
            }
            
        }
    }
    async subtotalAssertion () {
        await (await this.subtotalLabel).scrollIntoView()
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        if(await GlobalFunctions.promoInCart()){
            expect(await this.subtotalLabel.$$('.sf-price__value.sf-price__value--old')).toExist()
            expect(await this.subtotalLabel.$$('.sf-price__value.sf-price__value--special')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        }else{
            expect(await this.subtotalLabel.$$('.sf-price__value')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        }
    }
    async selectTime () {
        await (await this.hourRadioButtonGroup).waitForDisplayed()
        expect(await this.hourRadioButtonGroup).toExist() 
        var hour = (await this.hourRadioButtonGroup).$$('.delivery-time-row > .sf-radio  > .sf-radio__container')
        var leng = (await hour).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedDeliverHour = await (await hour)[optionNumber].getText()
        await (await hour)[optionNumber].click()
    }
    async selectDate () {
        await (await this.dateCarausel).waitForDisplayed()
        expect(await this.dateCarausel).toExist() 
        var dates = (await this.dateCarausel).$$('.slick-slide')
        var leng = (await dates).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedDeliverDate = await (await dates)[optionNumber].getText()
        await (await dates)[optionNumber].click()
    }
    async selectPayment () {
        await (await this.btnRadioPayment).waitForDisplayed()
        expect(await this.btnRadioPayment).toExist() 
        var radioButtons = (await this.btnRadioPayment).$$('div.sf-radio > label.sf-radio__container')
        var leng = (await radioButtons).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedPayment = await (await radioButtons)[optionNumber].getText()
        await (await radioButtons)[optionNumber].click()
    }
    async checkSpecialPrice () {
        if(GlobalFunctions.promoInCart()){
            expect(await this.labelPromoCode).toBeDisplayed() 
            expect(await this.promoDiscount).toExist() 
        }
    }
    async getRandom (leng) {
        return parseInt((Math.random() * (leng - 1 )))
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
    async clickPromoCode () {
        await (await this.btnPromoCode).scrollIntoView()
        await (await this.btnPromoCode).click()
    }
    async enterPromoCode () {
        await (await this.inputPromoCode).scrollIntoView()
        await (await this.inputPromoCode).waitForDisplayed()
        await (await this.inputPromoCode).setValue(utils.promoCode)
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
        expect(await this.labelPromoCode).toBeDisplayed() 
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('checkout');
    }

}

module.exports = new CheckoutPage();
