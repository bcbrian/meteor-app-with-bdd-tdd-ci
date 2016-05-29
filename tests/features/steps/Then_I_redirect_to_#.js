// Recommended filename: Then_I_redirect_to_#.js
module.exports = function() {
  this.Then(/^I redirect to "([^"]*)" and see "([^"]*)"$/, function (location, selector) {
    // Write the automation code here
    browser.waitForExist(selector);
    expect(browser.url().value).toEqual('http://localhost:3000'+location);
  });
};
