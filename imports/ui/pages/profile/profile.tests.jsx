/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { stubs } from 'meteor/practicalmeteor:sinon';

import React, { Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';

import Profile from './profile.jsx';
import UserProfile from './user-profile.jsx';

import "/imports/test-helpers/methods/flow-router-hack.js"

if (Meteor.isClient) {
  describe('Profile UI', () => {
    let profile;
    describe('Render', () => {
      beforeEach(() => {
        profile = TestUtils.renderIntoDocument(<Profile params={{userType:"job-poster"}}/>);
      });

      it('render', () => {
        assert.isDefined(profile,'Profile did not render');
      });
    });
    describe('Render for User', () => {
      beforeEach(() => {
        profile = TestUtils.renderIntoDocument(<Profile params={{userType:"user"}}/>);
      });

      it('render', () => {
        assert.isDefined(profile,'Profile did not render');
        assert.isTrue(TestUtils.scryRenderedDOMComponentsWithClass(
          profile,
          "UserProfile"
        ).length === 1,'UserProfile was not rendered');
      });
    });
  });
}
