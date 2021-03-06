Feature: Amuse Home - profile

    As a user, in the amuse site
    I want to be able to go to profile page

    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - Login
        Given I am on the home page
        When I click on login button
        And I login
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - The Basic Info, Order History, Invite friends, Favorites, Payments, and Log out links should be displayed on the Profile page
        When I click on profile from header
        Then I should see all profile options
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - The Referral program module appears on the Profile page
        Then I should see referral program module
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - The user should be able to copy a referral code
        Then I should copy link
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - The Header/Footer appear on the Profile page
        Then I should see the footer
        And I should see logged header icons
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - Order History - The user should be able to expand the order
        When I click in order history
        And I click in old order
        Then I should see expanded order
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - Order History - The user should be able to view the receipt
        When I click in view recipt
        Then I should see receipt
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Profile Page - Order History - The user should be able to purchase the order again
        When I click in purchase order again
        Then I should see the delivery address
        And I select an option
        And all delivery options are set
        Then I should see the continue button
        And I click on continue button
        Then I should see delivery window
    