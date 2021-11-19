Feature: Amuse Home - product detail

  As a user, in the amuse site
  I want to be able to see product detail page
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page
    Given I am on the shop page
    When I click in the location box
    And I select last address
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - The Header/Footer and Location box appear on the Product Detail page
    When I click on a product
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - The Header/Footer and Location box appear on the Product Detail page
    Then I should see header and footer
    And I should absolutely see location box in productDetail page
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - The product details, Product Name, Product description, Price should appear.
    Then I should see product details
    And I should see product price
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - The product detail page should include the following components in the Info Module: Category, Subcategory, Classification, Safety, THC %, CBD %
    Then I should see product info module
  @iosBrowser @androidBrowser
  Scenario:  Amuse - Product Detail Page - The product image should appear. Zoom In and Carousel functionalities works properly.
    When I double click in the image
    Then Image should zoom
    And I swipe to see in Carousel diferent images of product
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - When I have one or more products in my cart, the microcart is displayed
    Given I am logged in
    And I add a product
    Then the microcart is displayed
  @iosBrowser @androidBrowser @web
  Scenario:  Amuse - Product Detail Page - The user should be able to add (decrease/delete) the product to the cart. 
    When I decrease the product
    And I delete product
    Then Add to Cart button should display
  



