Feature: Amuse Home

  As a user, in the amuse site
  I want to be able to see home screen components
  @iosBrowser  #@androidBrowser @web
  Scenario:  Amuse - Home Page - Header - The Amuse logo, links, and icons should be present
    Given I am on the home page
    Then I should see amuse logo
    And I should see normal header icons
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Header - The login icon is clickable and redirect a user to the relevant page
    When I click on login button
    Then I should be displayed with sigin modal
    And I should be able to close it
  #NEW TEST CASES
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Hero - The hero appears with an image on the home page
    Then I should see hero image
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Hero - The hero slide should be clickable //check that is present
    Then hero slide should be clickable
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Category module - The category module appears on the home page
    Then all icons in category module are clickable
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Brand modules - View All links navigate to the correct pages
    Then all links navigate to correct pages
  @iosBrowser #@androidBrowser @web
  Scenario: Amuse - Home Page - Brand modules - User is able to scroll brand modules //check the thrid element is in viewport
    Then I can scroll in brand modules

  #END OF NEW TEST CASES
  @iosBrowser @androidBrowser @web
  Scenario Outline: Amuse - Home Page - Header - The Amuse logo and links should be should be clickable and redirect a user to the relevant page
    When I click on <navbarItem> from navbar
    Then I should be redirect to <navbarItem> page
    And I should <locationFlag> see location box in <navbarItem> page
    And I should see help button

    Examples:
      | navbarItem | locationFlag |
      | shop       | absolutely   |
      | deals      | absolutely   |
      | search     | not          |
      | brands     | absolutely   |



