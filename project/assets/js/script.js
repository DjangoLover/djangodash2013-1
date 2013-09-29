//= require plugins/bootstrap.min
//= require plugins/html5shiv
//= require plugins/less-1.3.3.min
//= require plugins/gmaps
//= require plugins/moment.min
//= require plugins/moment-timezone.min
//= require plugins/moment-timezone-data
//= require_self

$(document).ready(function(){

  function local_time() {
    $dates_string = $('.last_update').html();
    $date_list = JSON.parse($dates_string);
    $last_update = moment.utc($date_list).local();
    $last_update_formatted = $last_update.format("MMMM Do YYYY, H:mm");
    $('.last_update').html($last_update_formatted.toString());
  }

  map = new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333,
    height: '400px',
    zoom: 15,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    },
  });

  map.addMarker({
    position: map.getCenter(),
    draggable: true,
  });

  GMaps.geolocate({
    success: function(position) {
      console.log('success');
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.removeMarkers();
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        draggable: true,
        title: 'You'
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
        $friend = $('.block_main .friend_coords');
        $venue = $('.block_main .venue_coords');
        $image = '/static/img/star.png';
        local_time();
        map.addMarker({
          lat: $friend.data("lat"),
          lng: $friend.data("lng"),
          title: 'Your friend'
        });
        map.addMarker({
          lat: $venue.data("lat"),
          lng: $venue.data("lng"),
          icon: $image,
          title: 'Meet point'
        });
        map.fitZoom();
      }
    });
    return false;
  });

});
