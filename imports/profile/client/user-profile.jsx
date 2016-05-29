import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = this.getStateFromProps(props);
  }
  componentWillReceiveProps(nextProps){
    this.setState(this.getStateFromProps(nextProps));
  }
  getStateFromProps(props){
    return {
      firstName: props.user && props.user.profile ? props.user.profile.firstName : "",
      lastName: props.user && props.user.profile ? props.user.profile.lastName : "",
      phoneNumber: props.user && props.user.profile ? props.user.profile.phoneNumber : "",
    };
  }
  handleUpdateOfProfileField(key, event){
    let profileKey = "profile."+key;
    let value = event.target.value;
    Meteor.users.update( { _id: Meteor.userId() }, { $set: { [profileKey]: value }} );
  }
  render(){
    return(
      <div className="container UserProfile">
        <div>
          <h1 id="profile-header">Profile</h1>
        </div>
        <form>
          <fieldset className="form-group">
            <label htmlFor="first-name">What is your first name?</label>
            <input onChange={this.handleUpdateOfProfileField.bind(this, "firstName")} value={this.state.firstName} type="text" className="form-control" id="first-name" name="first-name" placeholder="John"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="last-name">What is your last name?</label>
            <input onChange={this.handleUpdateOfProfileField.bind(this, "lastName")} value={this.state.lastName} type="text" className="form-control" id="last-name" name="last-name" placeholder="Doe"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="phone-number">What is your phone-number?</label>
            <input onChange={this.handleUpdateOfProfileField.bind(this, "phoneNumber")} value={this.state.phoneNumber} className="form-control" type="text" id="phone-number" name="phone-number" placeholder="555-555-5555"/>
          </fieldset>
          <fieldset className="form-group">
            <button id="update-profile-button" className="btn btn-success htmlForm-control">Update Profile</button>
          </fieldset>
        </form>
      </div>
    );
  }
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default createContainer(() => {
  return {
    user: Meteor.user() ? Meteor.user() : {},
  };
}, UserProfile);
