import React, { Component } from 'react';
import { Button, FormGroup, Checkbox } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import {
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

class NewListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

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

        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '15%' }}>
          <Row>
            <Col>
              <h1>NEW LISTING</h1>
            </Col>
          </Row>
        </Container>

        <Container style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
          <Row>
            <Col>
              <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Name"
                />
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Price"
                />
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Address"
                />
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Type"
                />
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Bed"
                />
                <input
                  style={{
                    width: '80vw',
                    height: '36px',
                    paddingLeft: '20px',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  type="text"
                  placeholder="Bath"
                />

                <textarea
                  style={{
                    width: '80vw',
                    height: '30vh',
                    paddingLeft: '20px',
                    paddingTop: '5%',
                    marginTop: '5%',
                    border: '1px solid grey',
                    borderRadius: '3%',
                    outlineColor: 'lightblue'
                  }}
                  placeholder="Description..."
                />
              </form>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '15%', marginLeft: '5%', display: 'flex', flexDirection: 'column' }}>
          <Row>
            <h4>Add Image</h4>
          </Row>
          <Row style={{ marginBottom: '5%' }}>
            <Col>
              <h6>Main</h6>
              <div
                style={{
                  height: '75px',
                  width: '75px',
                  display: 'flex',
                  border: '1px solid black',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: '5%'
                }}
              >
                <FaCamera size="2em" />
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: '5%' }}>
            <Col>
              <h6>Living area</h6>
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>
                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>
                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: '5%', display: 'flex', flexDirection: 'row' }}>
            <Col>
              <h6>Beds</h6>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>

                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ marginBottom: '5%', display: 'flex', flexDirection: 'row' }}>
            <Col>
              <h6>Baths</h6>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div
                  style={{
                    height: '75px',
                    width: '75px',
                    display: 'flex',
                    border: '1px solid black',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '5%'
                  }}
                >
                  <FaCamera size="2em" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginLeft: '5%', marginTop: '15%' }}>
          <Row>
            <h4>Features</h4>
          </Row>
          <Row>
            <Col>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox inline> Balcony</Checkbox>
                <Checkbox inline> Pool</Checkbox>
                <Checkbox inline> TV</Checkbox>
                <Checkbox inline> Microwave</Checkbox>
                <Checkbox inline> Pool Table</Checkbox>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox inline> WiFi</Checkbox>
                <Checkbox inline> Parking</Checkbox>
                <Checkbox inline> Beach Access</Checkbox>
                <Checkbox inline> Gym</Checkbox>
                <Checkbox inline> Self check-in</Checkbox>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox inline> Washer</Checkbox>
                <Checkbox inline> Dryer</Checkbox>
                <Checkbox inline> Coffee Maker</Checkbox>
                <Checkbox inline> Dishwasher</Checkbox>
                <Checkbox inline> Linens</Checkbox>
              </FormGroup>
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '15%', marginBottom: '15%' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Button bsStyle="primary" style={{ height: '50px', width: '90vw' }}>
              POST
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewListing;
