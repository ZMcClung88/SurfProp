import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class MapBox extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiem1jY2x1bmciLCJhIjoiY2prcTg3NDJnMDdheTNranQ2aTl4c3BlZSJ9.PPje7K1N5p5RHz3iFUkGzA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}

export default MapBox;
