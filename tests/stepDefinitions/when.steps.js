const { When } = require('@cucumber/cucumber');
const GlobalFunc = require('../utils/GlobalFunc');

const SearchPage = require ('../pages/search.page');
const HomePage = require('../pages/home.page.js')
const ShopPage = require('../pages/shop.page')
const DealsPage = require('../pages/deals.page')
const BrandsPage = require('../pages/brands.page')
const ProductPage = require('../pages/productDetail.page')
const CartPage = require('../pages/cart.page')
const utils = require('../utils/utils');
const CheckoutPage = require('../pages/checkout.page');
const ReviewCheckoutPage = require('../pages/reviewCheckout.page')
const OrderTracking = require('../pages/orderTracking.page')
const SignUpModal = require('../pages/signUpModal.page')
const ReferralsPage = require('../pages/referral.page')
const ProfilePage = require('../pages/profile.page');
const productDetailPage = require('../pages/productDetail.page');

const pages = {
    home: HomePage,
    search: SearchPage,
    shop: ShopPage,
    deals: DealsPage,
    brands: BrandsPage, 
    productDetail: ProductPage
}

/**
 * SEARCH STEPS
 */
 When(/^I clean up the cart$/, async () => {
    //await GlobalFunc.deleteCart()
    await HomePage.closePending()
});
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
    await SearchPage.searchForAResult('Sativa')
});

/**
 * HOME STEPS
 */

When(/^I should be able to close it$/, async () => {
    await HomePage.loginModalClose() 
});
When(/^I click on (\w+) from navbar$/, async (element) => {
    if (driver.capabilities.platformName == 'windows') {
        await HomePage.navbarRedirect(element)
    }else{
        await HomePage.mobileNavbarRedirect(element)
    }
});
When(/^I click on profile from header$/, async () => {
    await HomePage.profileClickButton()
});
When(/^I should see (\w+) header icons$/, async (loggedFlag) => {
    if(loggedFlag == 'logged'){
        await HomePage.loggedNavBarAssertion()
    }else{
        await HomePage.mobileNavBarAssertion()
    }
});
When(/^I click on login button$/, async () => {
    await HomePage.loginClickButton() 
});
When(/^I click reset password$/, async () => {
    await HomePage.clickResetButton() 
});
When(/^I enter valid email$/, async () => {
    await HomePage.resetEmailInput() 
    await HomePage.clickResetEmail()
});
When(/^I should (\w+) see location box in (\w+) page$/, async (locationFlag, page) => {
    if(locationFlag!='not'){
        //await pages[page].open(page)
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
//help button
When(/^I should see help button$/, async () => {
    await HomePage.helpButtonAssertion()
});
// SHOP PAGE 
When(/^I click in the (\w+) page$/, async (page) => {
    if (driver.capabilities.platformName == 'windows') {
        await HomePage.navbarRedirect(page)
    }else{
        await HomePage.mobileNavbarRedirect(page)
    }
    
});
When(/^I click in sort button$/, async () => {
    await ShopPage.checkShopAll()
    await ShopPage.clickSortBtn()
});
When(/^I click in Pet section$/, async () => {
    await ShopPage.clickPetSection()
});
When(/^I add a product to the cart$/, async () => {
    await HomePage.checkAvailability()
    await ShopPage.addProductToCart()
});
When(/^I add a cheap product to the cart$/, async () => {
    await ShopPage.addToCheapProduct()
    await ProductPage.productHeaderAssertion()
    await ProductPage.addCartOneClick()
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
When(/^I select last address$/, async () => {
    await HomePage.checkAvailability()
});
When(/^I select another address$/, async () => {
    await HomePage.selectAddress()
});
//product detail page 
When(/^I click on a product$/, async () => {
    await ShopPage.clickOnProduct()
    await ProductPage.productHeaderAssertion()
});
When(/^I should see product price$/, async () => {
    await ProductPage.priceAssertion()
});
When(/^I double click in the image$/, async () => {
    await ProductPage.zoomImage() 
});
When(/^I swipe to see in Carousel diferent images of product$/, async () => {
    await ProductPage.caroselCheck() 
});
When(/^I add a product$/, async () => {
    await ProductPage.increaseProduct()
});
When(/^I decrease the product$/, async () => {
    await ProductPage.decreaseProduct() 
});
When(/^I delete product$/, async () => {
    await ProductPage.deleteProduct() 
});
//cart 
When(/^I click in cart icon$/, async () => {
    await HomePage.clickMicroCart()
}); 
When(/^I click checkout button$/, async () => {
    await CartPage.btnCheckoutClick()
}); 
When(/^I modify the quantity$/, async () => {
    await CartPage.modifyQuantity()
}); 
When(/^I should see discount in subtotal$/, async () => {
    await CartPage.subtotalAssertion()
}); 
When(/^I log in with new user$/, async () => {
    await HomePage.loginClickButton() 
    await HomePage.setEmail(utils.NewUserCredentials.email)
    await HomePage.setPassword(utils.NewUserCredentials.password)
    await HomePage.loginClick() 
}); 
When(/^I should see checkout button disabled$/, async () => {
    await ShopPage.checkMinimumCheckout()
}); 
When(/^I should see minimum message in cart$/, async () => {
    await HomePage.clickMicroCart()
    await CartPage.checkMinimum()
});
When(/^I should see checkout button disabled in cart$/, async () => {
    await CartPage.checkMinimumCheckout()
}); 
When(/^I click in add to cart button$/, async () => {
    await ProductPage.addCartClick()
}); 
//Checkout  
When(/^I add discounted products to the cart$/, async () => {
    await ProductPage.addCartClick()
    await ProductPage.increaseProduct()
}); 
When(/^I search for a discounted product$/, async () => {
    await ShopPage.addToCartDiscountedProduct()
    await ProductPage.priceSaleAssertion()
});
When(/^I should see instructions field$/, async () => {
    await CheckoutPage.instructionsAssertion()
});
When(/^I click on cart button$/, async () => {//
    await CheckoutPage.cartClick()
});
When(/^I click in edit address icon$/, async () => {//
    await CheckoutPage.clickDeliveryAddress()
});
When(/^I click on edit cart$/, async () => {//
    await CheckoutPage.clickEditCart()
}); 
When(/^I should see id verification page$/, async () => {//
    await ReviewCheckoutPage.idVerificationAssertion()
}); 
When(/^I select an (\w+)$/, async (option) => {//
    await CheckoutPage.selectPayment(option)
}); 
When(/^all delivery options are set$/, async () => {
    await CheckoutPage.checkContinueButton(false)
    await CheckoutPage.selectDate()
    await CheckoutPage.selectTime()
});
When(/^I change to discounted date and time$/, async () => {
    await CheckoutPage.selectDiscountedTime()
});
When(/^there is special price$/, async () => {
    await CheckoutPage.checkSpecialPrice()
});
When(/^I enter a promo code$/, async () => {
    await CheckoutPage.clickPromoCode()
    await CheckoutPage.enterPromoCode()
});
When(/^I click on continue button$/, async () => {
    await CheckoutPage.clickContinueButton()
});
When(/^I should see discounts$/, async () => {
    await ReviewCheckoutPage.deliveryDiscountAssertion()
});
When(/^I should see discounts in receipt$/, async () => {
    await ReviewCheckoutPage.deliveryDiscountAssertion()
});
When(/^I should see taxes$/, async () => {
    await ReviewCheckoutPage.taxesAssertion()
});
When(/^I click on Place Order Button$/, async () => {//
    await ReviewCheckoutPage.placeOrderClick()
}); 
When(/^I click in view receipt button$/, async () => {//
    await OrderTracking.clickViewReceipt()
}); 
When(/^I click in cancel order$/, async () => {//
    await OrderTracking.cancelOrder()
}); 
//sign up 
When(/^I navigate to sign up modal$/, async () => {//
    await HomePage.loginClickButton() 
    await HomePage.signUpLinkClick()
}); 
When(/^I enter valid credentials$/, async () => {//
    await SignUpModal.setFakeEmail()
    await SignUpModal.setFakePhone()
    await SignUpModal.setPassword()
    await SignUpModal.clickSignUp()
}); 
//search
When(/^I set a value in search input$/, async () => {//
    await SearchPage.searchForAResult('Sativa')
}); 
When(/^I click Enter$/, async () => {//
    await SearchPage.clickEnterKey()
    
});
When(/^I click in a result$/, async () => {//
    await SearchPage.clickResult()
}); 
//referral
When(/^I click on refer a friend button$/, async () => {//
    await HomePage.clickReferral()
}); 
When(/^I click on signup button$/, async () => {//
    await ReferralsPage.clickSignUp()
});
When(/^I should be able to close signup modal$/, async () => {//
    await ReferralsPage.clickSignUp()
});
When(/^I click on signin button$/, async () => {//
    await ReferralsPage.clickSignIn()
}); 
When(/^I click on restrictions button$/, async () => {//
    await ReferralsPage.clickRestrictionsLink()
}); 
When(/^email button is clickable$/, async () => {//
    await ReferralsPage.emailButtonAssertion()
}); 
When(/^I logout$/, async () => {//
    await ProfilePage.clickLogout()
}); 
When(/^I should see subtotal discount$/, async () => {//
    await CheckoutPage.promoDiscountAssertion()
});
//profile
When(/^I click in order history$/, async () => {//
    await ProfilePage.clickOrderHistory()
}); 
When(/^I click in old order$/, async () => {//
    await ProfilePage.clickOldOrder()
}); 
When(/^I click in view recipt$/, async () => {//
    await ProfilePage.clickRecipt()
}); 
When(/^I click in purchase order again$/, async () => {//
    await ProfilePage.clickOrderHistory()
    await ProfilePage.clickOldOrder()
    await ProfilePage.btnOrderAgain()
}); 
//limit modal
When(/^I search for a product$/, async () => {//
    await SearchPage.searchForAResult('28g')
    await SearchPage.clickResult()
}); 
When(/^I add more than limit allowance to cart$/, async () => {//
    await ProductPage.productHeaderAssertion()
    await ProductPage.increaseOneProduct()
}); 
