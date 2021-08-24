const { Given } = require('@cucumber/cucumber');


const HomePage = require('../pages/home.page')
const { BROWSER } = require('ua-parser-js');

const pages = {
    home: HomePage,
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(page)
    console.log(browser.config.baseUrl)
    await HomePage.acceptModal()
});
