const { reverse } = require('lodash');
const { default: browser } = require('webdriverio/build/commands/browser');
const utils = require('../utils/utils');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnModalAgeYes() { return $('.btn.btn--primary.btn--regular.btn--without-padding') }
    get amuseLogo() { return $('#amuseHeader > div > div > header > a') }
    get amuseLogoFooter() { return $('.m-logo__image') }
    get btnSearchNavbar() { return $('[class="a-search-icon p-1 mx-2 rounded-full lg\:block cursor-pointer o-header__search hidden"]') }
    get btnLoginNavbar() { return $('.btn--with-padding') }
    get btnProfile() { return $('.account-button.account-button--logged-in.cursor-pointer.p-1.rounded-full') }
    get btnloginModaClose() { return $('.sf-modal__close') }
    get btnCart() { return $('.o-header__icons > button:nth-child(2)') }
    get btnShopNavbar() { return $('a[href="/shop"]') }
    get btnDealsNavbar() { return $('a[href="/deals"]') }
    get btnBrandsNavbar() { return $('a[href="/brands"]') }
    get btnReferralsNavbar() { return $('a[href="/referrals"]') }
    get footerDiv() { return $('.o-footer__container') }
    get footerSocialMedia() { return $('#viewport > div.o-footer > div > div > div > div.mt-12 > div.mt-10 > div.flex') }
    get footerLinks() { return $('#viewport > div.o-footer > div > div > div > div.grid > div') }

    //login modal 
    get loginModal() { return $('.sf-modal__container') }
    get amuseLogoModal() { return $('div.sf-modal__container > div.sf-modal__content > div > img') }
    get emailLabel() { return $('div:nth-of-type(1) > div.sf-input__wrapper > label.font-medium') }
    get emailInput() { return $('#emailOrPhone') }
    get passwordLabel() { return $('div:nth-of-type(2) > div.sf-input__wrapper > label.font-medium') }
    get passwordInput() { return $('#password') }
    get checkBox() { return $('div.sf-checkbox__checkmark') }
    get checkBoxLabel() { return $('div.sf-checkbox__label') }
    get btnResetPassword() { return $('form .btn.btn--regular.btn--secondary.btn--without-padding') }
    get btnLogin() { return $('.btn.btn--primary.btn--regular.btn--without-padding') }
    get signUpLink() { return $('.m-login .text-center') }
    get loaderSpinner() { return $('div.m-loader') }
    //location box
    get locationBox() { return $('.a-address-search') }
    get locationDiv() { return $('.m-select-location') }
    get logoLocationDiv() { return $('[class="m-modal-logo mb-10"]') }
    get inputLocationDiv() { return $('#map') }
    get mapsDiv() { return $('body > div.pac-container.pac-logo.hdpi') }//
    get mapsDivTest() { return $('.pac-item-query > .pac-matched') }
    get shippingLocation() { return $('.m-shipping-location') }
    get deliveryAddress() { return $('.m-shipping-location__scroll > div:nth-of-type(2) > button:nth-of-type(1)') }

    //products 
    get productImage() { return $('#home > div > div:nth-child(3) > div:nth-child(2) > div > div > div > a') }
    get productLabel() { return $(".content-section--margin-bottom-m:nth-of-type(3) [class='text-lg tracking-tighter leading-none mb-5']") }


    //mobile
    
    get btnShopMobile() { return $('.sf-bottom-navigation > div:nth-of-type(1)') }
    get btnDealsMobile() { return $('.sf-bottom-navigation > div:nth-of-type(2)') }
    get btnSearchMobile() { return $('.sf-bottom-navigation > div:nth-of-type(3)') }
    get inputSearchMobile() { return $('.sf-search-bar__input') }
    get btnProfileMobile() { return $('.sf-bottom-navigation > div:nth-of-type(4)') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async pageLoadWait() {
        await browser.waitUntil(async function () {
            const state = await browser.execute(async function () {
                return document.readyState;
            });
            //console.log("state:" + state)
            return state === 'complete';
        },
            {
                timeout: 60000, //60secs
                timeoutMsg: 'Oops! Check your internet connection'
            });
    }

    async logoAssertionElement(element, logo = 'login') {
        if ((await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({reverse: true})
        }
        await (await element).waitForDisplayed()
        if ((await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({reverse: true})
        }
        //await browser.saveElement((await this.amuseLogo), 'logo')
        //expect(await browser.checkElement((await element), logo, {})).toEqual(0)
    }
    async logoAssertion() {
        await this.logoAssertionElement(this.amuseLogo)
    }
    //navbar functions
    async mobileNavBarAssertion() {
        await (await this.btnLoginNavbar).waitForDisplayed()
        await expect(await this.btnLoginNavbar).toBeClickable()
        await (await this.btnCart).waitForDisplayed()
    }
    async mobileNavbarRedirect(item) {
        var attribute 
        switch (item) {
            case "shop":
                await (await this.btnShopMobile).click()
                expect(this.btnShopMobile).toHaveAttributeContaining('class', 'active')
                break;

            case "deals":
                await (await this.btnDealsMobile).click()
                break;

            case "search":
                await (await this.btnSearchMobile).click()
                break;

            case "profile":
                await (await this.btnProfileMobile).click()
                break;
            default:
                break;
        }
    }
    async mobileUrlAssertion(path) {
        if(path == 'search' ){
            await (await this.inputSearchMobile).waitForDisplayed()
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        }else if(path == 'profile' ){
            await this.loginModalAssertion()
        }else{
            await expect(browser).toHaveUrlContaining(browser.config.baseUrl + path)
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        }
    }
    
    //end of navbar functions

    async acceptModal() {
        await (await this.btnModalAgeYes).waitForDisplayed()
        await (await this.btnModalAgeYes).click()
        await (await this.btnModalAgeYes).waitForDisplayed({ reverse: true })
    }
    async loginClickButton() {
        await (await this.btnLoginNavbar).waitForDisplayed()
        await (await this.btnLoginNavbar).click()
    }
    async loginModalAssertion() {
        await (await this.loginModal).waitForDisplayed()
        expect(await this.loginModal).toExist()
        expect(await this.amuseLogoModal).toExist()
        expect(await this.emailLabel).toExist()
        await expect(await this.emailLabel).toHaveTextContaining('Email or mobile phone number')
        expect(await this.emailInput).toExist()
        expect(await this.passwordLabel).toExist()
        await expect(await this.passwordLabel).toHaveTextContaining('Password')
        expect(await this.passwordInput).toExist()
        expect(await this.checkBox).toExist()
        expect(await this.checkBoxLabel).toExist()
        await expect(await this.checkBoxLabel).toHaveTextContaining('Remember me')
        expect(await this.btnResetPassword).toExist()
        expect(await this.btnLogin).toExist()
        expect(await this.btnResetPassword).toBeClickable()
        expect(await this.btnLogin).toExist()
        expect(await this.signUpLink).toExist()
        //await this.loginAssertionLogo()

    }
    async loginAssertionLogo() {
        await this.logoAssertionElement(this.amuseLogoModal, 'logoLogin')
    }
    async setPassword() {
        await this.passwordInput.setValue(utils.ValidEmailPassword);
    }
    async loginClick() {
        await (await this.btnLogin).click()
    }
    async setEmail() {
        await this.emailInput.setValue(utils.ValidEmail);
    }
    async checkLoggedUser() {
        await (await this.btnloginModaClose).waitForDisplayed({ reverse: true })
        expect(await this.btnProfile).toBeClickable()
        expect(await this.btnProfile).toExist()
    }

    async loginModalClose() {
        await (await this.btnloginModaClose).click()
        await (await this.btnloginModaClose).waitForDisplayed({ reverse: true })
    }
    //footer functions
    async footerAssertion() {
        (await this.footerDiv).scrollIntoView()
        await (await this.footerDiv).waitForDisplayed()
        expect(await this.footerDiv).toExist()
    }
    async footerAssertionLogo() {
        (await this.amuseLogoFooter).scrollIntoView()
        await this.logoAssertionElement(this.amuseLogoFooter)
    }
    async footerSocialMediaAssertion() {
        await (await this.footerSocialMedia).waitForDisplayed()
        expect(await this.footerSocialMedia).toExist()
        var socialMediaLinks = (await this.footerSocialMedia).$$('a')
        const socialMedia = ['facebook', 'instagram', 'twitter']
        for (let i = 0; i < (await socialMediaLinks.length); i++) {
            expect(await socialMediaLinks[i]).toHaveLinkContaining(socialMedia[i])
        }
    }
    async footerLiknsAssertion() {
        (await this.footerSocialMedia).scrollIntoView()
        browser.pause(3000)
        expect(await this.footerLinks).toExist()
        var socialMediaLinks = (await this.footerLinks).$$('div')
        var optionsList
        for (var i = 0; i < (await socialMediaLinks.length); i++) {
            await expect(await (await socialMediaLinks[i]).$('h4')).toExist()
            await expect(await (await socialMediaLinks[i]).$('h4')).toBeClickable()
            optionsList = await (await socialMediaLinks[i]).$$('li')
            for (let j = 0; j < (await optionsList.length); j++) {
                (await optionsList[j]).scrollIntoView()
                await expect(await optionsList[j]).toExist()
                await expect(await optionsList[j]).toBeClickable()
            }
        }
    }
    //end of footer functions


    //location box functions
    async clickLocationBox() {
        await (await this.locationBox).waitForDisplayed()
        await (await this.locationBox).click()
    }
    async assertLocationBoxModal() {
        await (await this.logoLocationDiv).waitForDisplayed()
        await (await this.inputLocationDiv).waitForDisplayed()
        //await this.locationBoxLogoAssertion()
    }
    async locationBoxLogoAssertion() {
        await this.logoAssertionElement(this.logoLocationDiv, 'logoLogin')
    }
    async inputLocation() {
        await (await this.inputLocationDiv).setValue('11114')
        await (await this.inputLocationDiv).addValue(' Wright Road ')
    }
    async checkMap() {
        await (await this.mapsDiv).waitForDisplayed()
    }
    async clickLocation() {
        await (await this.mapsDivTest).click()
    }
    async checkAvailability() {
        await (await this.logoLocationDiv).waitForDisplayed({reverse : true })
    }
    async cartEnabled() {
        expect(await this.btnCart).toBeEnabled()
        expect(await this.btnCart).toBeClickable()
    }
    async selectAddress() {
        expect(await this.shippingLocation).toBeEnabled()
        expect(await this.deliveryAddress).toBeEnabled()
        await (await this.deliveryAddress).click()
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({reverse: true})
        }
        await (await this.deliveryAddress).click()
        await (await this.shippingLocation).waitForDisplayed({reverse:true})
    }
    //product functions
    async clickOnProduct() {
        await (await this.productLabel).waitForDisplayed()
        await (await this.productLabel).scrollIntoView()
        await (await this.productImage).waitForDisplayed()
        await (await this.productImage).click()
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
