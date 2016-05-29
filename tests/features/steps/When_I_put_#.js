// Recommended filename: When_I_put_#.js
module.exports = function() {
  this.When(/^I put "([^"]*)" in "([^"]*)"$/, function (value, element) {
    browser.waitForExist(element);
    browser.setValue(element, value);
  });
};
