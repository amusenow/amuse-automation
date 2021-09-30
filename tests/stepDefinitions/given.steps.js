const { Given } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page')
const BrandsPage = require('../pages/brands.page')
const ReferralsPage = require('../pages/referral.page')
const { BROWSER } = require('ua-parser-js');
const utils = require('../utils/utils');

const pages = {
    home: HomePage,
    brands: BrandsPage,
    referrals: ReferralsPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(page)
    await HomePage.acceptModal()
    //await HomePage.unlockModal()
});
Given(/^I am logged in$/, async () => {
    await HomePage.loginClickButton()
    await HomePage.setEmail()
    await HomePage.setPassword()
    await HomePage.loginClick()
});
//
Given(/^I am logged in (\w+) page$/, async (page) => {
    await pages[page].open(page)
    await HomePage.acceptModal()
    await HomePage.loginClickButton()
    await HomePage.setEmail()
    await HomePage.setPassword()
    await HomePage.loginClick()
});
Given(/^I am a referral user$/, async () => {
    browser.url(utils.referralUrl)
});