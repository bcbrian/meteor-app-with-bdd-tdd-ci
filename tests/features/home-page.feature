Feature: Sign up

  As a visitor to the site,
  so that I can use the app,
  I want to be able to sign up.

  Background:
    Given I am on the site "home not logged in" page

  Scenario: Visitor is on sign in/up page
    Then I should see "a.navbar-brand"
    And I should see "a[href='/sign-in']"
    And I should see "a[href='/sign-up']"

# /tests/features/create-widget.feature
