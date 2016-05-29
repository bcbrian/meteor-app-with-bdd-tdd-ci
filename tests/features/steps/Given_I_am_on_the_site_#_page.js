// Recommended filename: Given_I_am_on_the_site_#_page.js
module.exports = function() {
  this.Given(/^I am on the site "([^"]*)" page$/, function (location) {
    server.call('fixture:clearDatabase');
    switch (location) {
      case "home not logged in":
        browser.url('http://localhost:3000');
        break;
      case "sign in":
        browser.url('http://localhost:3000/sign-in');
        break;
      default:

    }
  });
};
