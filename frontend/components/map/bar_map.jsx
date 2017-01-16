/* global google:false */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class BarMap extends Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this._handleMarkerClick.bind(this));
    if (this.props.singleBar) {
      this.props.fetchBar(this.props.barId);
    } else {
      this._registerListeners();
      this.MarkerManager.updateMarkers(this.props.bars);
    }
  }

  componentDidUpdate() {
    // debugger
    // getting passed all bars instead of filtered
    // it is hitting debugger, so it is updating
    this.MarkerManager.updateMarkers(this.props.bars);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  _handleMarkerClick(bar) {
    this.props.router.push(`bars/${bar.id}`);
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(BarMap);
