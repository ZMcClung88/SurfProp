import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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

class PropertyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false,
      picView: true,
      toggleView: true
    };
  }
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

  addProperty = () => {
    this.props.history.push('/admin/NewListing');
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

        <Container>
          <Container>
            <Button onClick={this.addProperty}>Add Property</Button>
          </Container>

          {this.state.toggleView ? (
            <Container style={{ border: '1px solid green' }} id="linear">
              <Row style={{ justifyContent: 'center', marginTop: '20%' }}>
                <Card style={{ width: '90vw', height: '25vh' }}>
                  <CardImg
                    top
                    width="auto"
                    height="auto"
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

export default withRouter(PropertyList);
