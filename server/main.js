import { Meteor } from "meteor/meteor";

Meteor.startup(function () {
  if (process.env.NODE_ENV === 'development') {
    console.log("IN DEVELOPMENT MODE: ", process.env.NODE_ENV);
  } else {
    console.log("NOT IN DEVELOPMENT MODE: ", process.env.NODE_ENV);
  }

  const USE_TEST_ENVIRONMENT = process.env.USE_TEST_ENVIRONMENT || false;
  if(USE_TEST_ENVIRONMENT){
    console.log("SETTING UP BACKDOOR METHODS");
    var fixtures = require('meteor/bcbrian:test-helpers');
    console.log("FIXTURES: ", fixtures);
    fixtures.setupMeteorBackDoorMethods();
  }
});
