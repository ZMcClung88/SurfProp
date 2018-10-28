import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  Col,
  Collapse,
  Container,
  Link,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Row,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Logo from '../media/4a8dfe302137ea75d20d9e9e23a46c47_taal-volcano-tagaytay-vacation-house-in-philippines-tagaytay-vacation-house-clipart_2548-1482.svg';

class MainNavbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container">
            <a href="index.html" class="navbar-brand">
              SurfProperty
            </a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
const styles = {
  logoStyle: {
    backgroundImage: `url(${Logo})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 25,
    width: 25
  }
};

export default MainNavbar;
