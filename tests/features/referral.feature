Feature: Amuse Home - referral

    As a user, in the amuse site
    I want to be able to go to referral page

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - The Header/Footer appears on the How it Works page
        Given I am on the referrals page
        Then I should see header and footer
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - SignUp link should be clickable and navigate the user to the relevant page
        When I click on signup button
        Then I should be displayed with sigup modal
        And I should be able to close it
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - SignIn link should be clickable and navigate the user to the relevant page
        When I click on signin button
        Then I should be displayed with sigin modal
        And I should be able to close it
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Restrictions link should be clickable and navigate the user to the relevant page
        When I log in with new user
        Then referral link should be clickable
        And email button is clickable
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Restrictions link should be clickable and navigate the user to the relevant page
        When I click on restrictions button
        Then I should be redirected to program rules
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Logout of main account 
        When I click on profile from header
        And I logout
        Then I should see hero image
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - New user logs in
        Given I am a referral user
        And I enter valid credentials
        Then I should be logged in
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Shop page visit
        When I click in the shop page
        And I click in Pet section
        Then I should see each product image, details and price
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Add product to cart
        Then I should see suggested delivery addresses
        And the cart button should be enabled
     @iosBrowser @androidBrowser
    Scenario:  Amuse - Referral Program Page - Add product to cart
        When I click checkout button
        Then I should see the delivery address
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The Cart Module appears on the checkout page.
        When I click on cart button
        Then I should see cart module
        And I should see subtotal discount
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - Promo code appears in subtotal
        Then I should see promo code applied
    
    
    
        