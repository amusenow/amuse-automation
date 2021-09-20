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
    get btnCheckout() { return $('.sf-button--full-width') }
    get loaderSpinner() { return $('div.m-loader') }
    get input() { return $('div.border-t.border-b.border-grey-medium > div:nth-child(1) > div.flex.flex-col-reverse > div:nth-child(1) > div > div > input') }
    get cartMinimumLabel() { return $('.leading-snug.m-0.text-error.text-xxs.tracking-normal') }
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
            console.log(i)
            expect(await (await cards)[i].$$('div.flex.flex-col.justify-between > div.w-auto > div.sf-collected-product__name')).toHaveTextContaining(cart[i].name)
            expect(await (await cards)[i].$$('div.flex.flex-col.justify-between > div.w-auto > .o-microcart__product-brand > div > a.a-brand__link')).toHaveHref(cart[i].path)
            expect(await (await cards)[i].$$('div.flex.flex-col-reverse > div.sf-collected-product__price')).toHaveTextContaining(cart[i].final_price)
        }
    }
    async btnCheckoutAssertion() {
        await (await this.btnCheckout).waitForDisplayed()
        expect(await this.btnCheckout).toExist()
    }
    async btnCheckoutClick() {
        await (await this.btnCheckout).waitForDisplayed()
        await (await this.btnCheckout).click()
        if ((await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
    }
    async modifyQuantity() {
        await (await this.input).setValue(2)
    }
    async assertQuantity() {
        const cart = await GlobalFunctions.getCart()
        var cards = (await this.cartGrid).$$('div.sf-collected-product')
        let total = cart[0].final_price * cart[0].qty
        expect(await (await cards)[0].$$('div.flex.flex-col-reverse > div.sf-collected-product__price')).toHaveTextContaining(total)
    }
    async checkMinimum() {
        await (await this.cartMinimumLabel).waitForDisplayed()
        expect(await this.cartMinimumLabel).toHaveTextContaining('You haven’t met the $50 minimum.')
    }
    async checkMinimumCheckout() {
        await (await this.btnCheckout).waitForDisplayed()
        expect(await this.btnCheckout).toBeDisabled()
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('brand');
    }

}

module.exports = new CartPage();
