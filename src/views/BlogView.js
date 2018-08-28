import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
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

class Blog extends Component {
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
            </Nav>
          </Collapse>
        </Navbar>

        <Container style={{ marginTop: '10%', marginBottom: '5%' }}>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>Blog</h1>
          </Row>
        </Container>

        <Container>
          <Row style={{ marginBottom: '5%' }}>
            <Col>
              <Card>
                <CardImg
                  top
                  width="auto"
                  height="70%"
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                  alt="Card image cap"
                />
                <CardBody style={{ height: '30px', border: 'none' }}>
                  <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ height: '175px', width: '80%', marginTop: '10%', marginBottom: '5%' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
              </CardBody>
            </Card>
          </Row>

          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ height: '175px', width: '80%', marginTop: '10%', marginBottom: '5%' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
              </CardBody>
            </Card>
          </Row>

          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ height: '175px', width: '80%', marginTop: '10%', marginBottom: '5%' }}>
              <CardImg
                top
                width="auto"
                height="70%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody style={{ height: '30px', border: 'none' }}>
                <CardTitle style={{ textAlign: 'center', marginTop: '-15%' }}>{this.props.title}</CardTitle>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Blog;
