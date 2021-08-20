//[class='mobile-top mb-2'] .sf_heading__title
const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetail extends Page {
    /**
     * define selectors using getter methods
     */
    get productHeader() { return $("div.m-product-short-info > div.mobile-top.mb-2 > div > header") }
    get brandLabel() { return $('div.m-product-short-info > div.a-brand') }
    get detailInfo() { return $('div.m-product-short-info > div.m-product-additional-info') }
    get productPrice() { return $('.a-product-price.sf-price--big.sub-price') }
    get infoModule() { return $('.flex-wrap.justify-center') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async productHeaderAssertion() {
        await (await this.productHeader).waitForDisplayed()
        expect(await this.productHeader).toBeDisplayed()
        console.log(await browser.getUrl())
    }
    async productDetailsAssertion() {
        await (await this.productHeader).waitForDisplayed()
        await (await this.productHeader).scrollIntoView()
        expect(await this.productHeader).toExist()
        expect(await this.brandLabel).toExist()
        expect(await this.detailInfo).toExist()
        console.log(await browser.getUrl())
    }
    async priceAssertion() {
        await (await this.productPrice).waitForDisplayed()
        expect(await this.productPrice).toExist()
        console.log(await (await this.productPrice).getText())
    }
    async infoModuleAssertion() {
        await (await this.infoModule).waitForDisplayed()
        expect(await this.infoModule).toExist()
        var cards = (await this.infoModule).$$('div.w-full')
        console.log((await cards).length)
        for (let i = 0; i < (await cards).length; i++) {
            expect(await (await cards)[i].$$('div.font-light')).toBeDisplayed()
            expect(await (await cards)[i].$$('div.flex.items-center')).toBeDisplayed()
        }
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('product');
    }

}

module.exports = new ProductDetail();
