const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BrandsPage extends Page {
    /**
     * define selectors using getter methods
     */
     get locationBox () { return $('.a-address-search') }
     get locationDiv () { return $('.m-select-location') }
     get featuredBrands () { return $("[data-testid] div:nth-of-type(2) [class='flex justify-between items-center mb-5']") }
     get heroImage() { return $('div.m-homepage-hero__image.bg-cover') }
     get lettersBrands() { return $$('.leading-none.text-lg.tracking-tighter') }
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
        expect(await this.locationDiv).toExist()
        await (await this.locationDiv).waitForDisplayed()
        expect(await this.locationBox).toExist()
        await (await this.locationBox).waitForDisplayed() 
        expect(await this.locationBox).toHaveTextContaining(await GlobalFunctions.getLocationUnlogged())
    }
    async featuredBrandsAssertion () {
        await (await this.featuredBrands).scrollIntoView()
        await (await this.featuredBrands).waitForDisplayed()
        expect(await this.featuredBrands).toExist()
    }
    async heroAssertion() {
        await (await this.heroImage).waitForDisplayed()
        expect(await this.heroImage).toExist()
    }
    async alphabetOrderAssertion() {
        var letters =  (await this.lettersBrands)
        var actualLetter = ' '
        for (let i = 1; i < (letters).length; i++) {
            await ((letters)[i]).scrollIntoView()
            expect( (await  (letters)[i].getText()).charCodeAt(0)).toHaveText({gte : actualLetter.charCodeAt(0)})
            actualLetter = await (letters)[i].getText()
        }
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('brands');
    }

}

module.exports = new BrandsPage();
