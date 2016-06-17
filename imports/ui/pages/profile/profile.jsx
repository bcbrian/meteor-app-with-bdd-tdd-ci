import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import UserProfile from './user-profile.jsx';

export default class Profile extends Component {
  render(){
    return <UserProfile />;
    // This is setup this what to support multiple types, not persions, of users
    // ie, maybe you app has sellers and buys but you screen sellers
    // and it is a different account from sellers. Porbably rare cases.
    /*
    if(this.props.params.userType === "user"){
      return <UserProfile />;
    }
    */
  }
};
