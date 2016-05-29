module.exports = function() {
  this.Then(/^I should see "([^"]*)"$/, function (selector) {
    let _el = selector;
    browser.waitForExist(_el);
  });
};
