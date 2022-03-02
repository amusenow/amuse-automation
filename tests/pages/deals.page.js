const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DealsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get locationBox () { return $('.a-address-search') }
     get locationDiv () { return $('.m-select-location') }
     get btnDealsMobile() { return $('div [id="sf-bottom-navigation_Deals"]') }
     get allDealsTitles() { return $('div.product-carousel') }
     get allCarousels() { return $('.scrolling-product') }
     get allLinks() { return $$('.text-fontBase.underline') }
     get storyBlokPage() { return $("[data-testid='storyblok-page']") }
     //
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async locationBoxAssertion () {
        await console.log('pass')
        expect(await this.locationBox).toExist()
        expect(await this.locationBox).waitForDisplayed()
        expect(await this.locationDiv).toExist()
        expect(await this.locationDiv).waitForDisplayed()
    }
    async locationBoxAssertion (page) {
            await console.log('pass')
            await (await this.locationBox).waitForDisplayed() 
            expect(await this.locationBox).toExist()
            await (await this.locationDiv).waitForDisplayed()
            expect(await this.locationDiv).toExist()
            expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocationUnlogged())
    }
    async checkActiveState () {
        expect(this.btnDealsMobile).toHaveAttributeContaining('class', 'active')
    }
    async checkAllModules () {
        console.log('here')
        await driver.pause(7000)
        console.log('here')
        await (await this.storyBlokPage).waitForDisplayed()
        console.log('here')
        var cards = (await this.storyBlokPage).$$('.product-carousel')
        console.log('here')
        console.log("cards", cards)
        for (let i = 0; i < 3; i++) {
            await ((await cards)[i]).scrollIntoView()
            expect((await cards)[i]).toExist()
        }
    }
    async allLinksClick () {
        if(await (await this.allLinks)[0].isExisting()){
            await (await this.allLinks)[0].scrollIntoView()
            //expect(await this.allLinks)[0].toBeClickable()
        }
        
    }
    async seeAllAssertion() {
        await (await this.storyBlokPage).waitForDisplayed()
        var cards = (await this.storyBlokPage).$$('.product-carousel')
        for (let i = 0; i < 3; i++) {
            await ((await cards)[i]).scrollIntoView()
            expect((await cards)[i]).toHaveAttrContaining('href', 'brands')
        }
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('deals');
    }

}

module.exports = new DealsPage();
