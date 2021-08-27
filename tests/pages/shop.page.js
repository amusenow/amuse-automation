const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');

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
    get btnPetSection() { return $("button[title='Pets']") }
    get productGrid() { return $("div.m-category-products > div.m-product-listing") }
    get pageName() { return $(".sf-breadcrumbs__item--last") }
    get btnAddCart() { return $("[position='1']") }
    get microCartDiv() { return $("div.o-microcart__checkout-box") }
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
        await (await this.btnPetSection).waitUntil(async () => {
            return (await (await this.btnPetSection).getAttribute('class')).includes('active')
        }, {
            timeout: 4000,
            timeoutMsg: 'shop all is still selected'
        });
        expect(this.btnPetSection).toHaveAttributeContaining('class', 'active')
        const color = await (await this.btnPetSection).getCSSProperty('color')
        console.log(color)
        if ((await this.loaderSpinner).isDisplayed()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        expect(await this.pageName).toHaveTextContaining('Pets')
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
    

    /**
     * overwrite specifc options to adapt it to page object 
     */
    open() {
        return super.open('shop');
    }

}

module.exports = new ShopPage();
