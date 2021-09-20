//[class='mobile-top mb-2'] .sf_heading__title
const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const utils = require('../utils/utils');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductDetail extends Page {
    /**
     * define selectors using getter methods
     */
    get locationBox() { return $('.a-address-search') }
    get locationDiv() { return $('.m-select-location') }
    get productHeader() { return $("div.m-product-short-info > div.mobile-top.mb-2 > div > header") }
    get brandLabel() { return $('div.m-product-short-info > div.a-brand') }
    get detailInfo() { return $('div.m-product-short-info > div.m-product-additional-info') }
    get productPrice() { return $('.a-product-price.sf-price--big.sub-price') }
    get infoModule() { return $('.flex-wrap.justify-center') }
    get productImage() { return $('.panzoom-img') } //
    get caroselDiv() { return $('.slick-dots') }
    get btnAddProduct() { return $(".border-2 > div:nth-of-type(2) > button") }
    get btnDecreaseProduct() { return $(".border-2 > div:nth-of-type(1) > button") }
    get amountInput() { return $(".border-2 > .text-center") }
    get btnAddCart() { return $(".sf-button--full-width.btn--with-padding") }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password  
     */
    async locationBoxAssertion(page) {
        expect(await this.locationDiv).toExist()
        await (await this.locationDiv).waitForDisplayed()
        expect(await this.locationBox).toExist()
        await (await this.locationBox).waitForDisplayed()
        expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocation())
    }
    async productHeaderAssertion() {
        await (await this.productHeader).waitForDisplayed()
        expect(await this.productHeader).toBeDisplayed()
    }
    async productDetailsAssertion() {
        await (await this.productHeader).waitForDisplayed()
        await (await this.productHeader).scrollIntoView()
        expect(await this.productHeader).toExist()
        expect(await this.productHeader).toHaveTextContaining(utils.SelectedProduct.name)
        expect(await this.brandLabel).toExist()
        expect(await this.brandLabel).toHaveTextContaining(utils.SelectedProduct.brand)
        expect(await this.detailInfo).toExist()
    }
    async priceAssertion() {
        await (await this.productPrice).waitForDisplayed()
        expect(await this.productPrice).toExist()
        expect(await this.productPrice).toHaveTextContaining(utils.SelectedProduct.price)
    }
    async infoModuleAssertion() {
        await (await this.infoModule).waitForDisplayed()
        expect(await this.infoModule).toExist()
        var item = (await this.infoModule).$$('div.w-full')
        for (let i = 0; i < (await item).length; i++) {
            expect(await (await item)[i].$$('div.font-light')).toBeDisplayed()
            expect(await (await item)[i].$$('div.flex.items-center')).toBeDisplayed()
        }
    }
    async zoomImage() {
        await (await this.productImage).waitForDisplayed()
        expect(await this.productImage).toExist()
        await (await this.productImage).scrollIntoView()
        browser.saveElement((await this.productImage), 'productImageZoom')
        browser.touchDoubleClick(await this.productImage);
        browser.touchDoubleClick(await this.productImage);
    }
    async zoomCheck() {
        expect(browser.checkElement((await this.productImage), 'productImageZoom', {})).not.toEqual(0)
    }
    async caroselCheck() {
        expect(browser.checkElement((await this.productImage), 'productImageZoom', {})).not.toEqual(0)
        var dots = (await this.caroselDiv).$$('button')
        console.log((await dots).length)
        for (let i = 0; i < (await dots).length; i++) {
            await (await dots)[i].click()
            expect(browser.checkElement((await this.productImage), 'productImageZoom', {})).not.toEqual(0)
        }
    }
    async increaseProduct() {
        if (await (await this.btnAddCart).isDisplayed()) {
            await (await this.btnAddCart).click()
        }
        await (await this.btnAddProduct).waitForDisplayed()
        expect(await this.btnAddProduct).toExist()
        let amount = parseInt(await (await this.amountInput).getValue())
        console.log(amount + " increase")
        await (await this.btnAddProduct).click()
        amount = amount + 1
        console.log(amount + " increase2")
        console.log(await (await this.amountInput).getValue())
        await expect((await (await this.amountInput).getValue())).toEqual((await (await this.amountInput).getValue()))

    }
    async decreaseProduct() {
        await (await this.btnDecreaseProduct).waitForDisplayed()
        expect(await this.btnDecreaseProduct).toExist()
        let amount = parseInt(await (await this.amountInput).getValue())
        await (await this.btnDecreaseProduct).click()
        console.log(amount + "decrease")
        amount = amount - 1
        expect((await (await this.amountInput).getValue())).toEqual((await (await this.amountInput).getValue()))
        while (await (await this.amountInput).getValue() > 1) {
            console.log(await (await this.amountInput).getValue())
            amount = amount - 1
            await (await this.btnDecreaseProduct).click()
        }
    }
    async deleteProduct() {
        console.log(await (await this.amountInput).getValue())
        await (await this.btnDecreaseProduct).click()

    }
    async addCartAssert() {
        await (await this.btnAddCart).waitForDisplayed()
        expect(await this.btnAddCart).toExist()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('productDetail');
    }

}

module.exports = new ProductDetail();
