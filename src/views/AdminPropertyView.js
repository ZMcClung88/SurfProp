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
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <a href="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#addPostModal">
                  <i className="fas fa-plus" /> Add Property
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="btn btn-success btn-block" data-toggle="modal" data-target="#addCategoryModal">
                  <i className="fas fa-plus" /> Add Category
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" className="btn btn-warning btn-block" data-toggle="modal" data-target="#addUserModal">
                  <i className="fas fa-plus" /> Add Post
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="posts">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Properties</h4>
                  </div>
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Post One</td>
                        <td>Costa Rica</td>
                        <td>May 10 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Post Two</td>
                        <td>Central America</td>
                        <td>May 11 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Post Three</td>
                        <td>Mexico</td>
                        <td>May 13 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Post Four</td>
                        <td>Brazil</td>
                        <td>May 15 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Post Five</td>
                        <td>South America</td>
                        <td>May 17 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Post Six</td>
                        <td>Nicaragua</td>
                        <td>May 20 2018</td>
                        <td>
                          <a href="details.html" className="btn btn-secondary">
                            <i className="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-primary text-white mb-3">
                  <div className="card-body">
                    <h3>Properties</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt" /> 6
                    </h4>
                    <a href="posts.html" className="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>

                <div className="card text-center bg-success text-white mb-3">
                  <div className="card-body">
                    <h3>Categories</h3>
                    <h4 className="display-4">
                      <i className="fas fa-folder" /> 4
                    </h4>
                    <a href="categories.html" className="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>

                <div className="card text-center bg-warning text-white mb-3">
                  <div className="card-body">
                    <h3>Posts</h3>
                    <h4 className="display-4">
                      <i className="fas fa-users" /> 4
                    </h4>
                    <a href="users.html" className="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(PropertyList);
