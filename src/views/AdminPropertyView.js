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
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
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

        {/* <Container style={{ marginLeft: '-15px', width: '100vw' }}>
          <Row>
            <Col>
              <div style={{ width: '50vw', height: '100vh' }}>
                <Map height="100vh" width="100vw" />
              </div>
            </Col>
          </Row>
        </Container> */}

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
            <Dropdown title="MAX PRICE" /> */}

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
        {/* </Row>
        </Container> */}

        <Container>
          {/* <Row style={{ marginTop: '15%' }}>
            <h1 style={{ fontSize: '16px' }}>Intoducing Surf Propertiess</h1>
            <p style={{ fontSize: '11px' }}>
              Donec dignissim dignissim sapien vel semper. Morbi consequat vel sapien eu tempus. Donec sapien metus,
              venenatis sit amet finibus quis, tempus in lectus.
            </p>
          </Row> */}

          <Container>
            {/* <Button>linear</Button> */}
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
                  {/* <CardBody style={{ height: '30px', border: 'none' }}>
                  <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle> */}
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  {/* <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText> */}
                  {/* <Button>Button</Button> */}
                  {/* </CardBody> */}
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
                  {/* <CardBody style={{ height: '30px', border: 'none' }}>
                  <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle> */}
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  {/* <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText> */}
                  {/* <Button>Button</Button> */}
                  {/* </CardBody> */}
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
                  {/* <CardBody style={{ height: '30px', border: 'none' }}> */}
                  {/* <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle> */}
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  {/* <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText> */}
                  {/* <Button>Button</Button> */}
                  {/* </CardBody> */}
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
                  {/* <CardBody style={{ height: '30px', border: 'none' }}>
                  <CardTitle style={{ marginTop: '-5%' }}>Surf Villa</CardTitle> */}
                  {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
                  {/* <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </CardText> */}
                  {/* <Button>Button</Button> */}
                  {/* </CardBody> */}
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
