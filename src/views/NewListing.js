import React, { Component } from 'react';
import * as firebase from 'firebase';
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
  Input,
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
      modal: false,
      name: '',
      price: '',
      address: '',
      type: '',
      bed: 0,
      bath: 0,
      description: '',
      pics: [],
      balcony: false,
      pool: false,
      tv: false,
      microwave: false,
      poolTabel: false,
      wifi: false,
      parking: false,
      beachAccess: false,
      gym: false,
      selfCheckIn: false,
      washer: false,
      dryer: false,
      coffeeMaker: false,
      dishwasher: false,
      linens: false
    };
  }

  componentDidMount() {
    console.log('user', firebase.auth());
    // firebase.auth().signInAnonymously();
    // firebase.initializeApp();
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onButtonClick = () => {
    console.log('state', this.state);
    const { currentUser } = firebase.auth();
    console.log('chech check', currentUser);
    const uid = currentUser.uid;
    console.log('user', uid);
    const ref = firebase.database().ref(`properties/${uid}`);
    ref.push(this.state);
  };

  addFile = event => {
    // console.log('event', event.target.files[0].name);
    this.setState({ pics: [...this.state.pics, event.target.files[0].name] });
    console.log('state', this.state);
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
                <Input
                  onChange={event => this.setState({ title: event.target.value })}
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
                  placeholder="Title"
                />
                <Input
                  onChange={event => this.setState({ tagline: event.target.value })}
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
                  placeholder="Tagline"
                />
                <Input
                  onChange={event => this.setState({ price: event.target.value })}
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
                <Input
                  onChange={event => this.setState({ address: event.target.value })}
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
                <Input
                  onChange={event => this.setState({ type: event.target.value })}
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
                <Input
                  onChange={event => this.setState({ bed: event.target.value })}
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
                <Input
                  onChange={event => this.setState({ bath: event.target.value })}
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

                <Input
                  onChange={event => this.setState({ description: event.target.value })}
                  type="textarea"
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
              <Input type="file" onChange={this.addFile} />
              <Button onClick={() => console.log('STATE AGAIN', this.state)}>STATE</Button>
              {/* <div
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
                </div> */}
            </Col>
          </Row>
          {/* <Row style={{ marginBottom: '5%' }}> */}
          {/* <Col>
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
              </Col> */}
          {/* </Row> */}
          {/* <Row style={{ marginBottom: '5%', display: 'flex', flexDirection: 'row' }}>
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
            </Row> */}

          {/* <Row style={{ marginBottom: '5%', display: 'flex', flexDirection: 'row' }}>
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
            </Row> */}
        </Container>

        <Container style={{ marginLeft: '5%', marginTop: '15%' }}>
          <Row>
            <h4>Features</h4>
          </Row>
          <Row>
            <Col>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox
                  checked={this.state.balcony}
                  onChange={() => this.setState({ balcony: !this.state.balcony })}
                  inline
                >
                  {' '}
                  Balcony
                </Checkbox>

                <Checkbox checked={this.state.pool} onChange={() => this.setState({ pool: !this.state.pool })} inline>
                  {' '}
                  Pool
                </Checkbox>

                <Checkbox checked={this.state.tv} onChange={() => this.setState({ tv: !this.state.tv })} inline>
                  {' '}
                  TV
                </Checkbox>

                <Checkbox
                  checked={this.state.microwave}
                  onChange={() => this.setState({ microwave: !this.state.microwave })}
                  inline
                >
                  {' '}
                  Microwave
                </Checkbox>

                <Checkbox
                  checked={this.state.poolTabel}
                  onChange={() => this.setState({ poolTabel: !this.state.poolTabel })}
                  inline
                >
                  {' '}
                  Pool Table
                </Checkbox>
              </FormGroup>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center' }}>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox
                  checked={this.state.washer}
                  onChange={() => this.setState({ washer: !this.state.washer })}
                  inline
                >
                  {' '}
                  Washer
                </Checkbox>
                <Checkbox
                  checked={this.state.dryer}
                  onChange={() => this.setState({ dryer: !this.state.dryer })}
                  inline
                >
                  {' '}
                  Dryer
                </Checkbox>
                <Checkbox
                  checked={this.state.coffeeMaker}
                  onChange={() => this.setState({ coffeeMaker: !this.state.coffeeMaker })}
                  inline
                >
                  {' '}
                  Coffee Maker
                </Checkbox>
                <Checkbox
                  checked={this.state.dishwasher}
                  onChange={() => this.setState({ dishwasher: !this.state.dishwasher })}
                  inline
                >
                  {' '}
                  Dishwasher
                </Checkbox>
                <Checkbox
                  checked={this.state.linens}
                  onChange={() => this.setState({ linens: !this.state.linens })}
                  inline
                >
                  {' '}
                  Linens
                </Checkbox>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup style={{ display: 'flex', flexDirection: 'column' }}>
                <Checkbox value="wifi" onChange={event => console.log('wifi', event.target.checked)} inline>
                  {' '}
                  WiFi
                </Checkbox>
                <Checkbox
                  checked={this.state.parking}
                  onChange={() => this.setState({ parking: !this.state.parking })}
                  inline
                >
                  {' '}
                  Parking
                </Checkbox>
                <Checkbox
                  checked={this.state.beachAccess}
                  onChange={() => this.setState({ beachAccess: !this.state.beachAccess })}
                  inline
                >
                  {' '}
                  Beach Access
                </Checkbox>
                <Checkbox checked={this.state.gym} onChange={() => this.setState({ gym: !this.state.gym })} inline>
                  {' '}
                  Gym
                </Checkbox>
                <Checkbox
                  checked={this.state.selfCheckIn}
                  onChange={() => this.setState({ selfCheckIn: !this.state.selfCheckIn })}
                  inline
                >
                  {' '}
                  Self check-in
                </Checkbox>
              </FormGroup>
            </Col>
          </Row>
          <Row />
        </Container>

        <Container style={{ marginTop: '15%', marginBottom: '15%' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={this.onButtonClick} bsStyle="primary" style={{ height: '50px', width: '90vw' }}>
              POST
            </Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NewListing;
