import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import config from '../config';
import Map from '../components/Map';
import Marker from '../components/Marker';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardImgOverlay,
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

import { propertyFetch } from '../actions';
import BeachHouse1 from '../media/arno-smit-141735-unsplash.jpg';
import BeachHouse2 from '../media/niv-rozenberg-356666-unsplash.jpg';
import BeachHouse3 from '../media/tim-cook-97924-unsplash.jpg';
import BeachHouse4 from '../media/sterling-davis-513094-unsplash.jpg';
import BlueMapMarker from '../media/bluemapmarker.png';

class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
      picView: true,
      toggleView: true,
      properties: []
    };
  }

  componentWillMount = () => {
    // firebase.initializeApp(config);
  };

  componentDidMount = () => {
    this.props.propertyFetch();
    // const currentUser = firebase.auth();
    // console.log('please work', currentUser);
    //
    // firebase
    //   .database()
    //   .ref(`properties`)
    //   .on('value', snapshot => {
    //     this.setState({ properties: [...this.state.properties, snapshot.val()] });
    //     console.log('snapshot state', this.state);
    //   });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggle2 = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  onClick = () => {
    console.log(this.state.toggleView);
    this.setState({
      toggleView: true
    });
  };

  getProperties = props => {
    const { address } = this.props;
    console.log('addy', this.props);
    console.log(
      'get properties',
      _.map(this.props, item => {
        const address = item;
        return address;
      })
    );
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
          <NavbarBrand href="/">SurfProperty</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/properties">
                  BUY
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">SELL</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">RENT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Container style={{ marginLeft: '-15px', width: '100vw' }}>
          <Row>
            <Col>
              <div style={{ width: '50vw', height: '100vh' }}>
                <Map height="100vh" width="100vw" />
              </div>
            </Col>
          </Row>
        </Container>

        {/* <Container
          style={{
            height: '100px',
            width: '100%',
            backgroundColor: 'lightgrey'
          }}
        >
          <Row style={{ justifyContent: 'center' }}>
            <Input
              placeholder="Address, City, State, Zip"
              style={{ width: '80vw', height: '25px', marginTop: '3%', marginBottom: '3%' }}
            />
            <Dropdown title="BUY" />
            <Dropdown title="TYPE" />
            <Dropdown title="MIN PRICE" />
            <Dropdown title="MAX PRICE" />
          </Row>
        </Container> */}

        <Container>
          <Row
            className="d-md-none"
            style={{ marginTop: '15%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '18px' }}>Intoducing Surf Propertiess</h1>
            <p style={{ fontSize: '12px' }}>
              Donec dignissim dignissim sapien vel semper. Morbi consequat vel sapien eu tempus. Donec sapien metus,
              venenatis sit amet finibus quis, tempus in lectus.
            </p>
          </Row>
          <Row
            className="d-none d-md-block"
            style={{ marginTop: '15%', display: 'flex', justifyContent: 'center', textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '32px' }}>Intoducing Surf Propertiess</h1>
            <p style={{ fontSize: '22px' }}>
              Donec dignissim dignissim sapien vel semper. Morbi consequat vel sapien eu tempus. Donec sapien metus,
              venenatis sit amet finibus quis, tempus in lectus.
            </p>
          </Row>

          {/* <Container>
            <Button>linear</Button>
            <Button onClick={this.toggleView}>grid</Button>
            <h1>{this.state.properties}</h1>
          </Container> */}

          {this.getProperties()}

          {this.state.toggleView ? (
            <Container id="linear">
              <Row style={{ justifyContent: 'center', marginTop: '20%' }}>
                {/* <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg top width="auto" height="100%" src={BeachHouse1} alt="Card image cap" />
                  <CardImgOverlay style={{ display: 'flex', flexDirection: 'column' }}>
                    <CardText
                      style={{
                        color: '#fff',
                        fontSize: '24',
                        fontWeight: 'bolder',
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      Playa Del Sol
                    </CardText>
                    <CardText
                      style={{
                        color: '#fff',
                        fontSize: '18',
                        fontWeight: 'bolder',
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      Beach Retreat
                    </CardText>
                    <CardText
                      style={{
                        color: '#fff',
                        fontSize: '18',
                        fontWeight: 'bolder',
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <small>$700/week</small>
                    </CardText>
                  </CardImgOverlay>
                </Card> */}
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: '10%', width: '100%' }}>
                <Card style={{ width: '261px', height: '340px' }}>
                  <CardImg top src={BeachHouse2} style={{ width: '100%', height: '50%' }} alt="Card image cap" />

                  <CardText>
                    <text>this si where text will go</text>
                  </CardText>
                </Card>
                <Card style={{ width: '261px', height: '340px' }}>
                  <CardImg top src={BeachHouse2} style={{ width: '100%', height: '50%' }} alt="Card image cap" />

                  <CardText>
                    <text>this si where text will go</text>
                  </CardText>
                </Card>
                <Card style={{ width: '261px', height: '340px' }}>
                  <CardImg top src={BeachHouse2} style={{ width: '100%', height: '50%' }} alt="Card image cap" />

                  <CardText>
                    <text>this si where text will go</text>
                  </CardText>
                </Card>
              </Row>
              {/* <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg top width="auto" height="100%" src={BeachHouse3} alt="Card image cap" />
                </Card>
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg top width="auto" height="100%" src={BeachHouse4} alt="Card image cap" />
                </Card>
              </Row> */}
            </Container>
          ) : (
            <Container id="grid" className="d-none">
              <Row style={{ justifyContent: 'space-between', marginTop: '5%' }}>
                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>

              <Row style={{ justifyContent: 'space-between', marginTop: '5%' }}>
                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>

                <Card style={{ width: '150px', height: '150px' }}>
                  <CardImg
                    width="100%"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>
            </Container>
          )}
          {/* <Button onClick={this.getProperties}>properties</Button> */}
        </Container>
      </div>
    );
  }
}

const styles = {
  buttonStyle: {
    height: '20px',
    width: '100px'
  }
};

const mapStateToProps = state => {
  console.log('state state', state);
  return state;
};

export default connect(mapStateToProps, { propertyFetch })(PropertyList);
