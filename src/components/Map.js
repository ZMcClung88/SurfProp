import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapGL, { NavigationControl } from 'react-map-gl';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 39.768403,
//       lng: -86.158068
//     },
//     zoom: 1
//   };
//
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBNh1bJP0_cFT3YqPphQ-_-b1wMuN_VQX4' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent lat={this.props.lat} lng={this.props.lng} text={'Indianapolis'} />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

const TOKEN = 'pk.eyJ1Ijoiem1jY2x1bmciLCJhIjoiY2prcTg3NDJnMDdheTNranQ2aTl4c3BlZSJ9.PPje7K1N5p5RHz3iFUkGzA';

const navStyle = {
  height: '100vh',
  width: '90vw'
};

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 1,
        bearing: 0,
        pitch: 0,
        width: 325,
        height: 300
      }
    };
  }
  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        style={{ textAlign: 'left' }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={TOKEN}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}

export default SimpleMap;
