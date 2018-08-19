import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">surfProp</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-auto">
                <NavLink tag={Link} to="/properties">
                  BUY
                </NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink href="#">SELL</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink href="#">RENT</NavLink>
              </NavItem>
              <NavItem className="ml-auto">
                <NavLink href="#">BLOG</NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
        <h1>NEW POST BIATCH</h1>
      </div>
    );
  }
}
export default NewPost;
