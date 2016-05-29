module.exports = function() {
  this.Then(/^I should see "([^"]*)"$/, function (selector) {
    browser.waitForExist(selector);
  });
};
