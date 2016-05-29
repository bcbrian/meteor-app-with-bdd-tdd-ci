// Recommended filename: Then_I_sign_out.js
module.exports = function() {
  this.Then(/^I sign out$/, function () {
    let selector = 'li#sign-out a[href="#"]'
    browser.waitForExist(selector);
    browser.click(selector);
  });
};
