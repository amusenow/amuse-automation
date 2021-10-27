const Page = require('./page');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ReferralPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignUp() { return $('.btn--secondary') }
    get btnSignIn() { return $('.btn.btn--primary.btn--regular.btn--without-padding') }
    get restrictionsLink() { return $(".duration-150.ease-in-out.inline-block.transition.underline") }
    get btnCopyLink() { return $(".m-referrals-sharing__copy") }
    get labelCopyLink() { return $(".m-referrals-sharing__link") }
    get btnEmail() { return $(".m-referrals-sharing-by-email.mt-12 .btn.btn--primary.btn--regular.btn--without-padding") }
    get inputEmail() { return $(".email-input__text.flex.ml-2") }
    get btnSend() { return $(".email-button") }
    get btnLearnMore() { return $(".m-referrals-sharing-by-email__learn-more") }
    get dotsDiv() { return $(".slick-dots") }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickSignUp() {
        await (await this.btnSignUp).waitForDisplayed()
        expect(await this.btnSignUp).toBeClickable()
        await this.btnSignUp.click();
    }
    async clickSignIn() {
        await (await this.btnSignIn).waitForDisplayed()
        expect(await this.btnSignIn).toBeClickable()
        await this.btnSignIn.click();
    }
    async clickRestrictionsLink() {
        await (await this.restrictionsLink).waitForDisplayed()
        expect(await this.restrictionsLink).toBeClickable()
        await (await this.restrictionsLink).click();

    }
    async redirectAssertion() {
        expect(driver).toHaveUrlContaining(driver.config.baseUrl + 'referral-program-rules')
    }
    async copyLinkAssertion() {
        if (await (await this.dotsDiv).isExisting()) {
            await (await this.btnCopyLink).waitForClickable()
            expect(await this.btnCopyLink).toBeClickable()
            await (await this.btnCopyLink).click();
            expect(await this.btnCopyLink).toHaveText('Copied')
            utils.referralUrl = await (await this.labelCopyLink).getValue()
        }else if(await (await this.btnCopyLink).isExisting()){
            await (await this.btnCopyLink).waitForClickable()
            expect(await this.btnCopyLink).toBeClickable()
            if(await (await this.btnCopyLink).isDisplayedInViewport()){
                await (await this.btnCopyLink).click();
                expect(await this.btnCopyLink).toHaveText('Copied')
                utils.referralUrl = await (await this.labelCopyLink).getValue()
            }
        }
    }
    async emailButtonAssertion() {
        if (await (await this.dotsDiv).isDisplayedInViewport()) {
            var cards = (await this.dotsDiv).$$('li')
            console.log((await cards).length)
            await (await cards)[length - 1].click()
            await (await this.btnEmail).waitForDisplayed()
            expect(await this.btnEmail).toBeClickable()
            await this.btnEmail.click();
            expect(await this.inputEmail).toBeDisplayed()
            expect(await this.btnSend).toBeDisplayed()
        }else if(await (await this.btnCopyLink).isDisplayedInViewport()){
            await (await this.btnEmail).waitForDisplayed()
            expect(await this.btnEmail).toBeClickable()
            await this.btnEmail.click();
            expect(await this.inputEmail).toBeDisplayed()
            expect(await this.btnSend).toBeDisplayed()
        }

    }
    async learnMoreButtonAssertion() {
        await (await this.btnLearnMore).waitForDisplayed()
        expect(await this.btnLearnMore).toBeClickable()
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('referrals');
    }
}

module.exports = new ReferralPage();
