const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearch () { return $('.sf-search-bar__input') }
    get btnSearch () { return $('button[class="inline-block font-medium focus:outline-none transition duration-150 ease-in-out hidden lg:block ml-3 btn--with-padding btn--secondary btn--regular"]') }
    get mostSearchedSection () { return $('.m-search-panel-suggestions') }
    get labelMostSearchedSection () { return $('h6[class="mb-4 md:mb-5 text-fontBase lg:text-xs leading-none tracking-smaller lg:tracking-small"]') }
    get searchPanelResults () { return $('.m-search-panel-results') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async inputSearchAssertion () {
        await expect(await this.inputSearch).toExist()
    }

    async btnSearchAssertion () {
        await expect(await this.btnSearch).toExist()
    }

    async mostSearchedSectionAssertion () {
        await expect(await this.mostSearchedSection).toExist()
    }

    async labelMostSearchedSectionAssertion () {
        await expect(await this.labelMostSearchedSection).toExist()
    }

    async searchForAResult () {
        await (await this.inputSearch).setValue("Kush")
    }

    async searchFoundAssert () {
        await expect(await this.searchPanelResults).toBeExisting()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }

}

module.exports = new SearchPage();
