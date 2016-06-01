import { Meteor } from "meteor/meteor";

Meteor.startup(function () {
  const USE_TEST_ENVIRONMENT = process.env.USE_TEST_ENVIRONMENT || false;
  if(USE_TEST_ENVIRONMENT){
    console.log("SETTING UP BACKDOOR METHODS");
    var fixtures = require('meteor/bcbrian:test-helpers');
    console.log("FIXTURES: ", fixtures);
    fixtures.setupMeteorBackDoorMethods();
  }
});
