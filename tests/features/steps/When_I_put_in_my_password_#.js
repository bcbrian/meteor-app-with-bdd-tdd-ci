// Recommended filename: When_I_put_in_my_password_#.js
module.exports = function() {
  this.When(/^I put in my password "([^"]*)"$/, function (passowrd) {
    let _el = 'input[type="password"]';
    browser.waitForExist(_el);
    browser.setValue(_el, passowrd);
  });
};
