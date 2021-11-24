const Page = require('./page');
const utils = require('../utils/utils');
const GlobalFunctions = require('../utils/GlobalFunc');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogout () { return $('div:nth-of-type(2) > .sf-content-pages__list.sf-list .duration-150.ease-in-out.fill-current') }
    get btnBasicInfo () { return $('div:nth-of-type(1) > .sf-content-pages__list > li:nth-of-type(1) > .sf-content-pages__menu.sf-menu-item') }
    get btnOrderHistory () { return $('li:nth-of-type(2) > .py-4.sf-content-pages__menu.sf-menu-item') }
    get menuProfile () { return $('.sf-list.sf-content-pages__list') }
    get microcart () { return $('.o-microcart') } //
    get oldOrder () { return $('.sf-accordion-item') }
    get btnHelp () { return $('.btn.btn--regular.btn--secondary.btn--with-padding.mr-4.text-center.w-full') }
    get btnReceipt () { return $('[class] .btn--regular:nth-of-type(2)') }
    get btnOrderPurchase () { return $('.btn.btn--regular.btn--secondary.btn--with-padding.ml-auto.text-center.w-full') }
    get receiptDiv () { return $('#order-tracking > div.o-order-receipt') }
    get orderSummary () { return $('#order-tracking > div > div.mt-4 > div.pb-6.border-b-2.border-grey-medium') }
    get btnBackArrow () { return $('.p-2.text-fontBase') }
    get btnProfileBackArrow () { return $("button[role='button']") }
    get basicInfoDiv () { return $('.o-my-account-profile.w-full') }
    get subtotalLabel () { return $('.o-order-receipt__subtotal.property.sf-property> .sf-price > .sf-price__value') }
    get recipientName () { return $("[class='flex flex-wrap md\:mb-10'] [class='w-full md\:w-1\/2 pb-6 md\:pb-0 mb-6 md\:mb-10 border-b-2 md\:border-b-0 border-grey-medium']:nth-of-type(1) div") }
    get recipientAddress () { return $('.not-italic > div:nth-of-type(1)') }
    get recipientDeliveryWindow () { return $("[class] .flex-wrap:nth-of-type(4) [class='w-full md\:w-1\/2 pb-6 md\:pb-0 mb-6 md\:mb-10 border-b-2 md\:border-b-0 border-grey-medium'] div") }
    get totalLabel () { return $('.leading-none.text-fontBase.text-lg.tracking-tighter') }
    get disclaimerDiscount () { return $("[class='text-sm font-bold mt-4 md\:mt-5']") }
    get disclaimerSavings() { return $("[class='flex items-center mb-2 lg\:mb-3']") }
    //


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
        await (await this.menuProfile).scrollIntoView()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await this.btnOrderHistory).waitForDisplayed()
        await (await this.btnOrderHistory).click();
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
    }
    async clickOldOrder () {
        await (await this.oldOrder).waitForDisplayed()
        var cards = (await this.oldOrder).$$('.cursor-pointer.flex.items-center.justify-between')
        console.log((await cards).length)
        await (await cards)[0].scrollIntoView()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await cards)[0].click();
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
    }
    async expandedOrderAssertion () {
        await (await this.btnHelp).waitForDisplayed()
        expect(await this.btnHelp).toExist()
        expect(await this.btnReceipt).toExist()
        expect(await this.btnOrderPurchase).toExist()
    }
    async clickRecipt () {
        await (await this.btnHelp).waitForDisplayed()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await this.btnReceipt).click()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
    }
    async receiptAssertion () {
        const userInfo = await GlobalFunctions.getRecipient()
        await (await this.receiptDiv).waitForDisplayed()
        expect (await this.receiptDiv).toExist()
        expect(await this.subtotalLabel).toHaveTextContaining( utils.lastSubtotal)
        expect(await this.recipientName).toHaveTextContaining(userInfo.firstname)
        expect(await this.recipientAddress).toHaveTextContaining(await GlobalFunctions.getAddress())
        expect(await this.totalLabel).toHaveTextContaining( utils.lastTotal)
        expect (await this.orderSummary).toExist()
    }
    async deliveryWindowAssertion () {
        await (await this.receiptDiv).waitForDisplayed()
        expect (await this.receiptDiv).toExist()
        await (await this.recipientDeliveryWindow).scrollIntoView()
        expect(await this.recipientDeliveryWindow).toHaveTextContaining( utils.SelectedDeliverHour)
        expect(await this.recipientDeliveryWindow).toHaveTextContaining( utils.SelectedDeliverDate)
    }
    async disclaimerDiscountAssertion () {
        await (await this.disclaimerDiscount).scrollIntoView()
        await (await this.disclaimerDiscount).waitForDisplayed()
        expect (await this.disclaimerDiscount).toExist()
        await (await this.disclaimerSavings).scrollIntoView()
        expect (await this.disclaimerSavings).toExist()
    }
    async clickBack () {
        await (await this.btnBackArrow).scrollIntoView()
        await (await this.btnBackArrow).waitForDisplayed()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await this.btnBackArrow).click();
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
    }
    async clickBackProfile () {
        await (await this.btnProfileBackArrow).scrollIntoView()
        await (await this.btnProfileBackArrow).waitForDisplayed()
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "display: none");
        })
        await (await this.btnProfileBackArrow).click();
        await driver.execute(() => {
            return document.querySelector('#amuseHeader').setAttribute('style', "");
        })
    }
    async btnOrderAgain () {
        await (await this.btnOrderPurchase).waitForDisplayed()
        await (await this.btnOrderPurchase).click();
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('profile');
    }
}

module.exports = new ProfilePage();
