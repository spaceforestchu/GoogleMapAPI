 var map;

  var markers = [];

  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7413549, lng: -73.9980244},
      zoom: 13
    });
    var locations = [
          {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
          {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
          {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
          {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
          {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
          {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
        ];


    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    for( var i = 0; i < locations.length ; i++){
      var position = locations[i].location;
      var title = locations[i].title;

      var marker = new google.maps.Marker({
        map: map,
        position: position,
        title: title,
        animation: google.maps.Animation.DROP,
        id: i
      });

      markers.push(marker);


      marker.addListener('click', function(){
        populateInfoWindow(this, largeInfoWindow);
      });
      bounds.extend(markers[i].position);
    }
     map.fitBounds(bounds);
    }


      function populateInforWindow(marker, infowindow) {
        if(infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          infowindow.addListener('closeclick', function(){
            infowindow.setMarker(null);
          });
        }
  }
