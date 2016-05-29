// Recommend// Recommended filename: When_I_put_in_my_user_name_#.js
module.exports = function() {
  this.When(/^I put in my user name "([^"]*)"$/, function (email) {
    server.call(
      'fixture:addUser',
      email,
      "testpassword",
      {type:"user"}
    );
    let _el = 'input#user-email';
    browser.waitForExist(_el);
    browser.setValue(_el, email);
  });
};
