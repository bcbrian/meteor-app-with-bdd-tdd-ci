Feature: Sign up

  As a visitor to the site,
  so that I can use the app,
  I want to be able to sign up.

  Background:
    Given I am on the site "home not logged in" page
  @focus
  Scenario: Visitor is on sign in/up page
    When I click on "a[href='/sign-up']"
    Then I should see "h1#sign-up-header"
    And I should see "input#user-email"
    And I should see "input#user-password"
    And I should see "input#user-verify-password"
    And I should see "button#sign-up-button"

# /tests/features/create-widget.feature
