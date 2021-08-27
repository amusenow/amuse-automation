const { Given } = require('@cucumber/cucumber');


const HomePage = require('../pages/home.page')
const { BROWSER } = require('ua-parser-js');

const pages = {
    home: HomePage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(page)
    await HomePage.acceptModal()
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