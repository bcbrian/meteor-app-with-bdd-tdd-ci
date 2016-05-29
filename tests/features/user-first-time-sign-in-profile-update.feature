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
    And I put "John" in "input#first-name"
    And I put "Doe" in "input#last-name"
    And I put "555-555-5555" in "input#phone-number"

    Then I refresh the page

    And I see "John" in "input#first-name"
    And I see "Doe" in "input#last-name"
    And I see "555-555-5555" in "input#phone-number"

# /tests/features/create-widget.feature
