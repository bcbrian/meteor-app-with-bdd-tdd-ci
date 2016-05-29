Feature: Redirect from protected sites

  As a visitor to the site,
  If I try to visit protected pages,
  I am redirected to the sign in page.

  Background:
    Given I am on the site "home not logged in" page
  @focus
  Scenario: Visitor is on home page
    When I visit "/user/fakeId38yyf/profile"
    Then I redirect to "/sign-in" and see "h1#sign-up-header"

# /tests/features/create-widget.feature
