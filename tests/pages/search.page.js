const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch() { return $('.sf-search-bar__input') }
    get btnSearch() { return $('.btn.btn--regular.btn--secondary.btn--with-padding.hidden') }
    get mostSearchedSection() { return $('.m-search-panel-suggestions') }
    get labelMostSearchedSection() { return $('h6[class="mb-4 md:mb-5 text-fontBase lg:text-xs leading-none tracking-smaller lg:tracking-small"]') }
    get searchPanelResults() { return $('.m-search-panel-results') }
    get searchResults() { return $('.sf-list.classifications') }
    get searchItems() { return $('.sf-list.products') }
    get firstProduct() { return $('ul.sf-list.products > li:nth-child(1) > div > div') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickableAssertion() {
        await (await this.btnSearch).waitForDisplayed()
        expect(await this.btnSearch).toBeClickable()
    }
    async inputSearchAssertion() {
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

    async searchForAResult() {
        await (await this.inputSearch).click()
        expect(await this.labelMostSearchedSection).toExist()
        await (await this.inputSearch).setValue("Sativa")
    }
    async clickEnterKey() {
        driver.sendKeyEvent('Enter')
        console.log(await driver.isKeyboardShown())
    }

    async searchFoundAssert() {
        await (await this.searchPanelResults).waitForDisplayed()
        expect(await this.searchPanelResults).toBeExisting()
        await (await this.searchResults).waitForDisplayed()
        var cards = (await this.searchResults).$$('.sf-list__item')
        for (let i = 0; i < (await cards).length; i++) {
            expect((await cards)[i]).toHaveTextContaining("Sativa")
        }
        var cards2 = (await this.searchItems).$$('.sf-list__item')
        for (let i = 0; i < (await cards2).length; i++) {
            expect((await cards2)[i]).toHaveTextContaining("Sativa")
        }
    }
    async clickResult() {
        await (await this.firstProduct).scrollIntoView()
        await (await this.firstProduct).click()
    }
    async checkSearch () {
        await (await this.btnSearch).waitForDisplayed({reverse: true})
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }

}

module.exports = new SearchPage();
