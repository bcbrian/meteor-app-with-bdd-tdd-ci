import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class SignIn extends Component {
  handleSignIn(event){
    event.preventDefault();
    Meteor.loginWithPassword(this.refs.userEmail.value, this.refs.userPassword.value, ()=>{
      FlowRouter.go("/user/"+Meteor.userId()+"/profile");
    });
  }
  render(){
    return(
      <div className="container">
        <div>
          <h1 id="sign-in-header">Sign In</h1>
        </div>
        <form ref="signInForm" onSubmit={this.handleSignIn.bind(this)}>
          <fieldset className="form-group">
            <label htmlFor="user-email">What is your email address?</label>
            <input ref="userEmail" type="text" className="form-control" id="user-email" name="user-email" placeholder="john.doe@example.com"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="user-pasword">What is you Password?</label>
            <input ref="userPassword" className="form-control" type="password" id="user-password" name="user-password" placeholder="P4s5w0rD!"/>
          </fieldset>
          <fieldset className="form-group">
            <button type="submit" id="sign-in-button" className="btn btn-success form-control">Sign In</button>
          </fieldset>
        </form>
      </div>
    );
  }
};
