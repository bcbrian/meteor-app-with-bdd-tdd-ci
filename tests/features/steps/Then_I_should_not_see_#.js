// Recommended filename: Then_I_should_not_see_#.js
module.exports = function() {
  this.Then(/^I should not see "([^"]*)"$/, function (selector) {
    // browser.waitForExist(selector, time(ms), reverse);
    browser.waitForExist(selector, 500, true);// -> waiting for it to not exist
  });
};
