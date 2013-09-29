//= require plugins/gmapi.js
//= require plugins/gmaps.js
//= require libs/csrf.js
//= require_self

$(document).ready(function(){

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

  $('.friend').click(function(){
    marker_position = map.markers[0].getPosition(noWrap=true);
    $("#status").load('/record/', {
      lat: marker_position.lat(),
      lng: marker_position.lng(),
    });
    $.ajax({
      type: "POST",
      data: {lat: marker_position.lat(), lng: marker_position.lng()},
      url: $(this).attr('href'),
      success: function(data){
        $('.block_main').html(data);
      }
    });
    return false;
  });

});
