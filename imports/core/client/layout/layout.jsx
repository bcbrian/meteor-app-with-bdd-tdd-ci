import React from 'react';

export default class Layout extends React.Component {
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
            <li id="sign-in" className={"nav-item "+(this.props.isAtSignInPage?"active":"")}>
              <a className="nav-link" href="/sign-in">Sign In</a>
            </li>
            <li id="sign-up" className={"nav-item "+(this.props.isAtSignUpPage?"active":"")}>
              <a className="nav-link" href="/sign-up">Sign Up</a>
            </li>
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
