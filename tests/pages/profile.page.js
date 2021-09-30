const Page = require('./page');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogout () { return $('div:nth-of-type(2) > .sf-content-pages__list.sf-list .duration-150.ease-in-out.fill-current') }
    get btnOrderHistory () { return $('li:nth-of-type(2) > .py-4.sf-content-pages__menu.sf-menu-item') }
    get menuProfile () { return $('.sf-list.sf-content-pages__list') }
    get menuProfile () { return $('.sf-list.sf-content-pages__list') } //
    get oldOrder () { return $('div.sf-content-pages__content > div > div > div > div > div:nth-child(2) > div > div > div > div.flex.items-center') }
    get btnHelp () { return $('.btn.btn--regular.btn--secondary.btn--with-padding.mr-4.text-center.w-full') }
    get btnReceipt () { return $('[class] .btn--regular:nth-of-type(2)') }
    get btnOrderPurchase () { return $('.btn.btn--regular.btn--secondary.btn--with-padding.ml-auto.text-center.w-full') }
    get receiptDiv () { return $('#order-tracking > div.o-order-receipt') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickLogout () {
        await (await this.btnLogout).waitForDisplayed()
        await (await this.btnLogout).click();
    }
    async menuAssertion () {
        await (await this.menuProfile).waitForDisplayed()
        await (await this.menuProfile).scrollIntoView()
        var cards = (await this.menuProfile).$$('.sf-list__item.sf-content-pages__list-item')
        console.log((await cards).length)
        for (let i = 0; i < (await cards).length; i++) {
            expect((await cards)[i]).toBeDisplayed()
            expect((await cards)[i]).toBeClickable()
        }
    }
    async clickOrderHistory () {
        await (await this.btnOrderHistory).waitForDisplayed()
        await (await this.btnOrderHistory).click();
    }
    async clickOldOrder () {
        await (await this.oldOrder).waitForDisplayed()
        await (await this.oldOrder).scrollIntoView()
        await (await this.oldOrder).click();
    }
    async expandedOrderAssertion () {
        await (await this.btnHelp).waitForDisplayed()
        expect(await this.btnHelp).toExist()
        expect(await this.btnReceipt).toExist()
        expect(await this.btnOrderPurchase).toExist()
    }
    async clickRecipt () {
        await (await this.btnHelp).waitForDisplayed()
        await (await this.btnReceipt).click()
    }
    async receiptAssertion () {
        await (await this.receiptDiv).waitForDisplayed()
        expect (await this.receiptDiv).toExist()
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('profile');
    }
}

module.exports = new ProfilePage();
