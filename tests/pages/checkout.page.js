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
    get checkoutDiv() { return $('#checkout') }
    get addressLabel() { return $('.leading-snug.mb-0.tracking-normal') }
    get unitsLabel() { return $("[class] [class='flex mb-5']:nth-of-type(2) [class='w-4\/12 sm\:w-3\/12']") }
    get unitsInput() { return $('.sf-input.form__element') }
    get instructionsLabel() { return $("[class] [class='flex mb-5']:nth-of-type(3) [class='w-4\/12 sm\:w-3\/12']") }
    get instructionsInput() { return $('.sf-select--bordered') }
    get btnCart() { return $('.o-order-summary__toggle') }
    get cartGrid() { return $('.collected-product-list') }
    get subtotalLabel() { return $(".o-order-summary .sf-property--price-summary .sf-price") }
    get btnContinue() { return $(".btn--primary.btn.btn--without-padding") }
    get btnContinueMobile() { return $("#mobile-buttons .btn--primary.btn.btn--without-padding") }
    get btnRadioDelivery() { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__checkmark") }
    get labelDeliveryHour() { return $("div:nth-of-type(1) > .form__element.form__radio.my-3.sf-radio > .sf-radio__container > .sf-radio__content") }
    get btnRadioPayment() { return $(".o-payment > div> .form__radio-group") }
    get promoDiscount() { return $('.m-price-summary .tracking-tighter:nth-of-type(1) .items-center') }
    get deliveryDiscount() { return $('.m-price-summary .tracking-tighter:nth-of-type(2) .items-center') }
    get deliveryDiscountLabel() { return $("[class='m-checkout-delivery mb-10'] .text-primary") }
    get inputPromoCode() { return $("input[name='promoCode']") }
    get labelPromoCode() { return $(".a-promo-code.a-promo-code--font-light.mt-10.w-full > .font-bold.leading-none.mb-0") }
    get headerLogo() { return $("a[title='Amuse']") }
    get btnDeliveryAddress() { return $(".checkout__order-details .btn-icon.duration-150.ease-in-out.font-normal.transition") }
    get dateCarausel() { return $(".slick-track") }
    get hourRadioButtonGroup() { return $(".form__radio-group > .flex > div") }
    get btnPromoCode() { return $(".a-promo-code__toggle") }
    get btnEditCart() { return $(".o-order-summary .btn-icon.duration-150.ease-in-out.font-normal.px-1.py-1.transition") }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. to login using username and password
    */
    async checkoutTitleAssertion() {
        await (await this.checkoutDiv).waitForDisplayed()
        expect(await this.checkoutDiv).toExist()
    }
    async checkoutDeliveryAssertion() {
        await (await this.addressLabel).waitForDisplayed()
        expect(await this.addressLabel).toExist()
        expect(await this.addressLabel).toHaveTextContaining(await GlobalFunctions.getAddress())
    }
    async unitAssertion() {

        await (await this.unitsLabel).waitForDisplayed()
        expect(await this.unitsLabel).toExist()
        expect(await this.unitsLabel).toHaveTextContaining('Unit #:')
        expect(await this.unitsInput).toExist()
    }
    async logoAssertion() {
        await (await this.headerLogo).waitForDisplayed()
        expect(await this.headerLogo).toExist()
    }
    async clickDeliveryAddress() {
        await (await this.btnDeliveryAddress).waitForDisplayed()
        await (await this.btnDeliveryAddress).click()
    }
    async clickEditCart() {
        await (await this.btnEditCart).waitForDisplayed()
        await (await this.btnEditCart).click()
    }
    async instructionsAssertion() {
        await (await this.instructionsLabel).waitForDisplayed()
        expect(await this.instructionsLabel).toExist()
        expect(await this.instructionsLabel).toHaveTextContaining('Instructions:')
        expect(await this.instructionsInput).toExist()
    }
    async cartClick() {
        if (driver.capabilities.platformName == 'windows') {}
        else{
            await (await this.btnCart).waitForDisplayed()
            await (await this.btnCart).click()
        }

        
    }
    async cartModuleAssertion() {
        const cart = await GlobalFunctions.getCart()
        await (await this.cartGrid).waitForDisplayed()
        expect(await this.cartGrid).toExist()
        var cards = (await this.cartGrid).$$('div.collected-product')
        for (let i = 0; i < (await cards).length; i++) {
            expect(await (await cards)[i].$$('div > div.o-order-summary-product__name')).toHaveTextContaining(cart[i].name)
            if (cart[i].hasOwnProperty("special_price")) {
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value--old')).toHaveTextContaining(cart[i].price * cart[i].qty)
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value--special')).toHaveTextContaining(cart[i].special_price * cart[i].qty)
            } else {
                expect(await (await cards)[i].$$('div > div.sf-price > .sf-price__value.sf-price__value')).toHaveTextContaining(cart[i].price * cart[i].qty)
            }

        }
    }
    async subtotalAssertion() {
        await (await this.subtotalLabel).scrollIntoView()
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist()
        if (await GlobalFunctions.promoInCart()) {
            expect(await (await this.subtotalLabel).$$('.sf-price__value.sf-price__value--old')).toExist()
            expect(await (await this.subtotalLabel).$$('.sf-price__value.sf-price__value--special')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        } else {
            expect(await (await this.subtotalLabel).$$('.sf-price__value')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        }
    }
    async selectTime() {
        await (await this.addressLabel).scrollIntoView()
        await (await this.hourRadioButtonGroup).waitForDisplayed()
        expect(await this.hourRadioButtonGroup).toExist()
        var hour = (await this.hourRadioButtonGroup).$$('.delivery-time-row > .sf-radio  > .sf-radio__container')
        var leng = (await hour).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedDeliverHour = await (await hour)[optionNumber].getText()
        await (await hour)[optionNumber].scrollIntoView()
        await (await hour)[optionNumber].click()
    }
    async selectDate() {
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await this.addressLabel).scrollIntoView()
        await (await this.dateCarausel).waitForDisplayed()
        expect(await this.dateCarausel).toExist()
        var dates = (await this.dateCarausel).$$('.slick-slide')
        var leng = (await dates).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedDeliverDate = await (await dates)[optionNumber].getText()
        await (await dates)[optionNumber].scrollIntoView()
        await (await dates)[optionNumber].click()
    }
    async selectDiscountedTime() {
        await (await this.addressLabel).scrollIntoView()
        await (await this.dateCarausel).waitForDisplayed()
        expect(await this.dateCarausel).toExist()
        await (await this.hourRadioButtonGroup).waitForDisplayed()
        expect(await this.hourRadioButtonGroup).toExist()
        var dates = (await this.dateCarausel).$$('.slick-slide .m-checkout-delivery__date')
        console.log((await dates).length)
        var i = 0;
        var flag = true;
        while (flag) {
            var hours = (await this.hourRadioButtonGroup).$$('.delivery-time-row > .sf-radio')
            for (let j = 0; j < (await hours).length; j++) {
                var info = JSON.parse(await (await hours)[j].getAttribute("qa-data-window"))
                if (info.price_adjustment < 0 ) {
                    utils.SelectedDeliverDate = await (await dates)[i].getText()
                    utils.SelectedDeliverHour = await (await hours)[j].getText()
                    utils.DiscountedDeliverHour = info.price_adjustment
                    await (await hours)[j].scrollIntoView()
                    var hour =  (await hours)[j].$('.sf-radio__checkmark')
                    await (await hour).click()
                    flag = false;
                    break;
                }
            }
            if(i == (await dates).length -1){
                flag = false ;
                break;
            }else{
                i++
                await (await dates)[i].scrollIntoView()
                await (await dates)[i].click()
            }
            
        }
    }
    async selectPayment() {
        await (await this.btnRadioPayment).scrollIntoView()
        await (await this.btnRadioPayment).waitForDisplayed()
        expect(await this.btnRadioPayment).toExist()
        var radioButtons = (await this.btnRadioPayment).$$('div.sf-radio > label.sf-radio__container')
        var leng = (await radioButtons).length
        var optionNumber = await this.getRandom(leng)
        utils.SelectedPayment = await (await radioButtons)[optionNumber].getText()
        await (await radioButtons)[0].click()
    }
    async checkSpecialPrice() {
        if (GlobalFunctions.promoInCart()) {
            expect(await this.labelPromoCode).toBeDisplayed()
            expect(await this.promoDiscount).toExist()
        }
    }
    async getRandom(leng) {
        return parseInt((Math.random() * (leng - 1)))
    }
    async getOption(option) {
        if (option == 'debit') {
            return 0
        } else if (option == 'aeropay') {
            return 1
        } else {
            return 2
        }
    }
    async checkContinueButton(flag) {
        if (driver.capabilities.platformName == 'windows') {
            await (await this.btnContinue).scrollIntoView()
            await (await this.btnContinue).waitForDisplayed()
            if (flag == true) {
                expect(await this.btnContinue).toBeEnabled()
            } else {
                expect(await this.btnContinue).toBeDisabled()
            }
        }else{
            await (await this.btnContinueMobile).scrollIntoView()
            await (await this.btnContinueMobile).waitForDisplayed()
            if (flag == true) {
                expect(await this.btnContinueMobile).toBeEnabled()
            } else {
                expect(await this.btnContinueMobile).toBeDisabled()
            }
        }
        
    }
    async clickContinueButton() {
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
        if (driver.capabilities.platformName == 'windows') {
            await (await this.btnContinue).waitForClickable()
            await (await this.btnContinue).click()
        }else{
            await (await this.btnContinueMobile).waitForClickable()
            await (await this.btnContinueMobile).click()
        }
    }
    async clickPromoCode() {
        await (await this.btnPromoCode).scrollIntoView()
        await (await this.btnPromoCode).click()
    }
    async enterPromoCode() {
        await (await this.inputPromoCode).scrollIntoView()
        await (await this.inputPromoCode).waitForDisplayed()
        await (await this.inputPromoCode).setValue(utils.promoCode)
    }
    async promoDiscountAssertion() {
        await (await this.promoDiscount).scrollIntoView()
        await (await this.promoDiscount).waitForDisplayed()
        expect(await this.promoDiscount).toExist()
    }
    async promoCodeAssertion() {
        expect(await this.labelPromoCode).toBeDisplayed()
        expect(await this.promoDiscount).toExist()
    }
    async deliveryDiscountAssertion() {
        if(utils.DiscountedDeliverHour < 0 ){
            expect(await this.labelPromoCode).toBeDisplayed()
            expect(await this.deliveryDiscountLabel).toExist()
        }
        
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('checkout');
    }

}

module.exports = new CheckoutPage();
