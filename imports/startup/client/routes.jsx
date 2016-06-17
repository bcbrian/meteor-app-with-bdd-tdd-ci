import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import { Layout } from "/imports/ui/layouts";
import { Home } from "/imports/ui/pages/home-page";
import { Profile, SignIn, SignUp } from "/imports/ui/pages/profile";
import { SomePage } from "/imports/ui/pages/some-page";

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (<Home />),
      isAtHome: true
    });
  }
});

FlowRouter.route('/some-page', {
  action() {
    mount(Layout, {
      content: <SomePage />,
      isAtSomePage: true
    });
  }
});
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
    if(!Meteor.loggingIn() && !Meteor.userId()){
      FlowRouter.go("/sign-in");
      return;
    }
    mount(Layout, {
      content: <Profile params={params}/>,
    isAtProfilePage: true
    });
  }
});
