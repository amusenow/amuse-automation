Feature: Amuse Home - Daily Allowance

    As a user, in the amuse site
    I want to be able to see daily allowance limit modal

    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page -  I login  
        Given I am on the home page
        And I click on login button
        When I login
        And I clean up the cart
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page - I select address
        When I click in the location box
        And I select last address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page - If customer has on cart more than daily allowance, limit modal should display
        When I click on search from navbar
        And I search for a product
        And I add more than limit allowance to cart
        Then I should see limit modal