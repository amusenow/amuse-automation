Feature: Amuse Site - checkout page

    As a user, in the amuse site
    I want to be able to see checkout page

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
    Scenario:  Amuse - Sale Price Designs - Product Detail Page - The product detail page should display the original price crossed out and the sale price in amusing pink AND in Shop page
        When I search for a discounted product
        And I add discounted products to the cart
        And I select last address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The delivery address appears on the Checkout page.
        When I click checkout button
        Then I should see the delivery address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The Checkout header only contains an Amuse logo
        Then I should see amuse logo only
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The user is able to change their delivery address
        When I click in edit address icon
        And I select another address
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - "Unit #" and "Instructions" fields should be displayed in the Delivery Address module.
        Then I should see unit number field
        And I should see instructions field
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The Cart Module appears on the checkout page. And When an item is on sale, the full price is crossed out with the sale price shown next to it.
        When I click on cart button
        Then I should see cart module
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The user should be able to modify the number of product items
        When I click on edit cart
        And I modify the quantity
        Then I should see new total
        And I click checkout button
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - Items and Subtotal should be displayed in the Cart module. And The subtotal should reflect the discount
        Then I should see subtotal
    @iosBrowser @androidBrowser @web
    Scenario Outline:  Amuse - Checkout - Checkout Details Page - User should select payment
        When I select an option
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The Checkout page Continue button should appear in the enabled state when all delivery options are correct.
        When all delivery options are set
        Then I should see the continue button
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The user should be able to select or change the delivery date and time in the Delivery Widow module changing for a special price
        When I change to discounted date and time
        Then I should see discounted applied in cart
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Sale Price Designs - Checkout - The savings disclaimer is displayed on the payment module of the Checkout page when a sale product is in the cart and a promo code have not applied
        When there is special price
        Then I should see promo code applied
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The user should be able to enter a promo code.
        When I enter a promo code
        Then I should see promo code applied
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Details Page - The user should be redirected to the Checkout Review Page after a click on the Continue button.
        When I click on continue button
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - ID Verification Page - When the user has successfully verified their ID, the user should proceed to the Review Order page.
        And I should see id verification page
        Then I should see checkout review page
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - ID Verification Page  - The Checkout Review page header only contains an Amuse logo.
        Then I should see amuse logo only
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - The Recipient information should be displayed in the Review Your Order module.
        Then I should see recipient information
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - The Delivery Window should be displayed in the Review Your Order module. 
        Then I should see delivery window
        And I should see discounts
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - The Payment should be displayed in the Review Your Order module.
        Then I should see payment window
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - Items should be displayed in the Cart module. AND Sale prices are displayed in the cart on the line item and the subtotal that appears within the cart
        Then I should see cart module
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - Subtotal should be displayed in the Cart module.
        Then I should see subtotal in review
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Premium_Discounted delivery window - Review Order - The delivery window fees should be shown in the cart on the Review your Order page
        Then I should see fee
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - Fees, Discounts, and Taxes should be displayed in the Cart module.
        Then I should see Discounts
        And I should see taxes
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - Order Total should be displayed in the Cart module.
        Then I should see order total
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - The Place Order button is displayed on the Review Order page.
        Then I should see place order button
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Checkout - Checkout Review Page - The user should be redirected to the Order Confirmation Page after a click on the Place Order button.
        When I click on Place Order Button
        Then I should be redirected to order confirmation page
    @iosBrowser @androidBrowser 
    Scenario:  Amuse - Review Order Page - “Thank you …“ message should be displayed on the Order Confirmation page
        Then I should see thank you message
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Review Order Page - The Header/Footer appear on the Order Confirmation Page
        Then I should see the footer
        And I should see logged header icons
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Review Order Page - The Order Tracker should reflect the current state
        Then I should see current state of order
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Review Order Page - The user should be able to view Receipt details
        When I click in view receipt button
        Then I should see receipt
        And I should see discounts in receipt
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Premium_Discounted delivery window - Receipt - The premium delivery window line item appears in the receipt
        Then I see delivery window
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Premium_Discounted delivery window - Receipt - The Discounted delivery window line item and savings disclaimer appear in the receipt
        Then I see savings disclaimer
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Review Order Page - The user should be able to add it to the calendar
        Then I am able to add it to the calendar
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Review Order Page - The user should be able to cancel order
        When I click in cancel order
        Then I should be able to cancel order


