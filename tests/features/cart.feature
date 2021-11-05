Feature: Amuse Home - Cart

    As a user, in the amuse site
    I want to be able to see cart page

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page 
        Given I am logged in shop page
        When I click in the location box
        And I select last address
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page 
        When I search for a discounted product
        And I add discounted products to the cart
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - The Header appears on the Profile page
        When I click in cart icon
        Then I should see cart page
        And I should see logged header icons
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - When a user is on the Cart page, the Cart icon in the header should appear in the active state
        Then I should see cart icon active
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - All added products should be displayed in the cart
        Then I should see cart items
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - The Checkout button should be presented
        Then I should see checkout button
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - The user should be able to modify the number of product items
        When I modify the quantity
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Sale Price Designs - Cart - The persistent checkout bar reflects the discounted subtotal
        Then I should see new total
        And I should see discount in subtotal
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Cart Page - The user should be redirected to the Checkout Details Page by clicking on the Checkout button
        When I click checkout button
        Then I should see checkout page