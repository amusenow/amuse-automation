Feature: Amuse Home - product detail

  As a user, in the amuse site
  I want to be able to see product detail page
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Product Detail Page - The Header/Footer and Location box appear on the Product Detail page
    Given I am on the home page
    When I click on a product
    Then I should see header and footer
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Product Detail Page - The product details, Product Name, Product description, Price should appear.
    Then I should see product details
    And I should see product price
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Product Detail Page - The product detail page should include the following components in the Info Module: Category, Subcategory, Classification, Safety, THC %, CBD %
    Then I should see product info module


