/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
// Accounts.createUser({email:email,password:password});
// Meteor.loginWithPassword(email, password);
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { stubs } from 'meteor/practicalmeteor:sinon';

import React, { Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';

import SignIn from './sign-in.jsx';

import "/imports/test-helpers/methods/flow-router-hack.js"

if (Meteor.isClient) {
  describe('Sign In UI', () => {
    let signIn;

    beforeEach(() => {
      signIn = TestUtils.renderIntoDocument(<SignIn/>);
    });
    describe('Render', () => {

      it('render', () => {
        assert.isDefined(signIn,'SignIn did not render');
      });
    });
    describe('Methods', () => {
      let signInForm, userEmail, userPassword;

      beforeEach(() => {
        signInForm = signIn.refs.signInForm;
        userEmail = signIn.refs.userEmail;
        userPassword = signIn.refs.userPassword;

        stubs.create("loginWithPasswordStub", Meteor, "loginWithPassword");
        stubs.loginWithPasswordStub.func=(user, password, callback)=>{
          return callback();
        };

        stubs.create("user", Meteor, "user");
        stubs.user.func=()=>{return {profile:{type:"user"}};};

        stubs.create("userId", Meteor, "userId");
        stubs.userId.func=()=>{return "someid";};

        stubs.create("flowRouterGo", FlowRouter, "go");
        stubs.flowRouterGo.func=()=>{return true;};
      });

      afterEach(()=>{
        stubs.restoreAll();
      })

      it('handleSignIn with recruiter', () => {

        userEmail.value = "testrecruiter@recruiterswelcome.com";
        TestUtils.Simulate.change(userEmail);
        userPassword.value = "testPassword";
        TestUtils.Simulate.change(userPassword);
        TestUtils.Simulate.submit(signInForm);

        assert.isTrue(stubs.loginWithPasswordStub.calledOnce, "was not called once");
        assert.isTrue(stubs.flowRouterGo.calledOnce, "flowRouterGo was not called once");
        assert.isTrue(stubs.flowRouterGo.calledWith("/user/someid/profile"), "flowRouterGo was not called with, /user/someid/profile");
      });
    });
  });
}
