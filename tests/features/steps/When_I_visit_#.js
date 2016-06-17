// Recommended filename: When_I_visit_#.js
module.exports = function() {
  this.When(/^I visit "([^"]*)"$/, function (location) {
    browser.url('http://localhost:3000'+location);
  });
};
