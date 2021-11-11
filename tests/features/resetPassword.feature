 Feature: Amuse Home - reset password

  As a user, in the amuse site
  I want to be able to reset my password

 @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Login - All links and fields are present on the Login modal
    Given I am on the home page
    When I click on login button
    And I click reset password
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Login - Reset Password
    When I enter valid email
    Then I should see reset modal confirmation