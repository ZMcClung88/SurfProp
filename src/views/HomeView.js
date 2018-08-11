import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
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

        <Container style={{ marginTop: '15%' }}>
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

        <Container style={{ marginTop: '15%' }}>
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
              <Col style={{ justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '140px', height: '150px' }}>
                  <CardImg
                    top
                    width="auto"
                    height="70%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody style={{ marginTop: '-12%' }}>
                    <CardText>
                      <h6 style={{ marginBottom: '-3%' }}>test test</h6>
                      <p style={{ fontSize: '10px', marginBottom: '-5%' }}>location</p>
                      <p style={{ fontSize: '10px' }}>price</p>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col style={{ justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '140px', height: '150px' }}>
                  <CardImg
                    top
                    width="auto"
                    height="70%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody style={{ marginTop: '-12%' }}>
                    <CardText>
                      <h6 style={{ marginBottom: '-3%' }}>test test</h6>
                      <p style={{ fontSize: '10px', marginBottom: '-5%' }}>location</p>
                      <p style={{ fontSize: '10px' }}>price</p>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col style={{ justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '140px', height: '150px' }}>
                  <CardImg
                    top
                    width="auto"
                    height="70%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody style={{ marginTop: '-12%' }}>
                    <CardText>
                      <h6 style={{ marginBottom: '-3%' }}>test test</h6>
                      <p style={{ fontSize: '10px', marginBottom: '-5%' }}>location</p>
                      <p style={{ fontSize: '10px' }}>price</p>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col style={{ justifyContent: 'center' }}>
                <Card style={{ marginBottom: '15%', width: '140px', height: '150px' }}>
                  <CardImg
                    top
                    width="auto"
                    height="70%"
                    src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                    alt="Card image cap"
                  />
                  <CardBody style={{ marginTop: '-12%' }}>
                    <CardText>
                      <h6 style={{ marginBottom: '-3%' }}>test test</h6>
                      <p style={{ fontSize: '10px', marginBottom: '-5%' }}>location</p>
                      <p style={{ fontSize: '10px' }}>price</p>
                    </CardText>
                  </CardBody>
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
