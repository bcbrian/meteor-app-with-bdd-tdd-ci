Feature: Sign up

  As a visitor to the site,
  so that I can use the app,
  I want to be able to sign up.

  Background:
    Given I am on the site "home not logged in" page

  Scenario: Visitor is on sign in/up page
    When I visit "/sign-in"
    Then I should see "li#sign-in.active"
    When I visit "/sign-up"
    Then I should see "li#sign-up.active"

# /tests/features/create-widget.feature
