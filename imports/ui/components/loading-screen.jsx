import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { LoadingCounter } from '/imports/api/loadingCounter/loadingCounter.js';

export class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    if(this.props.waitingOn < 1){
      return  (
        <div id="loaderContainerHolder">
        </div>
      )
    } else {
      return  (
        <div id="loaderContainer">
          <div id="loader">
            <p id="loadingText">Loading</p>
          </div>
        </div>
      )
    }
  }
}
LoadingScreen.propTypes = {
  waitingOn: PropTypes.number.isRequired,
};

export default createContainer(() => {
  let waitingOn = 0;
  let lc = LoadingCounter.findOne({});
  console.log('LC: ', lc);
  if(lc && lc.waitingOn){
    waitingOn = lc.waitingOn;
  }
  return { waitingOn, };
}, LoadingScreen);
