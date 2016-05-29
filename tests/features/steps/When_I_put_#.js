// Recommended filename: When_I_put_#.js
module.exports = function() {
  this.When(/^I put "([^"]*)" in "([^"]*)"$/, function (value, selector) {
    browser.waitForExist(selector);
    browser.setValue(selector, value);
  });
};
