const {  Then } = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page')
const ShopPage = require('../pages/shop.page')
const ProductPage = require('../pages/productDetail.page')

/**
 * Header Section 
 */

Then(/^I should see amuse logo$/, async () => {
    await HomePage.logoAssertion()
});
Then(/^I should be redirect to (\w+) page$/, async (element) => {
    await HomePage.mobileUrlAssertion(element)
});
Then(/^I should be displayed with sigin modal$/, async () => {
    await HomePage.loginModalAssertion()
});
Then(/^I should see the footer$/, async () => {
    await HomePage.footerAssertion()
    await HomePage.footerAssertionLogo()
    await HomePage.footerSocialMediaAssertion()
    await HomePage.footerLiknsAssertion()
});
/**
 * LOGIN Section 
 */
 Then(/^I should be logged in$/, async () => {
    await HomePage.checkLoggedUser()
}); 
Then(/^I should see suggested delivery addresses$/, async () => {
    await HomePage.checkMap()
    await browser.pause(3000)
});
Then(/^I should see available products$/, async () => {
    await HomePage.checkAvailability()
});
//SHOP PAGE I should see header and footer
Then(/^I should see header and footer$/, async () => {
    await HomePage.mobileNavBarAssertion()
    await HomePage.footerAssertion()
    await HomePage.footerAssertionLogo()
    await HomePage.footerSocialMediaAssertion()
    await HomePage.footerLiknsAssertion()
});
Then(/^I should see recommended option selected$/, async () => {
    await ShopPage.recommendedCheck()
});
Then(/^I should see each product image, details and price$/, async () => {
    await ShopPage.productIteration()
});
Then(/^the microcart is displayed$/, async () => {
    await ShopPage.microCartDisplayed()
});
//detail page 
Then(/^I should see product details$/, async () => {
    await ProductPage.productDetailsAssertion()
});
Then(/^I should see product info module$/, async () => {
    await ProductPage.infoModuleAssertion()
});