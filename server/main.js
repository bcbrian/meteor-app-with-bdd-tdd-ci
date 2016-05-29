import { Meteor } from "meteor/meteor";
import { setupMeteorBackDoorMethods } from "meteor/bcbrian:test-helpers"

Meteor.startup(function () {
  const USE_TEST_ENVIRONMENT = process.env.USE_TEST_ENVIRONMENT || false;
  if(USE_TEST_ENVIRONMENT){
    console.log("SETTING UP BACKDOOR METHODS");
    setupMeteorBackDoorMethods();
  }
});
