Feature: Amuse Home - Cart Minimum

    As a user, in the amuse site
    I want to be able to see cart minimum message

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - If subtotal is below $50, the checkout button is disabled and the $50 minimum is displayed on the persistent checkout bar as well as within the cart
        Given I am logged in home page
        When I click in cart icon
        Then I should see cart page
        And I should see logged header icons