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
     get btnDealsMobile() { return $('.sf-bottom-navigation > div:nth-of-type(3)') }
     get allDealsTitles() { return $('div.product-carousel') }
     get allCarousels() { return $('.scrolling-product') }
     get allLinks() { return $$('.text-fontBase.underline') }
     //
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async locationBoxAssertion () {
        expect(await this.locationBox).toExist()
        expect(await this.locationBox).waitForDisplayed()
        expect(await this.locationDiv).toExist()
        expect(await this.locationDiv).waitForDisplayed()
    }
    async locationBoxAssertion (page) {
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
        await driver.pause(3000)
        await (await this.allDealsTitles).waitForDisplayed()
        var cards =  await (await this.allDealsTitles).$$('div.flex');
        var cards2 = await  (await this.allDealsTitles).$$('div > div > div.scrolling-product')
        for (let i = 0; i <  cards.length; i++) {
            await (cards[i]).scrollIntoView()
            expect(cards2[i]).toBeDisplayed()
        }
    }
    async allLinksClick () {
        if(await (await this.allLinks)[0].isExisting()){
            await (await this.allLinks)[0].scrollIntoView()
            //expect(await this.allLinks)[0].toBeClickable()
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
