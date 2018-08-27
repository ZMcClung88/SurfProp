import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Video from '../media/Gopro_ First Person Surfing.mp4';
import Map from '../components/Map';
import { FaChevronDown } from 'react-icons/fa';
import OnImagesLoaded from 'react-on-images-loaded';
// import Spinner from 'react-spinkit';
import { BeatLoader } from 'react-spinners';
import Spinner from 'react-spinner-material';

import BettyImg from '../media/bette-jane-camp-712007-unsplash.jpg';
import BrianImg from '../media/brian-babb-256298-unsplash.jpg';
import HectorImg from '../media/hector-martinez-635780-unsplash.jpg';
import NivImg from '../media/niv-rozenberg-356666-unsplash.jpg';
import ArnoImg from '../media/arno-smit-141735-unsplash.jpg';
import AbigailImg from '../media/abigail-lynn-316133-unsplash.jpg';
import EpicImg from '../media/epicurrence-64516-unsplash.jpg';
import NickImg from '../media/nick-baker-98364-unsplash.jpg';
import OstapImg from '../media/ostap-senyuk-136511-unsplash.jpg';
import TimCookImg from '../media/tim-cook-97924-unsplash.jpg';
import TimMImg from '../media/tim-marshall-666366-unsplash.jpg';
// import { Player, ControlBar } from 'video-react';
// import Col from 'react-bootstrap/lib/Col';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardText,
  Collapse,
  Col,
  Container,
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
import MenuCards from '../components/MenuCards';

class HomeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      videoURL: '../media/Gopro_ First Person Surfing.mp4',
      loaded: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onClick = () => {
    this.props.history.push('/properties');
  };

  render() {
    const hiddenStyle = { display: 'none' };
    const visibleStyle = {};

    return (
      <div>
        <div style={this.state.loaded ? visibleStyle : hiddenStyle}>
          <OnImagesLoaded
            onLoaded={() => this.setState({ loaded: true })}
            onTimeout={() => this.setState({ loaded: true })}
            timeout={7000}
          >
            <Navbar style={this.state.loaded ? visibleStyle : hiddenStyle} fixed="top" color="light" light expand="lg">
              <NavbarBrand href="/">surfProp</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <NavLink tag={Link} to="/properties">
                      BUY
                    </NavLink>
                  </NavItem>
                  <NavItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <NavLink href="#">SELL</NavLink>
                  </NavItem>
                  <NavItem style={{ display: 'flex', justifyContent: 'center' }}>
                    <NavLink href="#">RENT</NavLink>
                  </NavItem>
                  <NavItem style={{ display: 'flex', justifyContent: 'center' }}>
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

            <Container className="d-none d-sm-block" style={{ width: '90vw', marginLeft: '-2%' }}>
              <video style={{ width: '100vw' }} id="background-video" muted="true" loop autoPlay>
                <source src={Video} type="video/mp4" />
                <source src={Video} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <Row
                style={{
                  marginLeft: '0%',
                  marginTop: '-10vh',
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                  <FaChevronDown style={{ color: '#fff' }} size="3em" />
                </Col>
              </Row>
            </Container>

            <Container
              className="d-none d-sm-block"
              style={{
                marginTop: '5%',
                display: 'flex',
                justifyContent: 'center',
                width: '100vw'
              }}
            >
              <Map height="90vh" width="90vw" />
            </Container>

            <Container id="menu_container" className="d-md-none" style={{ marginTop: '35%', overflow: 'hidden' }}>
              <div style={{ overflow: 'auto' }}>
                <h6>Find the best surf spots!</h6>
                <Row style={{ overflowY: 'scroll', flexWrap: 'nowrap' }}>
                  <Col>
                    <MenuCards onClick={this.onBuyClick} src={ArnoImg} title="Buy" />
                  </Col>
                  <Col>
                    <MenuCards onClick={this.onSellClick} src={BrianImg} isSelected title="Sell" />
                  </Col>
                  <Col>
                    <MenuCards onClick={this.onRentClick} src={NivImg} title="Rent" />
                  </Col>
                </Row>
              </div>
            </Container>

            <Container className="d-md-none" style={{ marginTop: '15%' }}>
              <h6>Introducing Surf Properties</h6>
              <Row>
                <Col>
                  <Card style={{ position: 'relative', height: '350px' }}>
                    <CardImg
                      style={{ opacity: '0.8' }}
                      top
                      width="auto"
                      height="100%"
                      src={AbigailImg}
                      alt="Card image cap"
                    />
                    {/* <CardBody style={{ height: '350px' }}> */}
                    <CardText
                      style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        color: '#fff',
                        top: 0,
                        left: 0,
                        position: 'absolute',
                        width: '66%',
                        paddingLeft: '5%',
                        paddingTop: '5%',
                        fontSize: '18px'
                      }}
                    >
                      Bacon ipsum dolor amet pig chuck buffalo pork filet mignon meatball fatback kielbasa ball tip jowl
                      shoulder hamburger boudin.
                    </CardText>
                    <Button
                      onClick={this.onClick}
                      style={{
                        width: '45%',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        marginBottom: '5%',
                        marginRight: '5%'
                      }}
                      color="info"
                    >
                      Explore Spots
                    </Button>
                    {/* </CardBody> */}
                  </Card>
                </Col>
              </Row>
            </Container>

            <Container style={{ marginTop: '15%' }}>
              <h6 style={{ marginBottom: '5%' }}>Spots around the world</h6>
              <Container>
                <Row>
                  <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                      <CardImg top width="auto" height="100%" src={AbigailImg} alt="Card image cap" />
                      {/* <CardBody style={{ marginTop: '-15%' }}>
                        <CardText>
                          <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                        </CardText>
                      </CardBody> */}
                    </Card>
                  </Col>
                  <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                      <CardImg top width="auto" height="100%" src={NickImg} alt="Card image cap" />
                      {/* <CardBody style={{ marginTop: '-15%' }}>
                        <CardText>
                          <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                        </CardText>
                      </CardBody> */}
                    </Card>
                  </Col>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                  <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                      <CardImg top width="auto" height="100%" src={OstapImg} alt="Card image cap" />
                      {/* <CardBody style={{ marginTop: '-15%' }}>
                        <CardText>
                          <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                        </CardText>
                      </CardBody> */}
                    </Card>
                  </Col>
                  <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                      <CardImg top width="auto" height="100%" src={TimCookImg} alt="Card image cap" />
                      {/* <CardBody style={{ marginTop: '-15%' }}>
                        <CardText>
                          <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                        </CardText>
                      </CardBody> */}
                    </Card>
                  </Col>
                </Row>
              </Container>
              <div style={{ width: '100%', textAlign: 'center', marginBottom: '5%' }}>
                <Button style={{ width: '50%' }}>Show All</Button>
              </div>
            </Container>

            <Container style={{ marginTop: '15%', marginBottom: '15%' }}>
              <Row>
                <Col>
                  <Card style={{ position: 'relative', height: '350px' }}>
                    {/* <CardBody className="d-flex flex-column" style={{ height: '350px' }}> */}
                    <CardImg style={{ opacity: '0.8' }} width="auto" height="100%" src={EpicImg} alt="Card image cap" />
                    <CardText
                      className="card-text"
                      style={{
                        fontSize: '22px',
                        fontWeight: 'bold',
                        top: 0,
                        left: 0,
                        position: 'absolute',
                        width: '66%',
                        paddingLeft: '5%',
                        paddingTop: '5%',
                        fontSize: '18px'
                      }}
                    >
                      Learn to make money off of your property
                    </CardText>
                    <Button
                      className="d-flex pl-3 mt-auto align-self-end"
                      style={{
                        width: '45%',
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        marginBottom: '5%'
                      }}
                      color="info"
                    >
                      Find Out More
                    </Button>
                    {/* </CardBody> */}
                  </Card>
                </Col>
              </Row>
            </Container>
          </OnImagesLoaded>
        </div>

        <div style={!this.state.loaded ? visibleStyle : hiddenStyle}>
          {/* <Spinner /> */}
          <div
            style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <BeatLoader />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeView);
