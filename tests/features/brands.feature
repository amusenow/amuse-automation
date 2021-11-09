Feature: Denys Demo: Amuse Home - Brands page

    As a user, in the amuse site
    I want to be able to see brands page

    @iosBrowser @androidBrowser
    Scenario:  Amuse - Brands Page - When a user is on the Brands page
        Given I am on the brands page
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Brands Page - The hero appears with an image on the Brands page
        Then I should see brands hero image
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Brands Page - The Featured Brands module appears on the Brands page in the correct position
        Then I should see brands module
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Brands Page - Brands modules are listed alphabetically on the Brands page
        Then I should see brands listed alphabetically
    