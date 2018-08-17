import React, { Component } from 'react';
import { Card, Container, Row } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';
import PageBreak from '../components/PageBreak';
import Map from '../components/Map';
import Carousel from '../components/Carousel';
import { FaBed, FaBath } from 'react-icons/fa';

class SingleProperty extends Component {
  render() {
    return (
      <div style={{ height: '50vh', width: '100vw' }}>
        {/* <h1>Single Property View</h1> */}
        <Carousel />

        <Container style={{ paddingTop: '10%', paddingLeft: '10%' }}>
          <Row style={{ flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '-1%' }}>La Costa Rica</h3>
            <p style={{ marginBottom: '-1%' }}>#3,000,000</p>
            <p>Costa Rica</p>
          </Row>

          <Row style={{ marginTop: '28%' }}>
            <SocialLinks color="grey" />
          </Row>

          <Row>
            <div style={{ paddingLeft: '5%', paddingRight: '10%', marginTop: '-5%' }}>
              <p>
                Aenean vehicula lobortis odio a tempor. Nulla eget tellus sit amet urna commodo sollicitudin. In
                suscipit ligula sit amet est vehicula, a dignissim nulla commodo. Donec vitae risus mattis arcu finibus
                mattis. Phasellus justo lacus, dignissim ac justo vitae, blandit tincidunt lectus. Pellentesque diam
                leo, tincidunt at consectetur sed, suscipit quis magna. Sed in fermentum magna. Maecenas mauris turpis,
                mollis sit amet nisl at, lacinia posuere dui.
              </p>
            </div>

            <div
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: '20%',
                marginTop: '5%'
              }}
            >
              <h6>
                3 <FaBed size="2em" />
              </h6>
              <h6>
                2 <FaBath size="2em" />
              </h6>
            </div>
          </Row>
        </Container>

        <PageBreak />

        <Container style={{ marginBottom: '15%' }}>
          <Row style={{ fontSize: '28px', paddingLeft: '10%' }}>Photos</Row>

          <Row style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10%', marginBottom: '10%' }}>
            <Card
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h5>House</h5>
            </Card>
            <Card
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h5>House</h5>
            </Card>
          </Row>

          <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Card
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h5>House</h5>
            </Card>
            <Card
              style={{
                height: '100px',
                width: '150px',
                backgroundColor: 'grey',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <h5>House</h5>
            </Card>
          </Row>
        </Container>

        <PageBreak />

        <Container style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Row style={{ width: '90%', flexDirection: 'column', marginLeft: '5%' }}>
            <h1>Features</h1>
            <ul>
              <li>WiFi</li>
              <li>Hotub</li>
              <li>Kitchen</li>
              <li>Beach Access</li>
              <li>Pet Friendly</li>
            </ul>
          </Row>
          <Row style={{ width: '90%', flexDirection: 'column', marginLeft: '5%' }}>
            <h1>Ammenities</h1>
            <ul>
              <li>Bar</li>
              <li>Pool Table</li>
              <li>Ping Pong Table</li>
              <li>Beach Access</li>
              <li>Pet Friendly</li>
            </ul>
          </Row>
        </Container>

        <PageBreak />

        <Container style={{ display: 'flex', justifyContent: 'center', marginBottom: '15%' }}>
          <Row style={{ width: '90%' }}>
            <Map />
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingleProperty;
