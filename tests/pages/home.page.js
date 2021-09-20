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
    get btnNoThanks() { return $('#bx-element-1428003-kqkNBO3 > button') }
    get amuseLogo() { return $('#amuseHeader > div > div > header > a') }
    get amuseLogoFooter() { return $('.m-logo__image') }
    get btnSearchNavbar() { return $('[class="a-search-icon p-1 mx-2 rounded-full lg\:block cursor-pointer o-header__search hidden"]') }
    get btnLoginNavbar() { return $('.btn--with-padding') }
    get btnProfile() { return $('.account-button.account-button--logged-in.cursor-pointer.p-1.rounded-full') }
    get btnloginModaClose() { return $('.sf-modal__close') }
    get btnCart() { return $('.a-microcart-icon.o-header__microcart') }
    get btnShopNavbar() { return $('a[href="/shop"]') }
    get btnDealsNavbar() { return $('a[href="/deals"]') }
    get btnBrandsNavbar() { return $('a[href="/brands"]') }
    get btnReferralsNavbar() { return $('a[href="/referrals"]') }
    get footerDiv() { return $('.o-footer__container') }
    get footerSocialMedia() { return $('#viewport > div.o-footer > div > div > div > div.mt-12 > div.mt-10 > div.flex') }
    get footerLinks() { return $('#viewport > div.o-footer > div > div > div > div.grid > div') }
    get heroImage() { return $('[data-testid] > .w-full:nth-of-type(1)') }
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
    get btnLogin() { return $('.btn.btn--primary.btn--regular.btn--without-padding') }
    get signUpLink() { return $('.m-login .text-center > a') }
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
    get productName() { return $('div.scrolling-product > div.sf-product-card') }
    get productClassification() { return $('div:nth-of-type(3) .o-product-card.scrolling-product-card.sf-product-card > .flex.flex-row.items-center.text-xxs > .classification') }
    get productBrand() { return $('div:nth-of-type(3) .o-product-card.scrolling-product-card.sf-product-card > div:nth-of-type(4) > .a-brand__link') }
    get productWeight() { return $('#home > div > div:nth-child(3) > div:nth-child(2) > div > div > div > div:nth-child(6)') }
    get productPrice() { return $('#home > div > div:nth-child(3) > div:nth-child(2) > div > div > div > div.flex.justify-between.items-center > div > div.a-product-price') }
    get productLabel() { return $(".content-section--margin-bottom-m:nth-of-type(3) [class='text-lg tracking-tighter leading-none mb-5']") }
    get thirdProduct() { return $("[data-testid] .content-section--margin-bottom-m:nth-of-type(4) .scrolling-product-card:nth-of-type(3)") }

    //categories
    get categoryModule() { return $('.m-homepage-categories__list--grid') }
    //brands
    get brandsModule() { return $('#home > div > div.max-w-screen-xl.mx-auto > div:nth-child(2)') }
    get seeAllLinks() { return $('div.product-carousel > div.flex > div.mb-5') }
    get seeAllLinks() { return $('div.product-carousel > div.flex > div.mb-5') }

    //mobile

    get btnShopMobile() { return $('.sf-bottom-navigation > div:nth-of-type(1)') }
    get btnDealsMobile() { return $('.sf-bottom-navigation > div:nth-of-type(2)') }
    get btnSearchMobile() { return $('.sf-bottom-navigation > div:nth-of-type(3)') }
    get inputSearchMobile() { return $('.sf-search-bar__input') }
    get btnProfileMobile() { return $('.sf-bottom-navigation > div:nth-of-type(4)') }
    get microCartDiv() { return $("div.o-microcart__checkout-box") }
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
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await (await element).waitForDisplayed()
        if ((await this.loaderSpinner).isDisplayedInViewport()) {
            await (await this.loaderSpinner).waitForDisplayed({ reverse: true })
        }
        await driver.saveElement((await this.amuseLogo), logo)
        expect(await driver.checkElement((await element), logo, {})).toEqual(0)
    }
    async logoAssertion() {
        await this.logoAssertionElement(this.amuseLogo)
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
    async mobileNavbarRedirect(item) {
        var attribute
        switch (item) {
            case "shop":
                await (await this.btnShopMobile).click()
                expect(this.btnShopMobile).toHaveAttributeContaining('class', 'active')
                break;

            case "deals":
                await (await this.btnDealsMobile).click()
                expect(this.btnDealsMobile).toHaveAttributeContaining('class', 'active')
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
        if (path == 'search') {
            await (await this.inputSearchMobile).waitForDisplayed()
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        } else if (path == 'profile') {
            await this.loginModalAssertion()
        } else {
            expect(driver).toHaveUrlContaining(driver.config.baseUrl + path)
            await (await this.amuseLogo).waitForDisplayed()
            await (await this.amuseLogo).click()
        }
    }

    //end of navbar functions
    async heroAssertion() {
        await (await this.heroImage).waitForDisplayed()
        expect(await this.heroImage).toExist()
    }
    async heroImageAssertion() {
        await (await this.heroImage).waitForDisplayed()
        expect(await this.heroImage).toExist()
        expect(await this.heroImage).toBeClickable()
    }

    async acceptModal() {
        await (await this.btnModalAgeYes).waitForDisplayed()
        await (await this.btnModalAgeYes).click()
        await (await this.btnModalAgeYes).waitForDisplayed({ reverse: true })
    }
    async unlockModal() {
        await (await this.btnNoThanks).waitUntil(async () => {
            return await (await this.btnNoThanks).waitForDisplayed()
        }, {
            timeout: 4000,
            timeoutMsg: 'Modal is not present'
        });
        await (await this.btnNoThanks).click()
        await (await this.btnNoThanks).waitForDisplayed({ reverse: true })
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
    async loginAssertionLogo() {
        await this.logoAssertionElement(this.amuseLogoModal, 'logoLogin')
    }
    async setPassword(password = utils.ValidEmailPassword) {
        await (await this.passwordInput).setValue(password);
    }
    async loginClick() {
        await (await this.btnLogin).click()
        await (await this.btnLogin).waitForDisplayed({ reverse: true })
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
        await (await this.logoLocationDiv).waitForDisplayed({ reverse: true })
    }
    async cartEnabled() {
        expect(await this.btnCart).toBeEnabled()
        expect(await this.btnCart).toBeClickable()
    }
    async selectAddress() {
        if (await (await this.shippingLocation).isDisplayedInViewport()) {
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
    async clickOnProduct() {
        await (await this.productLabel).waitForDisplayed()
        await (await this.productLabel).scrollIntoView()
        await (await this.productName).waitForDisplayed()
        var cards = (await this.productName).$$('a.sf-product-card__link')
        console.log(await this.getRandomNumber())
        let random = await this.getRandomNumber()
        utils.SelectedProduct.name =  await (await cards)[random].getText()
        utils.SelectedProduct.classification = await (await this.productClassification).getText()
        utils.SelectedProduct.brand = await (await this.productBrand).getText()
        utils.SelectedProduct.price = await (await this.productPrice).getText()
        await (await this.productName).click()
    }
    async getRandomNumber() {
        return parseInt((Math.random() * ((await cards).length - 1 )))
    }
    async microCartDisplayed() {
        await (await this.microCartDiv).waitForDisplayed()
        expect(await this.microCartDiv).toBeDisplayed()
        await (await this.microCartDiv).scrollIntoView()
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
        await (await this.seeAllLinks).waitForDisplayed()
        var cards =  (await this.seeAllLinks).$$('a.text-fontBase.underline')
        console.log((await cards).length + ' hello')
        for (let i = 0; i < (await cards).length; i++) {
            await ((await cards)[i]).scrollIntoView()
            let cardHref = await ((await cards)[i]).getAttribute('href')
            console.log(await ((await cards)[i]).isClickable())
            await ((await cards)[i]).click()
            expect(driver).toHaveUrlContaining(driver.config.baseUrl + cardHref)
            await (await this.categoryModule).waitForDisplayed()
            await driver.switchWindow(driver.config.baseUrl)
            await ((await cards)[i]).waitForDisplayed()
        }
    }
    async scrollBrandSection() {
        await (await this.thirdProduct).waitForDisplayed()
        await (await this.thirdProduct).scrollIntoView()
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

module.exports = new HomePage();
