import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class SomePage extends Component {
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Some Page!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="m-y-2"/>
          <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
};
