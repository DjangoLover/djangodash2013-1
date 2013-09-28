//= require plugins/gmapi.js
//= require plugins/gmaps.js
//= require libs/csrf.js
//= require_self

$(document).ready(function(){

  // function record_coords(lat, lng) {

  // }

  map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333,
    height: '400px',
  });

  map.addMarker({
    position: map.getCenter(),
    draggable: true,
  });

  GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.removeMarkers();
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        draggable: true,
      });
      $("#status").load('/record/', {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    },
  });

});
