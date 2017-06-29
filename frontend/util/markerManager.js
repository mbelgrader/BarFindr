/* global google:false */

export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromBar = this._createMarkerFromBar.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(bars){
    this.bars = bars;
    this._barsToAdd().forEach(this._createMarkerFromBar);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _barsToAdd() {
    const currentBars = this.markers.map( marker => marker.barId );
    return this.bars.filter( bar => !currentBars.includes(bar.id) );
  }

  _markersToRemove(){
    const barIds = this.bars.map( bar => bar.id );
    return this.markers.filter( marker => !barIds.includes(marker.barId) );
  }

  _createMarkerFromBar(bar) {
    const pos = new google.maps.LatLng(bar.lat, bar.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      barId: bar.id
    });
    marker.addListener('click', () => this.handleClick(bar));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
