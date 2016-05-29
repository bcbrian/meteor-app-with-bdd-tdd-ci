module.exports = function() {
  this.When(/^I click on "([^"]*)"$/, function (selector) {
    browser.waitForExist(selector);
    browser.click(selector);
  });
};
