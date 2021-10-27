Feature: Amuse Home - login

  As a user, in the amuse site
  I want to be able to login
  
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Login - All links and fields are present on the Login modal
    Given I am on the home page
    When I click on login button
    Then I should be displayed with sigin modal
    
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Login - Login with valid credentials
    When I set valid email
    And I set valid password
    Then I should be logged in
