import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { FlowRouter } from 'meteor/kadira:flow-router';

export class Layout extends React.Component {
  signOut(){
    Meteor.logout(()=>{
      FlowRouter.go("/sign-in");
    })
  }
  render(){
    return (
      <div>
        <header>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="/">bcbrian</a>
          <ul className="nav navbar-nav">
            <li className={"nav-item "+(this.props.isAtHome?"active":"")}>
              <a className="nav-link" href="/">home <span className="sr-only">(current)</span></a>
            </li>
            <li className={"nav-item "+(this.props.isAtSomePage?"active":"")}>
              <a className="nav-link" href="/some-page">some-page</a>
            </li>
            {
              !this.props.user._id ?
              <li id="sign-in" className={"nav-item "+(this.props.isAtSignInPage?"active":"")}>
                <a className="nav-link" href="/sign-in">Sign In</a>
              </li>
              : null
            }
            {
              !this.props.user._id ?
              <li id="sign-up" className={"nav-item "+(this.props.isAtSignUpPage?"active":"")}>
                <a className="nav-link" href="/sign-up">Sign Up</a>
              </li>
              : null
            }
            {
              this.props.user._id ?
              <li id="sign-out" className="nav-item">
                <a className="nav-link" href="#" onClick={this.signOut.bind(this)}>Sign Out</a>
              </li>
              : null
            }
          </ul>
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search"/>
            <button className="btn btn-success-outline" type="submit">Search</button>
          </form>
          </nav>
        </header>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  user: PropTypes.object.isRequired,
};

export default createContainer(() => {
  return {
    user: Meteor.user() ? Meteor.user() : {},
  };
}, Layout);
