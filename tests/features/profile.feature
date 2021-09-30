Feature: Amuse Home - profile

    As a user, in the amuse site
    I want to be able to go to profile page

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - The Basic Info, Order History, Invite friends, Favorites, Payments, and Log out links should be displayed on the Profile page
        Given I am logged in home page
        And I click on profile from navbar
        Then I should see all profile options
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - The Referral program module appears on the Profile page
        Then I should see referral program module
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - The user should be able to copy a referral code
        Then I should copy link
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - The Header/Footer appear on the Profile page
        Then I should see the footer
        And I should see logged header icons
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - Order History - The user should be able to expand the order
        When I click in order history
        And I click in old order
        Then I should see expanded order
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Profile Page - Order History - The user should be able to view the receipt
        When I click in view recipt
        Then I should see receipt
    