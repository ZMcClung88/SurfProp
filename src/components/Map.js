import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.768403,
      lng: -86.158068
    },
    zoom: 1
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBNh1bJP0_cFT3YqPphQ-_-b1wMuN_VQX4' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text={'Indianapolis'} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
