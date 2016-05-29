/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import React, { Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';

import UserProfile from '../client/user-profile.jsx';

if (Meteor.isClient) {
  describe('User Profile UI', () => {
    describe('Render', () => {
      let userProfile;

      beforeEach(() => {
        userProfile = TestUtils.renderIntoDocument(<UserProfile/>);
      });

      it('render', () => {
        assert.isDefined(userProfile,'UserProfile did not render');
      });
    });
  });
}
