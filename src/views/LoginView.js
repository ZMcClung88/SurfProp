import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardText, Input } from 'reactstrap';
import firebase from 'firebase';
import Spinner from 'react-spinkit';
import { BrowserRouter as Router, Redirect, Link, Route, Switch, withRouter } from 'react-router-dom';
import { loginSuccess } from '../actions';

import HomeView from './HomeView';

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange = e => {
    let email = e.target.value;
    this.setState({ email });
    console.log('email', this.state.email);
  };

  onPasswordChange = e => {
    let password = e.target.value;
    this.setState({ password });
    console.log('password', this.state.password);
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              Surf Property
            </a>
          </div>
        </nav>

        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-user" /> SP Admin
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto pt-5">
              <div className="card">
                <div className="card-header">
                  <h4>Admin Login</h4>
                </div>

                <div className="card-body">
                  <form action="index.html">
                    <div className="form-group">
                      <label for="email">Email</label>
                      <input onChange={this.onEmailChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input onChange={this.onPasswordChange} type="password" className="form-control" />
                    </div>
                    <input type="submit" value="Login" className="btn btn-primary btn-block" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
