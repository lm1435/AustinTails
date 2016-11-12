if ($(window).width() <420) {
  $('.small-adjust').show();
  $('.large-adjust').hide();
  $('.text-right').css("text-align","left");
} else {
  $('.small-adjust').hide();
  $('.large-adjust').show();
  $('.text-right').css("text-align", "right");
}

  // Map API //
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 30.257927,
      lng: -97.742520
    },
    zoom: 14,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false,
    styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "transit",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#1f2835'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#17263c'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#17263c'
      }]
    }]
  });
}

var feed = new Instafeed({
  get: 'user',
  userId:  3283243219,
  accessToken: '3283243219.1677ed0.bc76925c47d54152af3aee59a5bff458',
  clientId: '326af9e12adf4197aa05eea3f10d0a3d',
  limit: 12,
  sortBy: 'most-recent'
});
feed.run();

$(document).ready(function() {


 });
