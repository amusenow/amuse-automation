Feature: Amuse Home - shop page

    As a user, in the amuse site
    I want to be able to go to the shop page
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Shop Page - The Header/Footer and location box appear on the Shop page and shop all icon is active
        Given I am on the home page
        When I click in the shop page
        Then I should see header and footer
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Shop Page - I select address
        When I click in the location box
        And I select last address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Shop Page - The default state is “Shop all” and sorted by “Recommended”
        When I click in sort button
        Then I should see recommended option selected
    @iosBrowser @androidBrowser @web   
    Scenario:  Amuse - Shop Page - The product image, details and price should appear 
        Then I should see each product image, details and price
        And I click on a product
    @iosBrowser @androidBrowser @web  
    Scenario:  Amuse - Shop Page - The non-authenticated user should not be able to add the product to the cart.
        When I add a product to the cart
        Then I should be displayed with sigin modal
    @iosBrowser @androidBrowser  @web  
    Scenario:  Amuse - Shop Page - The authenticated user should be able to add the product to the cart.
        When I login
        And I select last address
        Then I should be logged in
        And the cart button should be enabled
        
    @iosBrowser @androidBrowser    
    Scenario:  Amuse - Shop Page - When the user has one or more products in the cart, the microcart is displayed
        Then the microcart is displayed

