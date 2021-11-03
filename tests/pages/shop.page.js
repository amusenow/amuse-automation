const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get locationBox() { return $('.a-address-search') }
    get locationDiv() { return $('.m-select-location') }
    get btnSortDiv() { return $('[class="w-1\/2 pl-1"] .btn--without-padding') }//
    get btnShopAll() { return $('button.sb-category-filter-item.sb-category-filter-item--active') }//
    get recommendedOption() { return $('button.m-product-sorting__option.m-product-sorting__option--active') }
    get loaderSpinner() { return $('div.m-loader') } //
    get btnModalClose() { return $('.sf-modal__close') }
    get btnShopAllSection() { return $("button[title='Shop All']") }
    get productGrid() { return $("div.m-category-products > div.m-product-listing") }
    get pageName() { return $(".sf-breadcrumbs__item--last") }
    get btnAddCart() { return $("[position='1']") }
    get microCartDiv() { return $("div.o-microcart__checkout-box") }
    get microCartMessage() { return $(".o-microcart__content") }
    get btnCheckoutMicrocart() { return $(".btn.btn--inverted-primary.btn--regular.btn--without-padding.cart-action") }
    get btnLoadMoreProducts() { return $(".block.duration-150.ease-in-out.font-light.mx-auto") }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async locationBoxAssertion(page) {
        expect(await this.locationDiv).toExist()
        await (await this.locationDiv).waitForDisplayed()
        expect(await this.locationBox).toExist()
        await (await this.locationBox).waitForDisplayed()
        expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocationUnlogged())
    }
    async clickSortBtn() {
        if ((await this.loaderSpinner).isDisplayed()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.btnSortDiv).waitForDisplayed()
        await (await this.locationDiv).scrollIntoView()
        await (await this.btnSortDiv).click()
    }
    async recommendedCheck() {
        await (await this.recommendedOption).waitForDisplayed()
        expect(await this.recommendedOption).toHaveTextContaining('Recommended')
        await (await this.btnModalClose).click()

    }
    async checkShopAll() {
        await (await this.btnShopAll).waitForDisplayed()
        expect(await this.btnShopAll).toHaveTextContaining('Shop All')
    }
    async clickPetSection() {
        await (await this.btnPetSection).waitForDisplayed()
        await (await this.locationDiv).scrollIntoView()
        await (await this.btnPetSection).click()
    }
    async productIteration() {
        expect(await this.btnShopAllSection).toHaveAttributeContaining('class', 'active')
        if ((await this.loaderSpinner).isDisplayed()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.productGrid).waitForDisplayed()
        expect(await this.productGrid).toExist()
        var cards = (await this.productGrid).$$('div.sf-product-card')
        console.log((await cards).length)
        for (let i = 0; i < 3; i++) {
            expect(await (await cards)[i].$$('div.sf-product-card__image-wrapper')).toBeDisplayed()
            expect(await (await cards)[i].$$('.sf-product-card__link')).toBeDisplayed()
            expect(await (await cards)[i].$$('.flex.flex-row.items-center.text-xxs')).toBeDisplayed()
            expect(await (await cards)[i].$$('.a-lab-results.leading-snug.text-grey-darkest.text-xxs')).toBeDisplayed()
            expect(await (await cards)[i].$$('.flex.items-center.justify-between')).toBeDisplayed()
        }
    }
    async addProductToCart() {
        await (await this.btnAddCart).waitForDisplayed()
        await (await this.btnAddCart).click()
    }
    async addToCartDiscountedProduct() {
        await (await this.productGrid).waitForDisplayed()
        expect(await this.productGrid).toExist()
        var flag = true
        while (flag) {
            var cards = (await this.productGrid).$$('.sf-product-card .flex .a-product-price .sf-price__value.sf-price__value--special')
            console.log((await cards).length)
            if((await cards).length == 0){
                await (await this.btnLoadMoreProducts).click()
                if ((await this.loaderSpinner).isDisplayed()) {
                    await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
                }
                var cards = (await this.productGrid).$$('div.sf-product-card')
            }else{
                await ((await cards)[0].scrollIntoView())
                browser.touchScroll(10, 0)
                console.log(await ((await cards)[0]).getText() + " shop page")
                await (await cards)[0].click()
                flag = false
            }
        }
    }
    async addToCheapProduct() {
        await (await this.productGrid).waitForDisplayed()
        expect(await this.productGrid).toExist()
        var cards = (await this.productGrid).$$('div.sf-product-card > div.flex > div > .a-product-price')
        console.log((await cards).length)
        var priceLabel = '', price =0
        for (let i = 0; i < (await cards).length; i++) {
            priceLabel = await ((await cards)[i]).getText()
            price = priceLabel.match(/^$[0-9]+.[0-9]+/)
            if(price < 50){
                await ((await cards)[i].scrollIntoView())
                await (await cards)[i].click()
                break;
            }
        }
    }
    async clickOnProduct() {
        await (await this.productGrid).waitForDisplayed()
        expect(await this.productGrid).toExist()
        var name = (await this.productGrid).$('.sf-product-card:nth-of-type(2) >.sf-product-card__link')
        var classification = (await this.productGrid).$('.sf-product-card:nth-of-type(2) >.flex.flex-row.items-center.text-xxs')
        var brand = (await this.productGrid).$('.sf-product-card:nth-of-type(2) >.a-brand.text-xxs')
        var price = (await this.productGrid).$('.sf-product-card:nth-of-type(2) >.flex.items-center.justify-between')
        utils.SelectedProduct.name = await (await name).getText()
        utils.SelectedProduct.classification = await (await classification).getText()
        utils.SelectedProduct.brand = await (await brand).getText()
        utils.SelectedProduct.price = await (await price).getText()
        await (await name).click()
    }
    async checkMinimumMessage() {
        await (await this.microCartMessage).waitForDisplayed()
        expect(await this.btnShopAll).toHaveTextContaining('$65 minimum')
    }
    async checkMinimumCheckout() {
        await (await this.btnCheckoutMicrocart).waitForDisplayed()
        expect(await this.btnCheckoutMicrocart).toBeDisabled()
    }


    /**
     * overwrite specifc options to adapt it to page object 
     */
    open() {
        return super.open('shop');
    }

}

module.exports = new ShopPage();
