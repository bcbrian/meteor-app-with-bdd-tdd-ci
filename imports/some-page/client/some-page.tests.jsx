/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import React, { Component, PropTypes} from 'react';
import TestUtils from 'react-addons-test-utils';

import SomePage from '../client/some-page.jsx';

import "/imports/test-helpers/methods/flow-router-hack.js"

if (Meteor.isClient) {
  describe('SomePage UI', () => {
    describe('Render', () => {
      const userId = Random.id();
      let myTask,
          theirTask,
          investigateSchedules;

      beforeEach(() => {
        somePage = TestUtils.renderIntoDocument(<SomePage/>);
      });

      it('render', () => {
        // Verify that the method does what we expected
        assert.isDefined(somePage,'investigateSchedules did not render');
      });
    });
  });
}
