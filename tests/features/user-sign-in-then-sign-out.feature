Feature: User First Time Sign In

  As a user signing in for the first time,
  so that I can set up my account,
  I want to be able to set up my account.

  Background:
    Given I am on the site "home not logged in" page
  @focus
  Scenario: User is on sign in page
    When I click on "a[href='/sign-in']"
    And I put in my user name "testuser@bcbrian.com"
    And I put in my password "testpassword"
    And I click on "button#sign-in-button"
    Then I sign out
    Then I redirect to "/sign-in" and see "h1#sign-in-header"

# /tests/features/create-widget.feature
