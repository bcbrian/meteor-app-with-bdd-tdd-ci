// Write your package code here!
import { Accounts } from 'meteor/accounts-base';
import { resetDatabase } from 'meteor/xolvio:cleaner';

export function setupMeteorBackDoorMethods(){
  Meteor.methods({
    "fixture:clearDatabase"(){
      try{
        resetDatabase(null);
      }catch(error){
        console.log("ERROR RESETING DB: ", error);
      }
    },
    "fixture:addUser"(email, password, profile){
      let username = email;
      try{
        let user = Accounts.createUser({username, email, password, profile});
      }catch(error){
        console.log("ERROR ADDING USER: ", error);
      }
    },
  });
};
