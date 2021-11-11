const {  Then } = require('@cucumber/cucumber');

const HomePage = require('../pages/home.page')
const ShopPage = require('../pages/shop.page')
const ProductPage = require('../pages/productDetail.page')
const CartPage = require('../pages/cart.page')
const CheckoutPage = require('../pages/checkout.page')
const ReviewCheckoutPage = require('../pages/reviewCheckout.page')
const OrderTracking = require('../pages/orderTracking.page')
const SignUpModal = require('../pages/signUpModal.page')
const SearchPage = require('../pages/search.page')
const DealsPage = require('../pages/deals.page')
const BrandsPage = require('../pages/brands.page')
const ReferralsPage = require('../pages/referral.page')
const ProfilePage = require('../pages/profile.page')


/**
 * Home Section  
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
Then(/^I should see hero image$/, async () => {
    await HomePage.heroAssertion()
});
Then(/^hero slide should be clickable$/, async () => {
    await HomePage.heroImageAssertion()
});
Then(/^all icons in category module are clickable$/, async () => {
    await HomePage.categoryModuleAssertion()
});
Then(/^all links navigate to correct pages$/, async () => {
    await HomePage.seeAllAssertion()
});
Then(/^I can scroll in brand modules$/, async () => {
    await HomePage.scrollBrandSection()
});
Then(/^I should see reset modal confirmation$/, async () => {
    await HomePage.resetModalAssertion()
    await HomePage.closeResetModalAssertion()
});
/**
 * LOGIN Section 
 */
 Then(/^I should be logged in$/, async () => {
    await HomePage.checkLoggedUser()
}); 
Then(/^I should see suggested delivery addresses$/, async () => {
    await HomePage.checkMapUnlogged()
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
    await CartPage.cartIconAssertion()
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
Then(/^I should see amuse logo only$/, async () => {//
    await CheckoutPage.logoAssertion()
}); 
Then(/^I should see unit number field$/, async () => {//
    await CheckoutPage.unitAssertion()
}); 
Then(/^I should see cart module$/, async () => {//I should see the continue button 
    await CheckoutPage.cartModuleAssertion() 
}); 
Then(/^I should see subtotal$/, async () => {//
    await CheckoutPage.subtotalAssertion() 
}); 
Then(/^I should see the continue button$/, async () => {//
    await CheckoutPage.checkContinueButton(true)
}); 
Then(/^I should see checkout review page$/, async () => {//
    await ReviewCheckoutPage.labelReviewAssertion()
}); 
Then(/^I should see recipient information$/, async () => {//
    await ReviewCheckoutPage.recepientAssertion()
}); 
Then(/^I should see delivery window$/, async () => {//
    await ReviewCheckoutPage.checkoutDeliveryAssertion()
    await ReviewCheckoutPage.checkoutDeliveryTimeAssertion()
}); 
Then(/^I should see discounted applied in cart$/, async () => {//
    await CheckoutPage.deliveryDiscountAssertion()
}); 

Then(/^I should see payment window$/, async () => {//
    await ReviewCheckoutPage.checkoutPaymentAssertion()
}); 
Then(/^I should see subtotal in review$/, async () => {//
    await ReviewCheckoutPage.subtotalAssertion()
}); 
Then(/^I should see fee$/, async () => {//
    await ReviewCheckoutPage.feesAssertion()
}); 
Then(/^I should see order total$/, async () => {//
    await ReviewCheckoutPage.totalAssertion()
}); 
Then(/^I should see place order button$/, async () => {//
    await ReviewCheckoutPage.placeOrderButtonAssertion()
}); 
Then(/^I should be redirected to order confirmation page$/, async () => {//
    await OrderTracking.orderTrackingDivAssertion()
});
Then(/^I should see thank you message$/, async () => {//
    await OrderTracking.recipientAssertion()
}); 
Then(/^I should see current state of order$/, async () => {//
    await OrderTracking.activeStatusAssertion()
}); 
//sign up
Then(/^I should be displayed with sigup modal$/, async () => {//
    await SignUpModal.modalAssertion()
}); 
//search   
Then(/^search button should be clickable$/, async () => {//
    await SearchPage.clickableAssertion()
    await SearchPage.inputSearchAssertion()
    await SearchPage.btnSearchAssertion()
    await SearchPage.mostSearchedSectionAssertion()
    await SearchPage.labelMostSearchedSectionAssertion()
}); 
Then(/^I should see header$/, async () => {//
    await HomePage.mobileNavBarAssertion() 
}); 
Then(/^I should see relevant results$/, async () => {//
    await SearchPage.searchFoundAssert()
}); 
Then(/^I be redirected to correct page$/, async () => {//
    await SearchPage.checkSearch()
}); 
//deals
Then(/^I should see deals icon in active state$/, async () => {//
    await DealsPage.checkActiveState()
}); 
Then(/^I should see all deals module$/, async () => {//
    await DealsPage.checkAllModules()
}); 
Then(/^Links redirect to brands page$/, async () => {//
    await DealsPage.allLinksClick()
}); 
//brands
Then(/^I should see brands hero image$/, async () => {//
    await BrandsPage.heroAssertion()
}); 
Then(/^I should see brands module$/, async () => {//
    await BrandsPage.featuredBrandsAssertion()
}); 
Then(/^I should see brands listed alphabetically$/, async () => {//
    await BrandsPage.alphabetOrderAssertion()
}); 
//referral
Then(/^I should be redirected to program rules$/, async () => {//
    await ShopPage.locationBoxAssertion()
    await ReferralsPage.redirectAssertion()
}); 
Then(/^referral link should be clickable$/, async () => {//
    await ReferralsPage.copyLinkAssertion()
}); 
Then(/^I should see promo code applied$/, async () => {//
    await CheckoutPage.promoCodeAssertion()
}); 
//profile
Then(/^I should see all profile options$/, async () => {//
    await ProfilePage.menuAssertion()
}); 
Then(/^I should see referral program module$/, async () => {//
    await ReferralsPage.emailButtonAssertion()
    await ReferralsPage.learnMoreButtonAssertion()
}); 
Then(/^I should copy link$/, async () => {//
    await ReferralsPage.copyLinkAssertion()
}); 
Then(/^I should see expanded order$/, async () => {//
    await ProfilePage.expandedOrderAssertion()
}); 
Then(/^I should see receipt$/, async () => {//
    await ProfilePage.receiptAssertion()
    browser.pause(3000)
}); 
Then(/^I see delivery window$/, async () => {//
    await ProfilePage.deliveryWindowAssertion()
}); 
Then(/^I should see Discounts$/, async () => {
    await ReviewCheckoutPage.discountsAssertion()
});
Then(/^I see savings disclaimer$/, async () => {//
    await ProfilePage.disclaimerDiscountAssertion()
}); 
Then(/^I am able to add it to the calendar$/, async () => {//
    await ProfilePage.clickBack()
    await OrderTracking.addCalendarAssertion()
}); 
Then(/^I should be able to cancel order$/, async () => {//
    await OrderTracking.cancelledOrderCheck()
}); 