Feature: Amuse Home - Cart Minimum

    As a user, in the amuse site
    I want to be able to see cart minimum message

    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page -  I login  
        Given I am on the shop page
        And I click on login button
        When I login
        And I clean up the cart
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page - I select address
        When I click in the location box
        And I select last address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Cart Page - If subtotal is below $65, the checkout button is disabled and the $50 minimum is displayed on the persistent checkout bar as well as within the cart
        When I add a cheap product to the cart
        Then I should see microcart minimum message
        And I should see checkout button disabled
        And I should see minimum message in cart
        And I should see checkout button disabled in cart