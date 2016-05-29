// Recommended filename: When_I_put_in_my_password_#.js
module.exports = function() {
  this.When(/^I put in my password "([^"]*)"$/, function (passowrd) {
    let selector = 'input[type="password"]';
    browser.waitForExist(selector);
    browser.setValue(selector, passowrd);
  });
};
