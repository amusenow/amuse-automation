Feature: Amuse Home - location box

  As a user, in the amuse site
  I want to be able to see the location box and interact with it

  @iosBrowser @androidBrowser
  Scenario:  Amuse - Location box - Suggested Delivery addresses appear as the user types a delivery address into the Change Location modal search box
    Given I am on the home page
    When I click in the location box
    And I enter part of address
    Then I should see suggested delivery addresses

  @iosBrowser @androidBrowser
  Scenario:  Amuse - Location box - The user should be able to enter the delivery address to check the availability.
    When I select an address
    Then I should see available products