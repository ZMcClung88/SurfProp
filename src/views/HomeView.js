import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Video from '../media/Gopro_ First Person Surfing.mp4';
import Map from '../components/Map';
import { FaChevronDown } from 'react-icons/fa';
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
      videoURL: '../media/Gopro_ First Person Surfing.mp4'
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

        <Container className="d-none d-sm-block" style={{ marginLeft: '-2%' }}>
          <Map height="100vh" width="100vw" />
        </Container>

        <Container className="d-md-none" style={{ marginTop: '15%' }}>
          <h6>Find the best surf spots!</h6>
          <Row style={{ overflow: 'scroll', flexWrap: 'nowrap' }}>
            <Col>
              <MenuCards title="Buy" />
            </Col>
            <Col>
              <MenuCards isSelected title="Sell" />
            </Col>
            <Col>
              <MenuCards title="Rent" />
            </Col>
          </Row>
        </Container>

        <Container className="d-md-none" style={{ marginTop: '15%' }}>
          <h6>Introducing Surf Properties</h6>
          <Row>
            <Col>
              <Card>
                <CardBody style={{ height: '350px' }}>
                  <CardText style={{ fontSize: '12px', width: '50%' }}>
                    Bacon ipsum dolor amet pig chuck buffalo pork filet mignon meatball fatback kielbasa ball tip jowl
                    shoulder hamburger boudin.
                  </CardText>
                  <Button color="info">Explore Spots</Button>
                </CardBody>
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
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  {/* <CardBody style={{ marginTop: '-15%' }}>
                    <CardText>
                      <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                    </CardText>
                  </CardBody> */}
                </Card>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
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
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  {/* <CardBody style={{ marginTop: '-15%' }}>
                    <CardText>
                      <p style={{ fontSize: '10px', marginBottom: '5%' }}>location</p>
                    </CardText>
                  </CardBody> */}
                </Card>
              </Col>
              <Col style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '100%', height: '80%' }}>
                  <CardImg
                    top
                    width="auto"
                    height="100%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
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
              <Card>
                <CardBody className="d-flex flex-column" style={{ height: '350px' }}>
                  <CardText style={{ fontSize: '22px', fontWeight: 'bold' }}>
                    Learn to make money off of your properties
                  </CardText>
                  <Button className="d-flex pl-3 mt-auto align-self-end" style={{ width: '45%' }} color="info">
                    Find Out More
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeView;
