module.exports = function() {
  this.When(/^I click on "([^"]*)"$/, function (selector) {
    let _el = selector;
    browser.waitForExist(_el);
    browser.click(_el);
  });
};
