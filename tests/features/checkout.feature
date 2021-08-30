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
        Then I should see cart module
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - Items and Subtotal should be displayed in the Cart module.
        Then I should see subtotal
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Checkout - Checkout Details Page - The Checkout page Continue button should appear in the enabled state when all delivery options are correct.
        