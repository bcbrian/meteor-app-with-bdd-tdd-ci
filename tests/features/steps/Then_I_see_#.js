// Recommended filename: Then_I_see_#.js
module.exports = function() {
  this.Then(/^I see "([^"]*)" in "([^"]*)"$/, function (value, selector) {
    browser.waitForExist(selector);
    expect(browser.getValue(selector)).toEqual(value);
  });
};
