//= require plugins/gmapi.js
//= require plugins/gmaps.js
//= require_self

$(document).ready(function(){

  GMaps.geolocate({
    success: function(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      map.setCenter(position.coords.latitude, position.coords.longitude);
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    },
    always: function() {
      alert("Done!");
    }
  });

});
