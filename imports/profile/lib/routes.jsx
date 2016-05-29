import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import Layout from '../../core/client/layout/layout.jsx';
import SignUp from '../client/sign-up.jsx';
import SignIn from '../client/sign-in.jsx';
import Profile from '../client/profile.jsx';

FlowRouter.route('/sign-up', {
  action() {
    mount(Layout, {
      content: <SignUp />,
      isAtSignUpPage: true
    });
  }
});

FlowRouter.route('/sign-in', {
  action() {
    mount(Layout, {
      content: <SignIn />,
      isAtSignInPage: true
    });
  }
});

FlowRouter.route('/:userType/:userId/profile', {
  action(params) {
    console.log("PARAMS: ", params);
    console.log("Meteor.loggingIn(): ", Meteor.loggingIn());
    console.log("Meteor.userId(): ", Meteor.userId());
    if(!Meteor.loggingIn() && !Meteor.userId()){
      FlowRouter.go("/sign-in");
      return;
    }
    mount(Layout, {
      content: <Profile params={params}/>,
      isAtSomePage: true
    });
  }
});
