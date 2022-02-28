const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartHeader() { return $('.mb-0') }
    get btnCart() { return $('.a-microcart-icon.o-header__microcart') }
    get cartGrid() { return $('.border-b.border-grey-medium') }
    get btnCheckout() { return $('.btn.btn--inverted-primary.btn--regular.btn--without-padding.cart-action.sf-button--full-width') }
    get loaderSpinner() { return $('div.m-loader') }
    get limitModal() { return $('.sf-modal__content') }
    get closeModal() { return $('.sf-modal__close') }
    get input() { return $('div[class="border-t border-b border-grey-medium py-4"] > div:nth-child(1) > div[class="flex flex-col-reverse justify-end md:justify-between items-end w-1/2 sm:flex-row sm:items-start md:w-1/2"] > div:nth-child(1) > div > div > div:nth-child(2) > input') }
    get cartMinimumLabel() { return $('.leading-snug.m-0.text-error.text-xxs.tracking-normal') }
    get subtotalLabel () { return $(".o-microcart__total-price.sf-property > .sf-price") }
    // 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async titleAssertion() {
        await (await this.cartHeader).waitForDisplayed()
        expect(await this.cartHeader).toExist()
    }
    async cartIconAssertion() {
        await (await this.btnCart).waitForDisplayed()
        expect(await this.btnCart).toExist()
        expect(this.btnCart).toHaveAttributeContaining('class', 'active')
    }
    async cartItemtsAssertion() {
        const cart = await GlobalFunctions.getCart()
        await (await this.cartGrid).waitForDisplayed()
        var cards = (await this.cartGrid).$$('div.sf-collected-product')
        console.log((await cards).length)
        for (let i = 0; i < (await cards).length; i++) {
            expect(await (await cards)[i].$$('div.flex.flex-col.justify-between > div.w-auto > div.sf-collected-product__name')).toHaveTextContaining(cart[i].name)
            expect(await (await cards)[i].$$('div.flex.flex-col.justify-between > div.w-auto > .o-microcart__product-brand > div > a.a-brand__link')).toHaveHref(cart[i].path)
            if(cart[i].hasOwnProperty("special_price")){
                expect(await (await cards)[i].$$('div > div.sf-collected-product__price > div.sf-price > .sf-price__value.sf-price__value--old')).toHaveTextContaining(cart[i].price * cart[i].qty)
                expect(await (await cards)[i].$$('div > div.sf-collected-product__price > div.sf-price > .sf-price__value.sf-price__value--special')).toHaveTextContaining(cart[i].special_price * cart[i].qty)
            }else{
                expect(await (await cards)[i].$$('div > div.sf-collected-product__price > div.sf-price > .sf-price__value.sf-price__value')).toHaveTextContaining(cart[i].price * cart[i].qty)
            }
        }
    }
    async btnCheckoutAssertion() {
        await (await this.btnCheckout).waitForDisplayed()
        expect(await this.btnCheckout).toExist()
    }
    async subtotalAssertion() {
        await (await this.subtotalLabel).scrollIntoView()
        await (await this.subtotalLabel).waitForDisplayed()
        expect(await this.subtotalLabel).toExist() 
        if(await GlobalFunctions.promoInCart()){
            expect(await (await this.subtotalLabel).$$('.sf-price__value.sf-price__value--old')).toExist()
            expect(await (await this.subtotalLabel).$$('.sf-price__value.sf-price__value--special')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        }else{
            expect(await (await this.subtotalLabel).$$('.sf-price__value')).toHaveTextContaining(await GlobalFunctions.getSubtotal())
        }
    }
    async btnCheckoutClick() {
        if ((await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.btnCheckout).waitForClickable()
        await (await this.btnCheckout).click()
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
    }
    async modifyQuantity() {
        const cart = await GlobalFunctions.getCart()
        await (await this.input).setValue(cart[0].qty + 1)
        if(await (await this.limitModal).isDisplayedInViewport()){
            await (await this.closeModal).click()
        }
    }
    async assertQuantity() {
        const cart = await GlobalFunctions.getCart()
        var cards = (await this.cartGrid).$$('div.sf-collected-product')
        let total = cart[0].final_price * cart[0].qty
        expect(await (await cards)[0].$$('div.flex.flex-col-reverse > div.sf-collected-product__price')).toHaveTextContaining(total)
    }
    async checkMinimum() {
        await (await this.cartMinimumLabel).waitForDisplayed()
        expect(await this.cartMinimumLabel).toHaveTextContaining('You haven’t met the $65 minimum.')
    }
    async checkMinimumCheckout() {
        await (await this.btnCheckout).waitForDisplayed()
        expect(await this.btnCheckout).toBeDisabled()
    }
    async limitModalAsserion() {
        expect(await this.limitModal).toBeDisplayed()
        await (await this.closeModal).click()
        await (await this.closeModal).waitForDisplayed({reverse:true})
    
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('brand');
    }

}

module.exports = new CartPage();
