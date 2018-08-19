import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
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

        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
          <Row>
            <Col>
              <h1>New Post</h1>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '5%' }}>
          <Row>
            <Col>
              <h4>Add Image</h4>
              <div
                style={{
                  height: '75px',
                  width: '75px',
                  display: 'flex',
                  border: '1px solid black',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <FaCamera size="2em" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '5%' }}>
          <Row>
            <Col>
              <h4>Title</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <input style={{ border: '1px solid black', height: '6vh', width: '90vw' }} />
            </Col>
          </Row>
          <Row>
            <Col>
              <textarea style={{ border: '1px solid black', height: '40vh', width: '90vw', marginTop: '5%' }} />
            </Col>
          </Row>
        </Container>

        <Container style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5%', marginBottom: '5%' }}>
          <Row>
            <Col>
              <Button>Post</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default NewPost;
