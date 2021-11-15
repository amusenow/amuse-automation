Feature: Amuse Home - Daily Allowance

    As a user, in the amuse site
    I want to be able to see daily allowance limit modal

    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page - If customer has on cart more than daily allowance, limit modal should display
        Given I am logged in home page
        And I clean up the cart
        And I click in the search page
        When I search for a product
        And I add more than limit allowance to cart
        Then I should see limit modal