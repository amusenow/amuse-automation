const { reverse } = require('lodash');
const { default: browser } = require('webdriverio/build/commands/browser');
const utils = require('../utils/utils');
const GlobalFunc = require('../utils/GlobalFunc');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get modalAgeYes() { return $('.sf-modal__content') }
    get btnModalAgeYes() { return $('.sf-modal__content .btn.btn--primary.btn--regular.btn--without-padding') }
    get btnCloseAdvertisement() { return $("#amuseNotification button") }
    get amuseLogo() { return $('div [class="sf-header__container"]')}
    get amuseLogoFooter() { return $('.m-logo__image') }
    get btnSearchNavbar() { return $('div [id="sf-bottom-navigation_Search"]') }
    get btnLoginNavbar() { return $('.btn--with-padding') }
    get btnProfile() { return $('.account-button.account-button--logged-in.cursor-pointer.p-1.rounded-full') }
    get btnloginModaClose() { return $('.sf-modal__close') }

    


    get btnCart() { return $('.a-microcart-icon.o-header__microcart') }
    get btnShopNavbar() { return $('div [class="sf-bottom-navigation-item__label sf-bottom-navigation-item--has-margin') }
    get btnDealsNavbar() { return $('div [id="sf-bottom-navigation_Deals"]') }
    get btnBrandsNavbar() { return $('#m-header-navigation_brands') }
    get btnReferralsNavbar() { return $('#m-header-navigation_referrals') }
    get footerDiv() { return $('.o-footer__container') }
    get footerSocialMedia() { return $('#viewport > div.o-footer > div > div > div > div.mt-12 > div.mt-10 > div.flex') }
    get footerLinks() { return $('#viewport > div.o-footer > div > div > div > div.grid > div') }
    get heroImage() { return $('.content-section--margin-bottom-m.content-section--margin-top-m.product-module') }
    get btnHelp() { return $("[class='wrapper-AtBcr u-isActionable u-textLeft u-inlineBlock u-borderNone u-textBold u-textNoWrap Arrange Arrange--middle u-userLauncherColor wrapperMobile-1Ets2']") }

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
    get btnLogin() { return $('.form .flex .btn.btn--primary') }
    get signUpLink() { return $('.m-login .text-center > a') }
    get emailResetInput() { return $(() => document.getElementById('reset_password[emailOrPhone]')) }
    get btnResetEmail() { return $('.m-reset-password .btn.btn--primary.btn--regular.btn--without-padding') }
    get resetModal() { return $('.m-reset-password') }
    get emailLabelResetPassword() { return $('.m-reset-password .text-primary') }
    get btnCloseResetModal() { return $('.m-reset-password .btn') }
    get loaderSpinner() { return $('div.m-loader') }
    get pendingDiv() { return $('.o-pending-orders') }
    //location box
    get locationBox() { return $('.a-address-search') }
    get locationDiv() { return $('.m-select-location') }
    get logoLocationDiv() { return $('[class="m-modal-logo mb-10"]') }
    get confirmLocationModal() { return $('.m-modal-confirm .sf-modal__container') }
    get btnContinueAddress() { return $('.m-modal-confirm .justify-center .btn--without-padding.btn--primary') }
    get inputLocationDiv() { return $('#map') }
    get mapsDiv() { return $('body > div.pac-container.pac-logo.hdpi') }//
    get mapsDivTest() { return $('div:nth-of-type(1) > .pac-item-query > .pac-matched') }
    get shippingLocation() { return $('.m-shipping-location') }
    get deliveryAddress() { return $('.m-shipping-location__scroll > div:nth-of-type(2) > button:nth-of-type(1)') }

    //products 
    get productName() { return $('div:nth-of-type(3) .o-product-card.scrolling-product-card.sf-product-card > .sf-product-card__link > .sf-product-card__title') }
    get productClassification() { return $('div:nth-of-type(3) .o-product-card.scrolling-product-card.sf-product-card > .flex.flex-row.items-center.text-xxs > .classification') }
    get productBrand() { return $('div:nth-of-type(3) .o-product-card.scrolling-product-card.sf-product-card > div:nth-of-type(4) > .a-brand__link') }
    get productWeight() { return $('#home > div > div:nth-child(3) > div:nth-child(2) > div > div > div > div:nth-child(6)') }
    get productPrice() { return $('#home > div > div:nth-child(3) > div:nth-child(2) > div > div > div > div.flex.justify-between.items-center > div > div.a-product-price') }
    get productLabel() { return $(".content-section--margin-bottom-m:nth-of-type(3) [class='text-lg tracking-tighter leading-none mb-5']") }
    get storyBlokPage() { return $("[data-testid='storyblok-page']") }
    get btnPlusProduct() { return $("div:nth-of-type(7) > div:nth-of-type(2) .o-product-card.scrolling-product-card .a-add-to-cart.sf-button") }
    get firstCarousel() { return $(".product-carousel:nth-of-type(2)") }

    //categories
    get categoryModule() { return $('div [id="category"]') }
    //brands
    get brandsModule() { return $('#home > div > div.max-w-screen-xl.mx-auto > div:nth-child(2)') }

    //mobile

    get btnShopMobile() { return $('div[id="sf-bottom-navigation_Shop All"]') }
    get btnDealsMobile() { return $('div[id="sf-bottom-navigation_Deals"]') }
    get btnSearchMobile() { return $('div[id="sf-bottom-navigation_Search"]') }
    get inputSearchMobile() { return $('.sf-search-bar__input') }
    get btnBrandsMobile() { return $('div[id="sf-bottom-navigation_Brands"]') }
    get microCartDiv() { return $("div.o-microcart__checkout-box") }

    // #sf-bottom-navigation_Shop\ All
    //referral
    get btnReferral() { return $("button[title='Learn More']") }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async pageLoadWait() {
        await driver.waitUntil(async function () {
            const state = await driver.execute(async function () {
                return document.readyState;
            });
            return state === 'complete';
        },
            {
                timeout: 60000, //60secs
                timeoutMsg: 'Oops! Check your internet connection'
            });
    }

    async logoAssertion() {
        expect(await this.amuseLogo).toBeClickable()
    }
    //navbar functions
    async mobileNavBarAssertion() {
        await (await this.btnLoginNavbar).waitForDisplayed()
        expect(await this.btnLoginNavbar).toBeClickable()
        await (await this.btnCart).waitForDisplayed()
    }
    async loggedNavBarAssertion() {
        await (await this.btnProfile).waitForDisplayed()
        expect(await this.btnProfile).toBeClickable()
        await (await this.btnCart).waitForDisplayed()
    }
    async navbarRedirect(item) {
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        switch (item) {
            case "shop":
                await (await this.btnShopNavbar).waitForClickable()
                await (await this.btnShopNavbar).click()
                expect(this.btnShopNavbar).toHaveAttributeContaining('class', 'active')
                break;

            case "deals":
                await (await this.btnDealsNavbar).waitForClickable()
                await (await this.btnDealsNavbar).click()
                expect(this.btnDealsNavbar).toHaveAttributeContaining('class', 'active')
                break;

            case "brands":
                await (await this.btnBrandsNavbar).waitForClickable()
                await (await this.btnBrandsNavbar).click()
                expect(this.btnBrandsNavbar).toHaveAttributeContaining('class', 'active')
                break;

            case "referrals":
                await (await this.btnReferralsNavbar).waitForClickable()
                await (await this.btnReferralsNavbar).click()
                await browser.pause(3000)
                expect(this.btnReferralsNavbar).toHaveAttributeContaining('class', 'active')
                break;
            case "search":
                await (await this.btnSearchNavbar).waitForClickable()
                await (await this.btnSearchNavbar).click()
                expect(this.btnSearchNavbar).toHaveAttributeContaining('class', 'active')
            default:
                break;
        }
    }
    async mobileNavbarRedirect(item) {
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        switch (item) {
            case "shop":
                await (await this.btnShopMobile).waitForClickable()
                await (await this.btnShopMobile).click()
                expect(this.btnShopMobile).toHaveAttributeContaining('class', 'active')
                break;

            case "deals":
                await (await this.btnDealsMobile).waitForClickable()
                await (await this.btnDealsMobile).click()
                expect(this.btnDealsMobile).toHaveAttributeContaining('class', 'active')
                break;

            case "search":
                if (await (await this.loaderSpinner).isDisplayedInViewport()) {
                    await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
                }
                await (await this.btnSearchMobile).waitForClickable()
                await (await this.btnSearchMobile).click()
                break;

            case "brands":
                await (await this.btnBrandsMobile).waitForClickable()
                await (await this.btnBrandsMobile).click()
                break;
            default:
                break;
        }
    }
    async mobileUrlAssertion(path) {
        if (path == 'search') {
            await (await this.inputSearchMobile).waitForDisplayed()
            await (await this.amuseLogo).scrollIntoView()
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        } else {
            expect(driver).toHaveUrlContaining(driver.config.baseUrl + '/' + path)
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        }
    }

    //end of navbar functions
    async heroAssertion() {
        if (await (await this.heroImage).isExisting()) {
            await (await this.heroImage).waitForDisplayed()
            expect(await this.heroImage).toExist()
        }
    }
    async heroImageAssertion() {
        if (await (await this.heroImage).isExisting()) {
            await (await this.heroImage).waitForDisplayed()
            expect(await this.heroImage).toBeClickable()
        }
    }

    async acceptModal() {
        await (await this.modalAgeYes).waitForDisplayed({ timeout: 12000 })
        driver.config.cucumberOpts.timeout = 5000
        await (await this.btnModalAgeYes).click()
        await (await this.modalAgeYes).waitForDisplayed({ reverse: true })
    }
    async closeAdvertisement() {
        if (await (await this.btnCloseAdvertisement).isDisplayedInViewport()){
            await (await this.btnCloseAdvertisement).waitForDisplayed()
            await (await this.btnCloseAdvertisement).click()
        }
        
    }
    async loginClickButton() {
        await (await this.btnLoginNavbar).waitForClickable()
        await (await this.btnLoginNavbar).click()
    }
    async profileClickButton() {
        await (await this.btnProfile).waitForClickable()
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.btnProfile).click()
    }
    async loginModalAssertion() {
        await (await this.loginModal).waitForDisplayed()
        expect(await this.loginModal).toExist()
        expect(await this.amuseLogoModal).toExist()
        expect(await this.emailLabel).toExist()
        expect(await this.emailLabel).toHaveTextContaining('Email or mobile phone number')
        expect(await this.emailInput).toExist()
        expect(await this.passwordLabel).toExist()
        expect(await this.passwordLabel).toHaveTextContaining('Password')
        expect(await this.passwordInput).toExist()
        expect(await this.checkBox).toExist()
        expect(await this.checkBoxLabel).toExist()
        expect(await this.checkBoxLabel).toHaveTextContaining('Remember me')
        expect(await this.btnResetPassword).toExist()
        expect(await this.btnLogin).toExist()
        expect(await this.btnResetPassword).toBeClickable()
        expect(await this.btnLogin).toExist()
        expect(await this.signUpLink).toExist()

    }
    async clickResetButton() {
        await (await this.btnResetPassword).waitForClickable()
        await (await this.btnResetPassword).click()
    }
    async resetEmailInput() {
        await (await this.emailResetInput).waitForClickable()
        await (await this.emailResetInput).setValue(utils.ValidEmail);
    }
    async clickResetEmail() {
        await (await this.btnResetEmail).waitForClickable()
        await (await this.btnResetEmail).click()
    }
    async resetModalAssertion() {
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.resetModal).waitForDisplayed()
        expect(await this.emailLabelResetPassword).toHaveTextContaining(utils.ValidEmailPassword)
    }
    async closeResetModalAssertion() {
        await (await this.btnCloseResetModal).click()
        await (await this.resetModal).waitForDisplayed({ reverse: true })
    }

    async setPassword(password = utils.ValidEmailPassword) {
        await (await this.passwordInput).setValue(password);
    }
    async loginClick() {
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await this.btnLogin).click()
        await (await this.btnLogin).waitForDisplayed({ reverse: true })
        if (await (await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
    }
    async setEmail(email = utils.ValidEmail) {
        await (await this.emailInput).setValue(email);
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
    async signUpLinkClick() {
        await (await this.signUpLink).waitForDisplayed()
        await (await this.signUpLink).click()
    }
    //footer functions
    async footerAssertion() {
        await (await this.footerDiv).scrollIntoView()
        await (await this.footerDiv).waitForDisplayed()
        expect(await this.footerDiv).toExist()
    }
    async footerAssertionLogo() {
        await (await this.amuseLogoFooter).scrollIntoView()
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
            expect(await (await socialMediaLinks[i]).$('h4')).toExist()
            expect(await (await socialMediaLinks[i]).$('h4')).toBeClickable()
            optionsList = await (await socialMediaLinks[i]).$$('li')
            for (let j = 0; j < (await optionsList.length); j++) {
                (await optionsList[j]).scrollIntoView()
                expect(await optionsList[j]).toExist()
                expect(await optionsList[j]).toBeClickable()
            }
        }
    }
    //end of footer functions
    async helpButtonAssertion() {
        await (await this.btnHelp).isDisplayed()
    }

    //location box functions
    async clickLocationBox() {
        await (await this.locationBox).waitForClickable()
        await (await this.locationBox).click()
        if (await (await this.inputLocationDiv).isDisplayedInViewport()) {
        } else {
            await (await this.locationBox).waitForClickable()
            await (await this.locationBox).click()
        }
    }
    async assertLocationBoxModal() {
        await (await this.logoLocationDiv).waitForDisplayed()
        await (await this.inputLocationDiv).waitForDisplayed()
    }

    async inputLocation() {
        await (await this.inputLocationDiv).waitForDisplayed()
        await (await this.inputLocationDiv).setValue('11114')
        await (await this.inputLocationDiv).addValue(' Wright Road ')
        await (await this.inputLocationDiv).addValue(' Lynwood ')

    }
    async checkMap() {
        //await (await this.mapsDiv).waitForDisplayed()
        await (await this.mapsDivTest).waitForDisplayed()
        await (await this.mapsDivTest).click()
        if (await (await this.confirmLocationModal).isDisplayedInViewport()) {
            await (await this.confirmLocationModal).waitForDisplayed()
            await (await this.btnContinueAddress).click()
        }
        await (await this.logoLocationDiv).waitForDisplayed({ reverse: true })
    }
    async checkMapUnlogged() {
        //await (await this.mapsDiv).waitForDisplayed()
        await (await this.mapsDivTest).waitForDisplayed()
        await (await this.mapsDivTest).click()
        if (await (await this.confirmLocationModal).isDisplayedInViewport()) {
            await (await this.confirmLocationModal).waitForDisplayed()
            await (await this.btnContinueAddress).click()
        }
        await (await this.mapsDivTest).waitForDisplayed({ reverse: true })
        await (await this.inputLocationDiv).waitForDisplayed({ reverse: true })
    }
    async clickLocation() {
        await (await this.mapsDivTest).waitForDisplayed()
        await (await this.mapsDivTest).click()
    }
    async addFirstProduct() {
        await (await this.firstCarousel).scrollIntoView()
        await (await this.btnPlusProduct).waitForDisplayed()
        await (await this.btnPlusProduct).click()
        console.log(await GlobalFunc.getSubtotal())
        while (await GlobalFunc.getSubtotal() < 65) {
            console.log(await GlobalFunc.getSubtotal())
            await (await this.btnPlusProduct).click()
        }
    }
    async checkAvailability() {
        if (await (await this.inputLocationDiv).isDisplayedInViewport()) {
            await (await this.inputLocationDiv).setValue('11114')
            await (await this.inputLocationDiv).addValue(' Wright')
            await (await this.inputLocationDiv).addValue(' Road ')
            await (await this.inputLocationDiv).addValue(' Lynwood ')
            await (await this.mapsDivTest).waitForDisplayed()
            await (await this.mapsDivTest).click()
            if (await (await this.loaderSpinner).isDisplayedInViewport()) {
                await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
            }
            await (await this.logoLocationDiv).waitForDisplayed({ reverse: true })
        }
    }
    async cartEnabled() {
        expect(await this.btnCart).toBeEnabled()
        expect(await this.btnCart).toBeClickable()
    }
    async selectAddress() {
        if (await (await this.shippingLocation).isDisplayedInViewport()) {
            await (await this.shippingLocation).waitForDisplayed()
            expect(await this.shippingLocation).toBeDisplayed()
            expect(await this.deliveryAddress).toBeDisplayed()
            await (await this.deliveryAddress).click()
            if (await (await this.loaderSpinner).isDisplayedInViewport()) {
                await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
            }
            await (await this.shippingLocation).waitForDisplayed({ reverse: true })
        }

    }
    //product functions

    async getRandomNumber() {
        return parseInt((Math.random() * ((await cards).length - 1)))
    }
    async microCartDisplayed() {
        await (await this.microCartDiv).waitForDisplayed()
        expect(await this.microCartDiv).toBeDisplayed()
        await (await this.footerDiv).scrollIntoView()
        expect(await this.microCartDiv).toBeDisplayed()
    }
    async clickMicroCart() {
        await (await this.btnCart).waitForClickable()
        await (await this.btnCart).waitForDisplayed()
        await (await this.btnCart).click()
        console.log(await (await this.btnCart).isEnabled())
    }
    //brands
    async brandsModuleAssertion() {
        await (await this.microCartDiv).waitForDisplayed()
        await (await this.microCartDiv).scrollIntoView()
        expect(await this.microCartDiv).toBeExisting()
    }
    //category module
    async categoryModuleAssertion() {
        await (await this.categoryModule).waitForDisplayed()
        await (await this.categoryModule).scrollIntoView()
        var cards = (await this.categoryModule).$$('a')
        console.log((await cards).length)
        for (let i = 0; i < (await cards).length; i++) {
            expect(await (await cards)[i].$$('div.px-1')).toBeDisplayed()
            expect(await (await cards)[i].$$('p.text-xs')).toBeDisplayed()
            expect((await cards)[i]).toBeClickable()
        }
    }
    //brands module

    async seeAllAssertion() {
        await (await this.storyBlokPage).waitForDisplayed()
        var cards = (await this.storyBlokPage).$$('.product-carousel .content-section--text-normal .btn')
        for (let i = 0; i < 3; i++) {
            await ((await cards)[i]).scrollIntoView()
            expect((await cards)[i]).toHaveAttrContaining('href', 'brands')
        }
    }
    async scrollBrandSection() {
        await (await this.storyBlokPage).waitForDisplayed()
        var carausels = (await this.storyBlokPage).$$('.product-carousel')
        await (await carausels)[0].scrollIntoView()
        driver.pause(4000)
        if (driver.capabilities.platformName == 'windows') {
            var products = (await carausels)[0].$$('.slick-slide')
            await ((await products)[(await products).length - 1]).waitForDisplayed()
            await ((await products)[(await products).length - 1]).scrollIntoView()
            expect((await products)[(await products).length - 1]).toExist()
        } else {
            var products = (await carausels)[0].$$('.sf-product-card')
            await ((await products)[(await products).length - 1]).waitForDisplayed()
            await ((await products)[(await products).length - 1]).scrollIntoView()
            expect((await products)[(await products).length - 1]).toExist()
        }



    }
    async clickReferral() {
        await (await this.btnReferral).waitForDisplayed()
        await (await this.btnReferral).scrollIntoView()
        await (await this.btnReferral).click()
        var newUrl = await (await this.btnReferral).getAttribute('link')
        await driver.url(await (await this.btnReferral).getAttribute('link'))
        expect(driver).toHaveUrlContaining(newUrl)
    }
    async closePending() {
        if (await (await this.pendingDiv).isExisting()) {
            await driver.execute(() => {
                return document.querySelector('.o-pending-orders').setAttribute('style', "display: none");
            })
        }

    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
