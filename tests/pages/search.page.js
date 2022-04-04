const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() { return $('.sf-search-bar__input') }
    get btnSearch() { return $('.btn.btn--regular.btn--secondary') }
    get mostSearchedSection() { return $('.m-search-panel-suggestions') }
    get labelMostSearchedSection() { return $('h6[class="mb-4 md:mb-5 text-fontBase lg:text-xs leading-none tracking-smaller lg:tracking-small"]') }
    get searchPanelResults() { return $('.m-search-panel-results') }
    get searchResults() { return $('.sf-list.classifications') }
    get searchItems() { return $('.sf-list.products') }
    get firstProduct() { return $('.sf-list.products  > .sf-list__item:nth-of-type(1) > div.a-search-result-list-product > a') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickableAssertion() {
        await (await this.btnSearch).waitForDisplayed()
        expect(await this.btnSearch).toBeClickable()
    }
    async inputSearchAssertion() {
        await (await this.inputSearch).waitForDisplayed()
        expect(await this.inputSearch).toExist()
    }

    async btnSearchAssertion() {
        expect(await this.btnSearch).toExist()
    }

    async mostSearchedSectionAssertion() {
        expect(await this.mostSearchedSection).toExist()
    }

    async labelMostSearchedSectionAssertion() {
        expect(await this.labelMostSearchedSection).toExist()
    }

    async searchForAResult(query) {
        await (await this.inputSearch).waitForDisplayed()
        await (await this.inputSearch).click()
        expect(await this.labelMostSearchedSection).toExist()
        await (await this.inputSearch).setValue(query)
    }
    async clickEnterKey() {
        if (driver.capabilities.platformName == 'windows') {
            driver.keys(['Enter'])
        }else{
            driver.sendKeyEvent('Enter')
        }
    }

    async searchFoundAssert(query) {
        await (await this.searchPanelResults).waitForDisplayed()
        expect(await this.searchPanelResults).toBeExisting()
        await (await this.searchResults).waitForDisplayed()
        var cards = (await this.searchResults).$$('.sf-list__item')
        for (let i = 0; i < (await cards).length; i++) {
            expect((await cards)[i]).toHaveTextContaining(query)
        }
        var cards2 = (await this.searchItems).$$('.sf-list__item')
        for (let i = 0; i < (await cards2).length; i++) {
            expect((await cards2)[i]).toHaveTextContaining(query)
        }
    }
    async clickResult() {
        await (await this.searchItems).scrollIntoView()
        await (await this.firstProduct).waitForDisplayed()
        await (await this.firstProduct).click()
    }
    async checkSearch () {
        await (await this.btnSearch).waitForDisplayed({reverse: true})
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('search');
    }

}

module.exports = new SearchPage();
