Feature: Amuse Home - Cart Minimum

    As a user, in the amuse site
    I want to be able to see cart minimum message

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - If subtotal is below $50, the checkout button is disabled and the $50 minimum is displayed on the persistent checkout bar as well as within the cart
        Given I am on the home page
        When I log in with new user
        Then I should see microcart minimum message
        And I should see checkout button disabled
        And I should see minimum message in cart
        And I should see checkout button disabled in cart