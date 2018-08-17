import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
import Dropdown from '../components/Dropdown';

class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggle2 = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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

        <Container style={{ marginLeft: '-30px' }}>
          <Row>
            <Col>
              <div style={{ width: '50vw' }}>
                <Map lat={39.768403} lng={-86.1581} />
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          style={{
            height: '100px',
            width: '112%',
            backgroundColor: 'lightgrey',
            marginLeft: '-5.1%'
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

            {/* <Dropdown placeholder="Select Friend" fluid selection options={categoryOptions} /> */}
            {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle2}>
              <DropdownToggle color="info" caret>
                BUY
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>BUY</DropdownItem>
                <DropdownItem>RENT</DropdownItem>
                <DropdownItem>RETREAT</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            {/* <DropdownButton>
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>
                Active Item
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton> */}
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

          <Row style={{ justifyContent: 'center', marginTop: '20%' }}>
            <Card style={{ width: '90vw', height: '25vh' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText> */}
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Row>
          <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
            <Card style={{ width: '90vw', height: '25vh' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText> */}
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Row>
          <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
            <Card style={{ width: '90vw', height: '25vh' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText> */}
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Row>
          <Row style={{ justifyContent: 'center', marginTop: '10%' }}>
            <Card style={{ width: '90vw', height: '25vh' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle>
                {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                {/* <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText> */}
                {/* <Button>Button</Button> */}
              </CardBody>
            </Card>
          </Row>
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

export default PropertyList;
