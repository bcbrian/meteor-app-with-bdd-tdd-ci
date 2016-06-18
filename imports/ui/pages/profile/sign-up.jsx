import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import { FlowRouter } from 'meteor/kadira:flow-router';

export default class SignUp extends Component {
  handleSignUp(event){
    event.preventDefault();
    Accounts.createUser(
      {
        email:this.refs.userEmail.value,
        password:this.refs.userPassword.value,
        profile:{
          type:"user",
        }
      },
      ()=>{
        FlowRouter.go("/user/"+Meteor.userId()+"/profile");
      }
    );
  }
  render(){
    return(
      <div className="container">
        <div>
          <h1 id="sign-up-header">Sign Up</h1>
        </div>
        <form ref="signUpForm" onSubmit={this.handleSignUp.bind(this)}>
          <fieldset className="form-group">
            <label htmlFor="user-email">What is your email address?</label>
            <input ref="userEmail" type="text" className="form-control" id="user-email" name="user-email" placeholder="john.doe@example.com"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="user-pasword">What is you Password?</label>
            <input ref="userPassword" className="form-control" type="password" id="user-password" name="user-password" placeholder="P4s5w0rD!"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="user-verify-password">What did you say your password was?</label>
            <input ref="userVerifyPassword" className = "form-control" type="password" id="user-verify-password" name="user-verify-password" placeholder="P4s5w0rD!"/>
          </fieldset>
          <fieldset className="form-group">
            <button id="sign-up-button" className="btn btn-success form-control">Sign Up</button>
          </fieldset>
        </form>
      </div>
    );
  }
};
