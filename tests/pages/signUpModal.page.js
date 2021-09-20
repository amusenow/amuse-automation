const Page = require('./page');
const GlobalFunctions = require('../utils/GlobalFunc');
const faker = require('faker');
const utils = require('../utils/utils');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get emailLabel() { return $('div:nth-of-type(1) > div.sf-input__wrapper > label.font-medium') }
    get emailInput() { return $(() => document.getElementById('signup[email]'))}
    get phoneLabel() { return $('div:nth-of-type(2) > div.sf-input__wrapper > label.font-medium') }
    get phoneInput() { return $(() => document.getElementById('signup[phone]'))}
    get passwordLabel() { return $('div:nth-of-type(3) > div.sf-input__wrapper > label.font-medium') }
    get passwordInput() { return $(() => document.getElementById('signup[password]'))}
    get confirmPasswordLabel() { return $('div:nth-of-type(4) > div.sf-input__wrapper > label.font-medium') }
    get confirmPasswordInput() { return $(() => document.getElementById('signup\[confirmPassword\]'))}
    get btnSignUp() { return $('.btn.btn--primary.btn--regular.btn--without-padding') }
    get signInLink() { return $('.sf-modal .block.duration-150.ease-in-out') }
    get privacyPolicyLink() { return $('.sf-modal__container p > a:nth-of-type(1)') }
    get termsPolicyLink() { return $('.sf-modal__container p > a:nth-of-type(2)') }
    get loaderSpinner() { return $('div.m-loader') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async modalAssertion() {
        await (await this.emailLabel).waitForDisplayed()
        expect(await this.emailLabel).toBeDisplayed()
        expect(await this.emailLabel).toHaveTextContaining('Email')
        expect(await this.emailInput).toBeDisplayed()

        expect(await this.phoneLabel).toBeDisplayed()
        expect(await this.phoneLabel).toHaveTextContaining('Mobile Phone Number')
        expect(await this.phoneInput).toBeDisplayed()

        expect(await this.passwordLabel).toBeDisplayed()
        expect(await this.passwordLabel).toHaveTextContaining('Password')
        expect(await this.passwordInput).toBeDisplayed()

        expect(await this.confirmPasswordLabel).toBeDisplayed()
        expect(await this.confirmPasswordLabel).toHaveTextContaining('Confirm password')
        expect(await this.confirmPasswordInput).toBeDisplayed()

        expect(await this.btnSignUp).toBeDisplayed()
        expect(await this.signInLink).toBeDisplayed()
        expect(await this.privacyPolicyLink).toBeDisplayed()
        expect(await this.termsPolicyLink).toBeDisplayed()
    }
    async setFakeEmail() {
        var randomEmail = faker.internet.email();
        await (await this.emailInput).setValue(randomEmail);
    }
    async setFakePhone() {
        var randomPhone = faker.phone.phoneNumber();
        await (await this.phoneInput).setValue(randomPhone);
    }
    async setPassword() {
        await (await this.passwordInput).setValue(utils.NewUserCredentials.password);
        await (await this.confirmPasswordInput).setValue(utils.NewUserCredentials.password);
    }
    async clickSignUp() {
        await (await this.btnSignUp).waitForDisplayed()
        await (await this.btnSignUp).click()
    }


    /**
     * overwrite specifc options to adapt it to page object --- No Thanks
     */
    open() {
        return super.open('');
    }

}

module.exports = new SignUpPage();
