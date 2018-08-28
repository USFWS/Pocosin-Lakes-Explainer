const Map = require('./map');

const map = new Map({
  bounds: [["-84.562", "33.782"], ["-75.305", "36.708"]]
});

setTimeout(() => {
  map.fitBounds([["-76.684", "35.620"], ["-76.163", "35.881"]]);
}, 5000);

document.documentElement.classList.remove('no-js');

