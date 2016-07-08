var test = require('tape');
var path = require('path');
var geostats = require('../');

var result = geostats(fixture('simple.geojson'));

// geostats(fixture('populations-plus.geojson'))
result.then(function (stats) {
    console.log(JSON.stringify(stats, null, 2));
  })
  .catch(function (err) {
    console.error(err.stack);
  });

function fixture(fileName) {
  return path.join(__dirname, 'fixtures', fileName);
}
