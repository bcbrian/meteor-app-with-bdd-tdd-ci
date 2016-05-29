// Recommended filename: Then_I_see_#.js
module.exports = function() {
  this.Then(/^I see "([^"]*)" in "([^"]*)"$/, function (value, element) {
    browser.waitForExist(element);
    expect(browser.getValue(element)).toEqual(value);
  });
};
