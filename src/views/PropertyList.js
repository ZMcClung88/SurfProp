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
            paddingTop: '25px',
            backgroundColor: 'lightgrey',
            marginLeft: '-5.1%'
          }}
        >
          <Row>
            <Dropdown title="BUY" options={(1, 2, 3, 4)} />
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
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
        <p>test test</p>
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
