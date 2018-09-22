import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = 'AIzaSyAyg2Jm4q_IaE7gPH3IXkmzBfOJleSa5IA';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    center: {
      lat: 11.905573,
      lng: -86.598057
    },
    zoom: 3,
    mapTypeControl: true,
    tilt: 45
  };

  // componentDidMount = options => {
  //   console.log('mounted');
  //   console.log(this.props.options);
  // };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={{ mapTypeId: 'satellite' }}
          disableDefaultUI={true}
        >
          <Marker lat={11.905573} lng={-86.598057} text={'Nicaragua'} />
          <Marker lat={9.6301892} lng={-84.2541844} text={'Costa Rica'} />
          <AnyReactComponent options={this.props.options} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
