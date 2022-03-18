Feature: Amuse Home - deals page

    As a user, in the amuse site
    I want to be able to see deals page

    @iosBrowser #@androidBrowser @web
    Scenario:  Amuse - Deals Page - The Header/Footer and Location box appear on the Deals page
        Given I am on the home page
        When I click in the deals page
        Then I should see header and footer
    @iosBrowser #@androidBrowser @web
    Scenario:  Amuse - Deals Page - When a user is on the Deals page, the Deals link should be in the active state
        Then I should see deals icon in active state
    @iosBrowser #@androidBrowser @web
    Scenario:  Amuse - Deals Page - The hero appears with an image on the Deals page
        Then I should see hero image
    @iosBrowser @androidBrowser @web
    Scenario:  Amuse - Deals Page - All deal modules appear on the Deals page in the correct position
        Given I am on the home page
        When I click in the deals page
        Then I should see all deals module
    @iosBrowser #@androidBrowser @web
    Scenario:  Amuse - Brands Page - All brand links navigate user to the correct brand page
        Then Links redirect to brands page