  // Map API //
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 30.357927,
      lng: -97.742520
    },
    zoom: 10,
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
  var marker = new google.maps.Marker({
    position: {lat: 30.400664, lng: -97.749035},
    map: map
  });
}

$(document).ready(function() {
  //Instagram API//
  var feed = new Instafeed({
    get: 'user',
    userId:  3283243219,
    accessToken: '3283243219.1677ed0.bc76925c47d54152af3aee59a5bff458',
    clientId: '326af9e12adf4197aa05eea3f10d0a3d',
    limit: 12,
    sortBy: 'most-recent',
    resolution: 'low_resolution'
  });
  feed.run();

  //collapse navbar when not linking to new page //
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

  // Small screen adjusting for about us //
  if ($(window).width() <420) {
    $('.small-adjust').show();
    $('.large-adjust').hide();
    $('.text-right').css("text-align","left");
  } else {
    $('.small-adjust').hide();
    $('.large-adjust').show();
    $('.text-right').css("text-align", "right");
  }

  //smooth scrolling//
  (function() {
    var $root = $('html, body');
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
        return false;
    });
  })();


  // // formspree protection from spam //
  (function(){
    var contactform = document.getElementById('contactform');
    contactform.setAttribute('action', 'https://formspree.io/' + 'info@texastailsatx.com');

    //form verification for safari because require doesnt work //
    var forms = document.getElementsByTagName('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].noValidate = true;
      forms[i].addEventListener('submit', function(event) {
        if (!event.target.checkValidity()) {
          event.preventDefault();
          alert('Please fill out the form. Thank you!');
        }
      }, false);
    }
  })();

  $("body").scrollspy({
    target: ".navbar",
    offset: 10
  });
});
