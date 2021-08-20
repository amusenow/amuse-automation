const { When } = require('@cucumber/cucumber');

const SearchPage = require ('../pages/search.page');
const HomePage = require('../pages/home.page.js')
const ShopPage = require('../pages/shop.page')
const DealsPage = require('../pages/deals.page')
const BrandsPage = require('../pages/brands.page')
const ProductPage = require('../pages/productDetail.page')

const pages = {
    home: HomePage,
    search: SearchPage,
    shop: ShopPage,
    deals: DealsPage,
    brands: BrandsPage
}

/**
 * SEARCH STEPS
 */
 When(/^a search box is displayed$/, async () => {
    await SearchPage.inputSearchAssertion()
});

When(/^a search button is displayed$/, async () => {
    await SearchPage.btnSearchAssertion()
});

When(/^most searched content by section is displayed$/, async () => {
    await SearchPage.mostSearchedSectionAssertion()
    await SearchPage.labelMostSearchedSectionAssertion()
});

When(/^the user types text to search content$/, async () => {
    await SearchPage.searchForAResult()
});

/**
 * HOME STEPS
 */

When(/^I should be able to close it$/, async () => {
    await HomePage.loginModalClose() 
});
When(/^I click on (\w+) from navbar$/, async (element) => {
    await HomePage.mobileNavbarRedirect(element)
});
When(/^I should see header icons$/, async () => {
    await HomePage.mobileNavBarAssertion() 
});
When(/^I click on login button$/, async () => {
    await HomePage.loginClickButton() 
});
When(/^I should (\w+) see location box in (\w+) page$/, async (locationFlag, page) => {
    if(locationFlag!='not'){
        await pages[page].open(page)
        await pages[page].locationBoxAssertion(page)
    }
});
 //LOGIN
When(/^I set valid email$/, async () => {
    await HomePage.setEmail()
});
When(/^I set valid password$/, async () => {
    await HomePage.setPassword() 
    await HomePage.loginClick()
});
//LOCATION BOX
When(/^I click in the location box$/, async () => {
    await HomePage.clickLocationBox() 
    await HomePage.assertLocationBoxModal()
});
When(/^I enter part of address$/, async () => {
    await HomePage.inputLocation() 
});
When(/^I select an address$/, async () => {
    await HomePage.clickLocation()
});
// SHOP PAGE 
When(/^I click in the shop page$/, async () => {
    await HomePage.mobileNavbarRedirect('shop')
});
When(/^I click in sort button$/, async () => {
    await ShopPage.checkShopAll()
    await ShopPage.clickSortBtn()
});
When(/^I click in Pet section$/, async () => {
    await ShopPage.clickPetSection()
});
When(/^I add a product to the cart$/, async () => {
    await ShopPage.addProductToCart()
});
When(/^I login$/, async () => {
    await HomePage.setEmail()
    await HomePage.setPassword()
    await HomePage.loginClick() 
});
When(/^the cart button should be enabled$/, async () => {
    await HomePage.selectAddress()
    await HomePage.cartEnabled()
});
//product detail page
When(/^I click on a product$/, async () => {
    await HomePage.clickOnProduct()
    await ProductPage.productHeaderAssertion()
});
When(/^I should see product price$/, async () => {
    await ProductPage.priceAssertion()
});