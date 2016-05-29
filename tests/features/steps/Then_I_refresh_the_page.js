// Recommended filename: Then_I_refresh_the_page.js
module.exports = function() {
  this.Then(/^I refresh the page$/, function () {
    browser.refresh();
  });
};
