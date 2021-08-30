const {  Then } = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page')
const ShopPage = require('../pages/shop.page')
const ProductPage = require('../pages/productDetail.page')
const CartPage = require('../pages/cart.page')
const CheckoutPage = require('../pages/checkout.page')

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
//SHOP PAGE 
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
    await HomePage.microCartDisplayed()
});
//detail page 
Then(/^I should see product details$/, async () => {
    await ProductPage.productDetailsAssertion()
});
Then(/^I should see product info module$/, async () => {
    await ProductPage.infoModuleAssertion()
});
Then(/^Image should zoom$/, async () => {
    await ProductPage.zoomCheck()
});
Then(/^Add to Cart button should display$/, async () => {//
    await ProductPage.addCartAssert()
});
//cart page 
Then(/^I should see cart page$/, async () => {//
    await CartPage.titleAssertion()
});
Then(/^I should see cart icon active$/, async () => {//
    await CartPage.titleAssertion()
});//
Then(/^I should see cart items$/, async () => {//
    await CartPage.cartItemtsAssertion()
});
Then(/^I should see checkout button$/, async () => {//
    await CartPage.btnCheckoutAssertion()
});
Then(/^I should see checkout page$/, async () => {//
    await CheckoutPage.checkoutTitleAssertion()
});
Then(/^I should see new total$/, async () => {//
    await CartPage.assertQuantity()
});
Then(/^I should see microcart minimum message$/, async () => {//
    await ShopPage.checkMinimumCheckout()
});
//checkout
Then(/^I should see the delivery address$/, async () => {//
    await CheckoutPage.checkoutDeliveryAssertion()
}); 
Then(/^I should see unit number field$/, async () => {//
    await CheckoutPage.unitAssertion()
}); 
Then(/^I should see cart module$/, async () => {//
    await CheckoutPage.cartClick() 
    await CheckoutPage.cartModuleAssertion() 
}); 
Then(/^I should see subtotal$/, async () => {//
    await CheckoutPage.subtotalAssertion() 
}); 
