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
    get productHeader() { return $('header[class="sf_heading sf_heading--no-underline sf_heading--left sf_heading sf_heading--border"]') }
    get brandLabel() { return $('div.m-product-short-info > div.a-brand') }
    get detailInfo() { return $('div.m-product-short-info > div.m-product-additional-info') }
    get productPrice() { return $('.a-product-price.sf-price--big.sub-price') }
    get infoModule() { return $('.flex-wrap.justify-center') }
    get productImage() { return $('.panzoom-img') } //
    get caroselDiv() { return $('.slick-dots') }
    get btnAddProduct() { return $('div[class="sf-quantity-selector w-full border-2 border-primary rounded-lg p-2"] > div:nth-child(3) > button') }
    get btnDecreaseProduct() { return $('div[class="sf-quantity-selector w-full border-2 border-primary rounded-lg p-2"] > div:nth-child(1) > button') }
    get amountInput() { return $('div[class="sf-quantity-selector w-full border-2 border-primary rounded-lg p-2"] > div:nth-child(2) > input') }
    get btnAddCart() { return $(".m-product-add-to-cart > .a-add-to-cart.btn.btn--big.btn--primary.btn--with-padding") }
    get limitModal() { return $('.sf-modal__content') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password  
     */
    async locationBoxAssertion(page) {
        expect(await this.locationDiv).toExist()
        await (await this.locationDiv).waitForDisplayed()
        expect(await this.locationBox).toExist()
        await (await this.locationBox).waitForDisplayed()
        //expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocation())
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
    async priceSaleAssertion() {
        await (await this.productPrice).waitForDisplayed()
        expect(await (await this.productPrice).$$('.sf-price > .sf-price__value.sf-price__value--old')).toBeDisplayed()
        expect(await (await this.productPrice).$$('.sf-price > .sf-price__value.sf-price__value--special')).toBeDisplayed()
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
        if (dots > 0) {
            for (let i = 0; i < (await dots).length; i++) {
                await (await dots)[i].click()
                expect(browser.checkElement((await this.productImage), 'productImageZoom', {})).not.toEqual(0)
            }
        }
    }
    async increaseProduct() {
        await (await this.locationDiv).scrollIntoView()
        if (await (await this.btnAddCart).isDisplayed()) {
            await (await this.btnAddCart).click()
        }
        await (await this.btnAddProduct).waitForDisplayed()
        expect(await this.btnAddProduct).toExist()
        while (await GlobalFunctions.getSubtotal() < 65 || await (await this.limitModal).isDisplayedInViewport()) {
            await (await this.amountInput).waitForEnabled({ timeout: 10000 })
            await (await this.btnAddProduct).click()
            await browser.pause(2000)
        }
    }
    async decreaseProduct() {
        await (await this.locationDiv).scrollIntoView()
        await (await this.btnDecreaseProduct).waitForDisplayed({ timeout: 10000 })
        expect(await this.btnDecreaseProduct).toExist()
        let amount = parseInt(await (await this.amountInput).getValue())
        await (await this.btnDecreaseProduct).click()
        if (await (await this.amountInput).isDisplayed()){
            expect((await (await this.amountInput).getValue())).toEqual((await (await this.amountInput).getValue()))
        }
        /*while (await (await this.amountInput).isEnabled()) {
            await (await this.amountInput).waitForEnabled()
            await browser.pause(2000)
            await (await this.btnDecreaseProduct).click()
            
        }*/
    }
    async deleteProduct() {
        if (await (await this.amountInput).isDisplayed()){
            while (await (await this.btnDecreaseProduct).isEnabled()) {
                await (await this.btnDecreaseProduct).waitForEnabled()
                await (await this.btnDecreaseProduct).click()
                //await browser.pause(2000)
            }
            await (await this.btnAddCart).waitForDisplayed()
        }
    }
    async addCartAssert() {
        await (await this.btnAddCart).waitForDisplayed()
        expect(await this.btnAddCart).toExist()
    }
    async addCartOneClick() {
        if (await (await this.btnAddCart).isDisplayedInViewport()) {
            await (await this.btnAddCart).click()
        }
    }
    async addCartClick() {
        if (await (await this.btnAddCart).isDisplayedInViewport()) {
            await (await this.btnAddCart).click()
        }else{
            await (await this.btnAddProduct).waitForDisplayed()
            await (await this.btnAddProduct).click()
        }
    }
    async increaseOneProduct() {
        if (await (await this.btnAddCart).isDisplayed()) {
            await (await this.btnAddCart).click()
        }
        await (await this.btnAddProduct).waitForDisplayed()
        expect(await this.btnAddProduct).toExist()
        await (await this.amountInput).scrollIntoView()
        if(await (await this.limitModal).isDisplayedInViewport()){
        }else{
            await (await this.btnAddProduct).click()
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('productDetail');
    }

}

module.exports = new ProductDetail();
