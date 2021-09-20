Feature: Amuse Site - checkout page

    As a user, in the amuse site
    I want to be able to see checkout page

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The delivery address appears on the Checkout page.
        Given I am logged in home page
        When I click checkout button
        Then I should see the delivery address
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - "Unit #" and "Instructions" fields should be displayed in the Delivery Address module.
        Then I should see unit number field
        And I should see instructions field
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The Cart Module appears on the checkout page.
        When I click on cart button
        Then I should see cart module
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - Items and Subtotal should be displayed in the Cart module.
        Then I should see subtotal
    @iosBrowser @androidBrowser
    Scenario Outline:  Amuse - Checkout - Checkout Details Page - User should select payment
        When I select an option
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The Checkout page Continue button should appear in the enabled state when all delivery options are correct.
        When all delivery options are set
        Then I should see the continue button
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The user should be redirected to the Checkout Review Page after a click on the Continue button.
        When I click on continue button
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - ID Verification Page - When the user has successfully verified their ID, the user should proceed to the Review Order page.
        And I should see id verification page
        Then I should see checkout review page
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - The Recipient information should be displayed in the Review Your Order module.
        Then I should see recipient information
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - The Delivery Window should be displayed in the Review Your Order module. //TODO delivery date and times
        Then I should see delivery window
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - The Payment should be displayed in the Review Your Order module.
        Then I should see payment window
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - Items should be displayed in the Cart module.
        Then I should see cart module
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - Subtotal should be displayed in the Cart module.
        Then I should see subtotal in review
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - Fees, Discounts, and Taxes should be displayed in the Cart module. TODO add check fees for debit and cash
        Then I should see fee 
        And I should see Discounts
        And I should see taxes
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - Order Total should be displayed in the Cart module.
        Then I should see order total
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - The Place Order button is displayed on the Review Order page.
        Then I should see place order button
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Review Page - The user should be redirected to the Order Confirmation Page after a click on the Place Order button.
        When I click on Place Order Button
        Then I should be redirected to order confirmation page
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Review Order Page - “Thank you …“ message should be displayed on the Order Confirmation page //TODO delivery date and time and whole message
        Then I should see thank you message
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Review Order Page - The Order Tracker should reflect the current state
        Then I should see current state of order 


