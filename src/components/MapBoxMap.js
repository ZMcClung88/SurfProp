import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

class MapBox extends Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoiem1jY2x1bmciLCJhIjoiY2prcTg3NDJnMDdheTNranQ2aTl4c3BlZSJ9.PPje7K1N5p5RHz3iFUkGzA';
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 1,
      height: '90vh',
      width: '90vw'
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      top: 0,
      bottom: 0,
      width: this.props.width,
      height: this.props.height
    };

    return <div style={style} ref={el => (this.mapContainer = el)} />;
  }
}

export default MapBox;
