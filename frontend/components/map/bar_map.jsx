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
    if(this.props.singleBar){
      this.MarkerManager.updateMarkers([this.props.bars[Object.keys(this.props.bars)[0]]]); //grabs only that one bar
    } else {
      this.MarkerManager.updateMarkers(this.props.bars);
    }
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

  _handleMarkerClick(bar) {
    this.props.router.push(`bars/${bar.id}`);
  }

  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "bars/new",
  //     query: coords
  //   });
  // }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(BarMap);
