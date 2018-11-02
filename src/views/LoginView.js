import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardText, Input } from 'reactstrap';
import firebase from 'firebase';
import Spinner from 'react-spinkit';
import { BrowserRouter as Router, Redirect, Link, Route, Switch, withRouter } from 'react-router-dom';
import { loginSuccess } from '../actions';

import HomeView from './HomeView';

class LoginView extends Component {
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

        <header id="main-header" class="py-2 bg-primary text-white">
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
        <div class="container">
          <div class="row">
            <div class="col-md-6 mx-auto pt-5">
              <div class="card">
                <div class="card-header">
                  <h4>Admin Login</h4>
                </div>

                <div class="card-body">
                  <form action="index.html">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" />
                    </div>
                    <input type="submit" value="Login" class="btn btn-primary btn-block" />
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
