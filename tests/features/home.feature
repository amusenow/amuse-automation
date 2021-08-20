Feature: Amuse Home

  As a user, in the amuse site
  I want to be able to see home screen components
  @iosBrowser  @androidBrowser
  Scenario:  Amuse - Home Page - Header - The Amuse logo, links, and icons should be present
    Given I am on the home page
    Then I should see amuse logo
    And I should see header icons
  @iosBrowser @androidBrowser
  Scenario: Amuse - Home Page - Header - The login icon is clickable and redirect a user to the relevant page
    When I click on login button
    Then I should be displayed with sigin modal
    And I should be able to close it

  @iosBrowser @androidBrowser
  Scenario Outline: Amuse - Home Page - Header - The Amuse logo and links should be should be clickable and redirect a user to the relevant page
    When I click on <navbarItem> from navbar
    Then I should be redirect to <navbarItem> page
    And I should <locationFlag> see location box in <navbarItem> page


    Examples:
      | navbarItem | locationFlag |
      | shop       | absolutely   |
      | deals      | absolutely   |
      | search     | not          |
      | profile    | not          |


