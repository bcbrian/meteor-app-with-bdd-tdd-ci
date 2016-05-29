Feature: User First Time Sign In

  As a user signing in for the first time,
  so that I can set up my account,
  I want to be able to set up my account.

  Background:
    Given I am on the site "home not logged in" page

  Scenario: User is signing in
    When I click on "a[href='/sign-in']"
    And I put in my user name "testuser@bcbrian.com"
    And I put in my password "testpassword"
    And I click on "button#sign-in-button"
    Then I should not see "a[href='/sign-in']"
    And I should not see "a[href='/sign-up']"
    And I should see "li#sign-out.nav-item"

# /tests/features/create-widget.feature
