import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { Random } from 'meteor/random';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { assert } from 'meteor/practicalmeteor:chai';

import React, { Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';

import SignUp from './sign-up.jsx';

import "/imports/test-helpers/methods/flow-router-hack.js"

if (Meteor.isClient) {
  describe('Sign Up UI', () => {
    let signUp;

    beforeEach(() => {
      signUp = TestUtils.renderIntoDocument(<SignUp/>);
    });

    describe('Render', () => {
      it('render', () => {
        assert.isDefined(signUp,'SignUp did not render');
      });
    });
    describe('Methods', () => {
      let signUpForm, userEmail, userPassword, userVerifyPassword;

      beforeEach(() => {
        signUpForm = signUp.refs.signUpForm;
        userEmail = signUp.refs.userEmail;
        userPassword = signUp.refs.userPassword;
        userVerifyPassword = signUp.refs.userVerifyPassword;

        stubs.create("createUserStub", Accounts, "createUser");
        stubs.createUserStub.func=(options, callback)=>{return callback();};

        stubs.create("user", Meteor, "user");
        stubs.user.func=()=>{return {profile:{type:"user"}};};

        stubs.create("userId", Meteor, "userId");
        stubs.userId.func=()=>{return "someid";};

        stubs.create("flowRouterGo", FlowRouter, "go");
        stubs.flowRouterGo.func=()=>{return true;};
      });

      afterEach(()=>{
        stubs.restoreAll();
      });

      it('handleSignUp with user', () => {
        userEmail.value = "testuser@bcbrian.com";
        TestUtils.Simulate.change(userEmail);
        userPassword.value = "testPassword";
        TestUtils.Simulate.change(userPassword);
        userVerifyPassword.value = "testPassword";
        TestUtils.Simulate.submit(signUpForm);

        assert.isTrue(stubs.createUserStub.calledOnce, "createUserStub was not called once");
        assert.isTrue(stubs.flowRouterGo.calledOnce, "flowRouterGo was not called once");
        assert.isTrue(stubs.flowRouterGo.calledWith("/user/someid/profile"), "flowRouterGo was not called with, /user/someid/profile");
      });
    });
  });
}
