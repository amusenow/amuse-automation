Feature: Amuse Home - sign up

    As a new user, in the amuse site
    I want to be able to sign up
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Sign Up - All links and fields are present on the Sign Up modal
        Given I am on the home page
        When I navigate to sign up modal
        Then I should be displayed with sigup modal
    @iosBrowser @androidBrowser
    Scenario:  Amuse - Sign Up - The user should be able to Sign Up with valid credentials
        When I enter valid credentials
        Then I should be logged in
    

