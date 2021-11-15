Feature: Amuse Home - location box

  As a user, in the amuse site
  I want to be able to see the location box and interact with it

  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Location box - Suggested Delivery addresses appear as the user types a delivery address into the Change Location modal search box and The user should be able to enter the delivery address to check the availability.
    Given I am on the home page
    When I click in the location box
    And I enter part of address
    Then I should see suggested delivery addresses
