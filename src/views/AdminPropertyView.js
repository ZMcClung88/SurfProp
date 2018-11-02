import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Map from '../components/Map';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Collapse,
  Container,
  Input,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Row
} from 'reactstrap';
import Dropdown from '../components/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PropertyList extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
          <div className="container">
            <a href="index.html" className="navbar-brand">
              Surf Property
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav">
                <li className="nav-item px-2">
                  <a href="index.html" className="nav-link active">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="posts.html" className="nav-link">
                    Posts
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="categories.html" className="nav-link">
                    Categories
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a href="users.html" className="nav-link">
                    Users
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown mr-3">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                    <i className="fas fa-user" /> Welcome Mark
                  </a>
                  <div className="dropdown-menu">
                    <a href="profile.html" className="dropdown-item">
                      <i className="fas fa-user-circle" /> Profile
                    </a>
                    <a href="settings.html" className="dropdown-item">
                      <i className="fas fa-cog" /> Settings
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">
                    <i className="fas fa-user-times" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header id="main-header" className="py-2 bg-primary text-white">
          <div class="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <FontAwesomeIcon name="rocket" /> Dashboard
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(PropertyList);
