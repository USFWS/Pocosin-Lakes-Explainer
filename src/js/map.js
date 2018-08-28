const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  "pk.eyJ1Ijoicmhld2l0dCIsImEiOiJjamt1MXplYzQwMHZvM2twZHhreXhqcXk5In0.RCJ9wv6NNSBO4LKK158A7A";

class Map {
  constructor(opts) {
    opts = opts || {};
    this.map = new mapboxgl.Map({
      container: opts.container || 'map',
      style: opts.style || 'mapbox://styles/mapbox/streets-v9',
      zoom: 5
    });

    if (opts.bounds) this.map.fitBounds(opts.bounds);
  }

  fitBounds(bounds) {
    this.map.fitBounds(bounds);
  }
}

module.exports = Map;