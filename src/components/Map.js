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
      lat: 39.768403,
      lng: -86.158068
    },
    zoom: 11,
    mapTypeControl: true
  };

  componentDidMount = options => {
    console.log('mounted');
    console.log(this.props.options);
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={this.props.options}
          disableDefaultUI={true}
        >
          <Marker lat={39.768403} lng={-86.158068} text={'Indianapolis'} />
          <AnyReactComponent options={this.props.options} lng={-86.158068} lat={39.768403} text={'aaa'} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
