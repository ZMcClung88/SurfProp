import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import SocialLinks from '../components/SocialLinks';
import PageBreak from '../components/PageBreak';
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
                3<FaBed size="2em" />
              </h6>
              <h6>
                2<FaBath size="2em" />
              </h6>
            </div>
          </Row>
        </Container>

        <PageBreak />
      </div>
    );
  }
}

export default SingleProperty;
