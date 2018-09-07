import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import config from '../config';
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

import { propertyFetch } from '../actions';

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
    firebase.initializeApp(config);
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
    console.log('get properties', _.map(this.props, item => item));
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="lg">
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

        <Container style={{ marginLeft: '-15px', width: '100vw' }}>
          <Row>
            <Col>
              <div style={{ width: '50vw', height: '100vh' }}>
                <Map height="100vh" width="100vw" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container
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
        </Container>

        <Container>
          <Row style={{ marginTop: '15%' }}>
            <h1 style={{ fontSize: '16px' }}>Intoducing Surf Propertiess</h1>
            <p style={{ fontSize: '11px' }}>
              Donec dignissim dignissim sapien vel semper. Morbi consequat vel sapien eu tempus. Donec sapien metus,
              venenatis sit amet finibus quis, tempus in lectus.
            </p>
          </Row>

          <Container>
            <Button>linear</Button>
            <Button onClick={this.toggleView}>grid</Button>
            {/* <h1>{this.state.properties}</h1> */}
          </Container>

          {this.state.toggleView ? (
            <Container id="linear">
              <Row style={{ justifyContent: 'center', marginTop: '20%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>
              <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                </Card>
              </Row>
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
          <Button onClick={this.getProperties}>properties</Button>
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
  const properties = state;
  // console.log('state here', properties);

  return properties;
};

export default connect(mapStateToProps, { propertyFetch })(PropertyList);
